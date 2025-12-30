import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiShare2, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        },
      );
  };

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

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group-row">
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="status-message success">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="status-message error">Failed to send message. Please try again.</p>
            )}
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
