import { NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';

// MongoDB requires the Node.js runtime (not Edge) on Vercel.
export const runtime = 'nodejs';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY not set');
    return false;
  }

  try {
    // For reCAPTCHA Enterprise, we need to use the Enterprise API
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY not set');
      return false;
    }

    // For reCAPTCHA Enterprise, you need to provide your actual Google Cloud Project ID
    // This is NOT the same as the site key prefix
    const projectId = process.env.RECAPTCHA_PROJECT_ID || 'noted-door-474806-b0';

    const response = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secret}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: {
          token: token,
          expectedAction: 'SUBMIT_CONTACT',
          siteKey: siteKey,
        },
      }),
    });

    const data = await response.json();

    // Check if the assessment was successful
    if (data.tokenProperties?.valid && data.riskAnalysis?.score >= 0.5) {
      return true;
    }

    console.warn('reCAPTCHA Enterprise verification failed:', data);
    return false;
  } catch (error) {
    console.error('reCAPTCHA Enterprise verification error:', error as Error);
    return false;
  }
}

export async function POST(req: Request) {
  const startTime = Date.now();
  try {
    const body = await req.json();
    const { name, email, message, recaptchaToken } = body;

    console.log(`Contact POST request from ${req.headers.get('x-forwarded-for') || 'unknown IP'} at ${new Date().toISOString()}`);

    if (!name || !email || !message) {
      console.warn('Contact POST: Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!recaptchaToken) {
      console.warn('Contact POST: Missing reCAPTCHA token');
      return NextResponse.json({ error: 'reCAPTCHA verification required' }, { status: 400 });
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      console.warn('Contact POST: Invalid reCAPTCHA');
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    if (!process.env.MONGODB_URI) {
      // In production we want this to be a hard failure so deployments don't silently drop messages.
      if (process.env.NODE_ENV === 'production') {
        console.error('Contact POST: MONGODB_URI not set in production');
        return NextResponse.json({ error: 'MongoDB not configured' }, { status: 500 });
      }

      console.warn('Contact POST: MongoDB not configured (development), not storing');
      return NextResponse.json({
        success: true,
        message: 'Message received (not stored - MongoDB not configured)',
      });
    }

    const client = await getMongoClient();
    const db = client.db(process.env.MONGODB_DB ?? 'portfolio');
    const collection = db.collection('contacts');
    const result = await collection.insertOne({ name, email, message, createdAt: new Date() });

    const duration = Date.now() - startTime;
    console.log(`Contact POST: Successfully saved message from ${email}, ID: ${result.insertedId}, duration: ${duration}ms`);

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (err: unknown) {
    const duration = Date.now() - startTime;
    console.error(`Contact POST error after ${duration}ms:`, err as Error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Temporarily return empty array since MongoDB is disabled
    console.warn('Contact GET: MongoDB storage disabled');
    return NextResponse.json({ success: true, data: [], message: 'MongoDB storage disabled' });
  } catch (err: unknown) {
    console.error('Contact GET error:', err as Error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
