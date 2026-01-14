'use client';

export default function About() {
  return (
    <section className="about" id="about">
      <p id="about">ABOUT ME</p>
      <div className="title">
        <h1>Building Meaningful</h1>
        <h1>Digital Experiences</h1>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="about-container">
        <div className="info-about">
          <div className="about-info">
            <p>
              I'm a creative front-end developer passionate about building modern and responsive web experiences.
              <br />My journey began with a love for design and evolved into a deep curiosity for how the web works combining <br /> logic with creativity to bring ideas to life.
            </p>
            <p>
              When I'm not coding, I enjoy learning new technologies, improving my projects, <br /> and exploring better ways to make the web faster and more engaging.
              <br />I believe in continuous learning, attention to detail, and the power of clean, meaningful design
            </p>
          </div>
          <h2>What Drives Me</h2>
          <div className="card">
            <div className="c1">
              <h3><i className="fa-solid fa-code"></i> Languoges</h3>
              <p>HTNL,CSS,JavaScript,Java,C,React</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
              <p>BS in Software Engineering</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-folder-open"></i> Projects</h3>
              <p>Built more than 5 projects</p>
            </div>
          </div>
        </div>
        <img src="/images/img.jpg" alt="" />
      </div>
    </section>
  );
}
