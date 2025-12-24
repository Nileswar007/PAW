import React from "react";

import "../styles/main.css";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Give Strays a Second<br />Chance at Love
          </h1>
          <p>
            PawCare connects compassionate people with animals in need.
            Report strays, adopt a furry friend, or support our mission through donations.
          </p>
          <div className="hero-buttons">
            <button className="primary">Get Started</button>
            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a"
            alt="Pet"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Everything You Need to Help Animals</h2>
        <p className="subtitle">
          Our comprehensive platform makes it easy to make a difference in the lives of stray animals
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <span>❗</span>
            <h3>Report Strays</h3>
            <p>Report stray locations and help us rescue animals quickly.</p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <h3>Adopt a Pet</h3>
            <p>Browse available animals and give a rescued pet a loving home.</p>
          </div>

          <div className="feature-card">
            <span>💝</span>
            <h3>Make Donations</h3>
            <p>Support rescue efforts through monetary donations.</p>
          </div>

          <div className="feature-card">
            <span>🛍️</span>
            <h3>Shop Supplies</h3>
            <p>Purchase supplies and support our rescue mission.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h1>2,500+</h1>
          <p>Animals Rescued</p>
        </div>
        <div>
          <h1>1,800+</h1>
          <p>Successful Adoptions</p>
        </div>
        <div>
          <h1>500+</h1>
          <p>Active Volunteers</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Make a Difference?</h2>
        <p>
          Join thousands of animal lovers who are helping give strays a second chance at happiness
        </p>
        <button className="primary">Join PawCare Today</button>
      </section>
    </>
  );
}

export default Home;