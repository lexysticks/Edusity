import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (ms)
      once: true,     // only animate once
      offset: 100,    // how far before element enters viewport
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <header>
      <div className="hero">
        <h1 data-aos="fade-up" data-aos-delay="200">
          We Ensure Better Education For A Better World
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus
          accusantium nihil, nobis quasi quod vel eligendi asperiores laborum
          debitis consequatur quisquam, unde dolores aliquid voluptatum enim eos
          optio ex?
        </p>
        <button className="ctn" data-aos="zoom-in" data-aos-delay="600">
          Explore More
        </button>
      </div>
    </header>
  );
}

export default Header;
