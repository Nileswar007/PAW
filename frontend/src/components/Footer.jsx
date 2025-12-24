import React from "react";

import "../styles/main.css";

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3>🐾 PawCare</h3>
          <p>Dedicated to rescuing and rehoming stray animals since 2020.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Features</p>
          <p>Get Started</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Volunteer</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: info@pawcare.org</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Rescue Lane</p>
        </div>
      </div>

      <div className="copyright">
        © 2025 PawCare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;