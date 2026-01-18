'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    const typingElement = document.querySelector('.info-home h3');
    const words = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast", "React Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];
      const displayedText = currentWord.substring(0, charIndex);

      if (typingElement) {
        typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';
      }

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
      }
    }

    type();
  }, []);

  return (
    <section id="home" className="home">
      <p className="home-p">
        <span className="home-s">. </span>Available for freelance work
      </p>
      <div className="home-container">
        <div className="info-home">
          <h1>Hi, I&apos;m Munazza Javed</h1>
          <h3>Frontend Developer</h3>
          <div className="info-p">
            <p>I create beautiful, function, and user-centerd digital experiences. With</p>
            <p>2+ years of experiences in web Development, I bring ideas to life through</p>
            <p>clean code and thoughtful design</p>
          </div>
          <div className="info-p2">
            <p><i className="fa-solid fa-location-dot"></i> Based in Abbottabad, Pakistan</p>
            <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
          </div>
          <div className="btnn">
            <button className="btn-home1"><i className="fa-solid fa-arrow-right"></i> Hire Me</button>
            <a href="/Munazza.pdf" download="Munazza.pdf" className="btn-home2"><i className="fa-solid fa-download"></i> Download CV</a>
          </div>
          <div className="hhr">
            <hr />
          </div>
          <div className="follow">
            <p className="followw">Follow me:</p>
            <ul>
              <li><a href="https://github.com/SP23-BSE-106"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/munazza-javed-974b38299"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <Image src="/images/img2.jpg" alt="Profile" width={480} height={480} className="rounded-lg" />
      </div>
    </section>
  );
}
