import React, { useEffect, useState } from 'react';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValidated, setFormValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setFormValidated(true);
      return;
    }
    setFormSubmitted(true);
  };

  useEffect(() => {
    const links = document.querySelectorAll('[data-route]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        window.location.hash = route;
      });
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-4">Get in Touch</h1>
            <p className="lead text-muted">We're here to help with your business registration needs</p>
          </div>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Contact Information</h4>
                  <p className="mb-3"><strong>Visit Us</strong><br/>123 Business Avenue<br/>Ramanathapuram, Anna university </p>
                  <p className="mb-3"><strong>Email Us</strong><br/>info@entrepreneurhub.com<br/>support@entrepreneurhub.com</p>
                  <p className="mb-3"><strong>Call Us</strong><br/>Main Office: (123) 456-7890<br/>Support Hotline: (123) 456-7891<br/>Fax: (123) 456-7892</p>
                  <p><strong>Business Hours</strong><br/>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM<br/>Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Send Us a Message</h4>

                  {!formSubmitted ? (
                    <form noValidate onSubmit={handleSubmit} className={`needs-validation ${formValidated ? 'was-validated' : ''}`}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Your Name</label>
                          <input type="text" className="form-control" required />
                          <div className="invalid-feedback">Please enter your name</div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" required />
                          <div className="invalid-feedback">Please enter a valid email</div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" required />
                          <div className="invalid-feedback">Please enter your phone number</div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Subject</label>
                          <select className="form-select" required>
                            <option value="">Select subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="registration">Registration Help</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="invalid-feedback">Please select a subject</div>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea className="form-control" rows="5" required></textarea>
                          <div className="invalid-feedback">Please enter your message</div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="alert alert-success p-4 text-center">
                      <h3 className="mb-3">Thank You for Contacting Us!</h3>
                      <p className="lead mb-0">We have received your message and will get back to you within 24 hours.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="card mt-4">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Our Location</h4>
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1699007138413!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
