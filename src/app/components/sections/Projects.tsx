'use client';

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
          <img src="/images/Cleveroad.jpg" alt="E-Commerce Website" />
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
          <img src="/images/portfolio.jpg" alt="Portfolio Website" />
          <h3>Portfolio Website</h3>
          <p>Personal portfolio to showcase my design and coding projects.</p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">Bootstrap</a>
          </div>
          <div className="btns">
            <a href="#" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/Weather Forecast Dashboard.jpg" alt="Weather App" />
          <h3>Weather App</h3>
          <p>Responsive app showing real-time weather data using API integration.</p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">API</a>
          </div>
          <div className="btns">
            <a href="#" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/WordPress dashboard design concept.jpg" alt="Blog Website" />
          <h3>Blog Website</h3>
          <p>Clean and simple blogging platform with markdown support.</p>
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

        <div className="project-card">
          <img src="/images/Game Dashboard Design.jpg" alt="Game Landing Page" />
          <h3>Game Landing Page</h3>
          <p>Landing page for a game with animations and parallax effects.</p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">GSAP</a>
          </div>
          <div className="btns">
            <a href="#" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/Task manager app.jpg" alt="Task Manager" />
          <h3>Task Manager</h3>
          <p>Task tracking web app with CRUD features and clean UI.</p>
          <div className="skills">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">JS</a>
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
