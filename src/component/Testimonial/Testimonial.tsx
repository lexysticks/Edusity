// Testimonial.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonial.css';

function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,        // animate only once
      offset: 120,       // offset (px) from the original trigger point
      easing: 'ease-out',
    });

    // If your content might be added/changed after mount, call refresh
    AOS.refresh();
  }, []);

  return (
    <section className="testimonials">
      <h3 className="section-subtitle" data-aos="fade-down">TESTIMONIALS</h3>
      <h2 className="section-title" data-aos="fade-down" data-aos-delay="100">
        What Students Say
      </h2>

      <div className="testimonial-wrapper">
        <button className="nav-btn prev" aria-label="previous" data-aos="fade-right">
          &#8592;
        </button>

        <div className="testimonial-container">
          <div className="testimonial active" data-aos="fade-up" data-aos-delay="150">
            <h4>Emily Williams</h4>
            <p className="location">Edufry, USA</p>
            <p className="quote">Choosing to pursue my degree at Edufry was one of the best decisions...</p>
          </div>

          <div className="testimonial" data-aos="fade-up" data-aos-delay="250">
            <h4>William Jackson</h4>
            <p className="location">Edufry, USA</p>
            <p className="quote">Edufry has opened so many doors for me. The staff are friendly...</p>
          </div>

          <div className="testimonial" data-aos="fade-up" data-aos-delay="350">
            <h4>Sophia Turner</h4>
            <p className="location">Edufry, USA</p>
            <p className="quote">The professors are incredibly supportive and the learning environment is amazing.</p>
          </div>
        </div>

        <button className="nav-btn next" aria-label="next" data-aos="fade-left">
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
