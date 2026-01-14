import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">. </span>Available for freelance work
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Munazza Javed</h1>
            <h3>Frontend Developer</h3>
            <div className="info-p">
              <p>I create beautiful, functional, and user-centered digital experiences. With </p>
              <p>2+ years of experiences in Web Development, I bring ideas to life through </p>
              <p>clean code and thoughtful design</p>
            </div>
            <div className="info-p2">
              <p><i className="fa-solid fa-location-dot"></i> Based in Abbottabad, Pakistan</p>
              <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
            </div>
            <div className="btnn">
              <button className="btn-home1"><i className="fa-solid fa-arrow-right"></i> Hire Me</button>
              <button className="btn-home2"><i className="fa-solid fa-download"></i> Download CV</button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-discord"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <Image src="/images/img2.jpg" alt="Profile" width={480} height={480} className="rounded-lg" />
      </div>
    </section>
  );
};

export default Home;