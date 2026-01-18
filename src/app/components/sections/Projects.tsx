'use client';

import Image from 'next/image';

export default function Projects() {
  return (
    <section className="project" id="project">
      <p>PROJECTS</p>
      <h1>Featured Work</h1>
      <hr />
      <div className="info-pro">
        <p>A showcase of my recent projects demonstrating expertise in full-stack </p>
        <p>development, modern frameworks, and creative problem-solving.</p>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <Image src="/images/Ecomerce.jpg" alt="E-Commerce Website" width={400} height={300} />
          <h3>E-Commerce Website</h3>
          <p>Modern online store with product filtering, cart, and payment system.</p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">JavaScript</a>
          </div>
          <div className="btns">
            <a href="#" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <Image src="/images/portfolio.jpg" alt="Portfolio Website" width={400} height={300} />
          <h3>Portfolio Website</h3>
          <p>Personal portfolio to showcase my design and coding projects.</p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">Bootstrap</a>
          </div>
          <div className="btns">
            <a href="" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <Image src="/images/uniportal.jpg" alt="Blog Website" width={400} height={300} />
          <h3>University Website</h3>
          <p>Clean and simple University website with course listings and contact form.

          </p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">Tailwind</a>
            <a href="#">JavaScript</a>
          </div>
          <div className="btns">
            <a href="#" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
