'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.ul-list li a');
    const sections = document.querySelectorAll('section');

    function removeActive() {
      navLinks.forEach(link => {
        const parent = link.parentElement;
        if (parent) parent.classList.remove('active');
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;

        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });

        removeActive();
        const parent = link.parentElement;
        if (parent) parent.classList.add('active');
      });
    });

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          removeActive();
          const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
          if (activeLink?.parentElement) {
            activeLink.parentElement.classList.add('active');
          }
        }
      });
    });
  }, []);

  return (
    <header className="header-list">
      <div className="div-list">
        <ul className="ul-list">
          <li className="active">
            <i className="fa-regular fa-house"></i>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <i className="fa-regular fa-address-card"></i>
            <Link href="#about">About</Link>
          </li>
          <li>
            <i className="fa-regular fa-folder-open"></i>
            <Link href="#project">Projects</Link>
          </li>
          <li>
            <i className="fa-solid fa-code"></i>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
