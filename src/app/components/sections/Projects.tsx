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
            <a href="#">Next.js</a>
            <a href="#">MongoDB</a>
            <a href="#">TypeScript</a>
          </div>
          <div className="btns">
            <a href="https://github.com/SP23-BSE-106/Clothify" className="btn"><i className="fab fa-github"></i> GitHub</a>
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
            <a href="#">Next.js</a>
            <a href="#">TypeScript</a>
            <a href="#">Tailwind CSS</a>
          </div>
          <div className="btns">
            <a href="https://github.com/SP23-BSE-106/portfolio-project" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://portfolio-project-git-master-munazza-javeds-projects.vercel.app?_vercel_share=arfrTKEk0ltCoFWHjlaCPKa3kv5MFDd8" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
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
            <a href="#">Next.js</a>
            <a href="#">MongoDB</a>
            <a href="#">Node.js</a>
          </div>
          <div className="btns">
            <a href="https://github.com/SP23-BSE-106/InternshipWEB/tree/6515ff4303fc2b942ead8ea4ad9f6c8b9d033851/university-portal" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
