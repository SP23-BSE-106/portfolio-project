'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section className="services" id="services">
      <p>SERVICES</p>
      <h1>Our Features & Services</h1>
      <hr />
      <div className="services-container">
        <div className="service-card">
          <Image src="/images/web.svg" alt="Web Development" width={100} height={100} />
          <h3>Web Development</h3>
          <p>Build responsive, accessible, and high-performance websites using React, Next.js, and modern web standards; SEO and mobile-first design included.</p>
        </div>

        <div className="service-card">
          <Image src="/images/app.svg" alt="App Development" width={100} height={100} />
          <h3>App Development</h3>
          <p>Develop native and cross-platform mobile apps with smooth UX, offline support, and integrations (React Native, Flutter), tailored to your product goals.</p>
        </div>

        <div className="service-card">
          <Image src="/images/dm.svg" alt="Digital Marketing" width={100} height={100} />
          <h3>Digital Marketing</h3>
          <p>Grow your brand with data-driven marketing: SEO, paid advertising (PPC), social strategy, content marketing, and analytics to measure ROI.</p>
        </div>

        <div className="service-card">
          <Image src="/images/seo.svg" alt="Email Marketing" width={100} height={100} />
          <h3>Email Marketing</h3>
          <p>Create targeted email campaigns and automation for customer retention: segmentation, A/B testing, deliverability best practices, and reporting.</p>
        </div>
      </div>
    </section>
  );
}
