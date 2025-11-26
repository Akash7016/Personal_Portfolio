import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Send email using EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'akashmahendra558@gmail.com', // Your email address
        },
        publicKey
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Check if it's an authentication error
      if (error.text && error.text.includes('authentication')) {
        console.error('Gmail authentication issue. Please check EmailJS Gmail service setup.');
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="contact__title">Let's Work Together</h2>
            <p className="contact__description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to discuss a project, or just 
              want to say hello, I'd love to hear from you!
            </p>
            
            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>akashmahendra558@gmail.com</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (343) 234-4567</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Ottawa, Canada</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <h3>Follow Me</h3>
              <div className="social__links">
                <a target='_blank' href="https://github.com/Akash7016/" className="social__link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a target='_blank' href="www.linkedin.com/in/akash-yadav-591499231" className="social__link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a target='_blank' href="https://dribbble.com/Akash1110" className="social__link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.001-.018-.042-.106-.137-.301-.235-.477-.487-.955-.75-1.426C15.98 9.238 18.605 7.681 18.605 6.61zm-6.394 1.846c-.265.444-.526.908-.776 1.371C7.777 8.914 4.975 8.843 4.653 8.835a8.502 8.502 0 011.958-5.179 36.848 36.848 0 019 0v.001zm-9.836 10.2V14.1c.326.003 2.48.03 6.148-.794.263.505.513 1.017.75 1.537-3.173 1.325-5.618 4.924-6.898 7.157zm6.81-1.2c-.26-.57-.537-1.137-.827-1.698 3.314-.841 6.221-.841 7.25-.841.547 0 1.063.043 1.482.118-.5 2.52-1.834 4.82-3.544 6.476-1.087-2.412-2.588-4.973-4.361-4.055zm5.291 3.799c1.228-1.332 2.046-3.083 2.317-5.021.222.034.416.072.588.117-.477 2.048-1.696 3.82-3.405 4.904z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="form__title">Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="form__message form__message--success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form__message form__message--error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <div className="form__group">
              <label htmlFor="name" className="form__label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form__input"
                placeholder="Your full name"
              />
            </div>

            <div className="form__group">
              <label htmlFor="email" className="form__label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form__input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form__group">
              <label htmlFor="subject" className="form__label">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form__input"
                placeholder="What's this about?"
              />
            </div>

            <div className="form__group">
              <label htmlFor="message" className="form__label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form__textarea"
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`form__submit ${isSubmitting ? 'form__submit--loading' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;