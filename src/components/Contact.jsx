import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiShare2, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Ready to bring your next project to life? Let's discuss how my expertise in AI and full-stack development can help achieve your goals.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><FiMail /></div>
              <div>
                <h3>Email</h3>
                <a href="mailto:seemanth.kurapati@gmail.com">seemanth.kurapati@gmail.com</a>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FiPhone /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 89195 68249</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FiMapPin /></div>
              <div>
                <h3>Location</h3>
                <p>Hyderabad, India (Available for Remote)</p>
              </div>
            </div>
            
             <div className="info-card">
              <div className="info-icon"><FiShare2 /></div>
              <div>
                <h3>Socials</h3>
                <div className="social-links-mini">
                    <a href="https://linkedin.com/in/kurapati-seemanth-raju" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/seemanth-raju" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn" onClick={() => window.location.href = "mailto:seemanth.kurapati@gmail.com"}>
              Build Something Great
            </button>
          </form>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Seemanth Raju Kurapati. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
