'use client';

import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

export default function Home() {
  useEffect(() => {
    // Loading screen effect
    const loadingText = document.getElementById("loading-text");
    const mainIcon = document.querySelector(".main-icon");
    const subIcons = document.querySelectorAll(".sub-icons i");
    const designerText = document.getElementById("designer-text");
    const mainPage = document.getElementById("main-page");
    const loadingScreen = document.getElementById("loading-screen");

    function showElement(element: Element | null, delay = 0) {
      if (!element) return;
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("fall");
      }, delay);
    }

    showElement(loadingText, 0);
    showElement(mainIcon, 800);
    subIcons.forEach((icon, idx) => {
      showElement(icon, 1600 + idx * 400);
    });
    showElement(designerText, 2800);

    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          if (loadingScreen) loadingScreen.style.display = 'none';
        }, 500);
      }
      if (mainPage) mainPage.classList.add("visible");
    }, 4000);

    // Navigation
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.ul-list li a');
  const sections = document.querySelectorAll<HTMLElement>('section');

    function removeActive() {
      navLinks.forEach(link => {
        const parent = link.parentElement;
        if (parent) parent.classList.remove('active');
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;

        window.scrollTo({
          top: (targetSection as HTMLElement).offsetTop - 80,
          behavior: 'smooth'
        });

        removeActive();
        const parent = link.parentElement;
        if (parent) parent.classList.add('active');
      });
    });

    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sec = section as HTMLElement;
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          removeActive();
          const activeLink = document.querySelector(`.ul-list li a[href="#${sec.id}"]`);
          if (activeLink?.parentElement) {
            activeLink.parentElement.classList.add('active');
          }
        }
      });

      // Back to top button
      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        if (window.scrollY > 500) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      }

      // Reveal animations
      const revealElements = document.querySelectorAll<HTMLElement>('.home-container, .about-container, .projects-container, .services-container, .contact-content');
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active-reveal');
        }
      });
    });

    // Back to top button
    const backToTop = document.createElement('div');
    backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    backToTop.id = "back-to-top";
    document.body.appendChild(backToTop);

    backToTop.style.cssText = `
      position: fixed;
      bottom: 40px;
      right: 40px;
      background: #474af0;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease;
    `;

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
    backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

    // Card hover effects
    const cards = document.querySelectorAll<HTMLElement>('.project-card, .c1, .service-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => (card.style.transform = 'translateY(-8px) scale(1.05)'));
      card.addEventListener('mouseleave', () => (card.style.transform = 'translateY(0) scale(1)'));
    });
  }, []);

  return (
    <>
      <div id="loading-screen">
        <div className="loading-content">
          <i className="fa-solid fa-laptop-code fa-5x main-icon hidden"></i>
          <h1 id="loading-text" className="hidden">MY PROFILE</h1>
          <div className="sub-icons">
            <i className="fa-brands fa-github fa-2x hidden"></i>
            <i className="fa-solid fa-code fa-2x hidden"></i>
            <i className="fa-solid fa-user fa-2x hidden"></i>
          </div>
          <h2 id="designer-text" className="hidden">Designed by Munazza Javed</h2>
        </div>
      </div>

      <div id="main-page">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
    </>
  );
}
