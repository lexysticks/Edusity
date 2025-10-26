import { useEffect } from 'react';
import './About.css';
import about_video from '../../assets/school video.mp4';

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.about_video, .about_pro');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about_main">
      <div className="about">
        <div className="about_video">
          <video src={about_video} autoPlay loop muted playsInline></video>
        </div>

        <div className="about_pro">
          <h3>ABOUT UNIVERSITY</h3>
          <h1>
            Nurturing Tomorrow's <br /> Leaders Today
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque
            et molestias porro minima obcaecati veritatis illo. Ipsum, illo.
            Optio eaque, nulla cupiditate provident expedita velit atque
            voluptatibus nobis quo?
          </p>
          <br />
          <p>
            Vel voluptate rerum explicabo at ad, consequatur nemo dignissimos
            eius recusandae sint reiciendis perspiciatis accusamus dolor error.
            Magnam, odio esse ullam officiis temporibus saepe facilis animi in
            voluptatem dicta corporis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
