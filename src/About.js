

import React from 'react';
import './About.css'; // Don't forget to create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Discover our journey, values, and what makes us unique in the fashion world.</p>
      </section>

      <section className="about-content">
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, affordable, and stylish clothing for everyone. We believe fashion should be
            accessible, sustainable, and empowering.
          </p>
        </div>

        <div className="about-box">
          <h2>Who We Are</h2>
          <p>
            We are a team of designers, developers, and dreamers. Our passion lies in helping people feel confident
            and comfortable through fashion.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Story</h2>
          <p>
            Founded in 2022, we started as a small local store. Today, we ship globally and continue to grow with our
            community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
