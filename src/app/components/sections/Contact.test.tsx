import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

/* ===========================
   CORRECT reCAPTCHA MOCK
   (REF-BASED, NOT onChange)
=========================== */

jest.mock('react-google-recaptcha', () => {
  const MockRecaptcha = React.forwardRef((_props: unknown, ref: React.Ref<unknown>) => {
    React.useImperativeHandle(ref, () => ({
      getValue: () => 'fake-captcha-token',
      reset: jest.fn(),
    }));

    return <div data-testid="recaptcha">Mock reCAPTCHA</div>;
  });
  MockRecaptcha.displayName = 'MockRecaptcha';
  return MockRecaptcha;
});

/* ===========================
   FETCH MOCK
=========================== */
global.fetch = jest.fn();

describe('Contact Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });
  });

  it('renders the contact form', () => {
    render(<Contact />);

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Send Message' })
    ).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<Contact />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Send Message' })
    );

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('validates invalid email format', async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Send Message' })
    );

    await waitFor(() => {
      expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    });
  });

  it('validates message length', async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: { value: 'Short' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Send Message' })
    );

    await waitFor(() => {
      expect(
        screen.getByText('Message must be at least 10 characters')
      ).toBeInTheDocument();
    });
  });

  it('submits form successfully when valid', async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' },
    });

    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: {
        value: 'This is a valid message with enough characters.',
      },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Send Message' })
    );

    expect(await screen.findByText('Message sent successfully!'))
      .toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message with enough characters.',
        recaptchaToken: 'fake-captcha-token',
      }),
    });
  });

  it('shows server error on failed submission', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Server error' }),
    });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' },
    });

    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: {
        value: 'This is a valid message with enough characters.',
      },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Send Message' })
    );

    expect(await screen.findByText('Server error'))
      .toBeInTheDocument();
  });
});
