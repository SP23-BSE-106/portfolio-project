import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munazza Javed - Portfolio",
  description: "Frontend Developer Portfolio - Munazza Javed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300..800&family=Playfair+Display:wght@400..900&family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body suppressHydrationWarning>
        <header className="header-list">
          <div className="div-list">
            <ul className="ul-list">
              <li className="active">
                <i className="fa-solid fa-home"></i>
                <a href="#home">Home</a>
              </li>
              <li>
                <i className="fa-regular fa-address-card"></i>
                <a href="#about">About</a>
              </li>
              <li>
                <i className="fa-regular fa-folder-open"></i>
                <a href="#project">Projects</a>
              </li>
              <li>
                <i className="fa-solid fa-code"></i>
                <a href="#services">Services</a>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="footer-container">
            <h2 className="footer-logo">Munazza Javed</h2>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-social">
              <a href="https://github.com/SP23-BSE-106" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/munazza-javed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/+923205729845" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <p className="footer-copy">&copy; {new Date().getFullYear()} Munazza Javed. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
