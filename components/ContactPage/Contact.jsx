import React from 'react';
import './Contact.css'; // Ensure the CSS file path is correct

const Contact = () => {
  return (
    <div className="container">
      <h2>Get In Touch</h2>
      <form>
        <div className="form-group">
          <input type="text" id="name" required placeholder=" " />
          <label htmlFor="name">Your Name</label>
        </div>
        <div className="form-group">
          <input type="email" id="email" required placeholder=" " />
          <label htmlFor="email">Your Email</label>
        </div>
        <div className="form-group">
          <textarea id="message" rows="5" required placeholder=" "></textarea>
          <label htmlFor="message">Your Message</label>
        </div>
        <button type="submit" id="submitBtn">Send Message</button>
      </form>

      <div className="info-section">
        <p>SHARDA UNIVERSITY, APJ Abdul Kalam Road, Knowledge Park III, Greater Noida, Uttar Pradesh, India</p>
        <p><a href="tel:+919366242126">+91-9366242126</a></p>
        <p><a href="mailto:ayushsharmaarps@gmail.com">ayushsharmaarps@gmail.com</a></p>
        <p>Mon-Fri : 08:00-19:00</p>
      </div>

      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.86031800926!2d77.15062744967324!3d28.635308901894986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59a8c6c3e2f%3A0x9f71d2f575e5a8d8!2sSHARDA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1628609407761!5m2!1sen!2sin" 
          allowFullScreen=""
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
