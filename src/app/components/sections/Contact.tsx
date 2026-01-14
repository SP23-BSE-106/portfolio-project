'use client';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p>CONTACT</p>
      <h1>Get in Touch with Us</h1>
      <div className="contact-content">
        <div className="contact-info slide-in-left">
          <p>I'm always open to discuss exciting projects and new opportunities. Let's collaborate!</p>
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
              <span>Abottabad, Pakistan</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/SP23-BSE-106" className="social-link" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/munazza-javed-974b38299" className="social-link" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/923205729845" className="social-link" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="contact-form slide-in-right">
          <form id="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required name="user_name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required name="user_email" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
