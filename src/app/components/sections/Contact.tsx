'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    if (!validate()) return;

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setErrorMessage('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        recaptchaRef.current?.reset();
      } else {
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="contact" id="contact">
      <p>CONTACT</p>
      <h1>Get in Touch with Us</h1>

      <div className="contact-content">
        <div className="contact-info">
          <p>
            I&apos;m always open to discuss exciting projects and new
            opportunities. Let&apos;s collaborate!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>munazzajaved277@gmail.com</span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+92 3205729845</span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Abbottabad, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <div className="form-group">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={
                  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'test-key'
                }
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
