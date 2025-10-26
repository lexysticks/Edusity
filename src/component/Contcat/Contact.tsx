import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <section className="contactSection">
      {/* Contact Info */}
      <div className="contactInfo" data-aos="fade-right">
        <h3>Send us a message 📂</h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service.
        </p>

        <div className="contactItem">
          <i className="fa-solid fa-envelope"></i> Contact@GreatStack.dev
        </div>
        <div className="contactItem">
          <i className="fa-solid fa-phone"></i> +1 123-456-7890
        </div>
        <div className="contactItem">
          <i className="fa-solid fa-location-dot"></i> 77 Massachusetts Ave,
          Cambridge MA 02139, USA
        </div>
      </div>

      {/* Contact Form */}
      <div className="contactForm" data-aos="fade-left">
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter your mobile number" />

          <label htmlFor="message">Write your messages here</label>
          <textarea id="message" placeholder="Enter your message"></textarea>

          <button type="submit">Submit now →</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
