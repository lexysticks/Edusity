import React, { useEffect, useRef, useState } from "react";
import "./program.css";
import graduatepic2 from "../../assets/graduate2.avif";
import graduatepic3 from "../../assets/graduate3.avif";
import graduatepic from "../../assets/graduate1.avif";

function Program() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // only trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="program_main" id="program" ref={sectionRef}>
      <div className="program">
        <div className="our">
          <h4>OUR PROGRAM</h4>
          <h1>What We Offer</h1>
        </div>

        <div className="program_card">
          <div
            className={`card card-1 ${isVisible ? "slide-in-left" : "hidden"}`}
          >
            <img className="img" src={graduatepic} alt="Graduate Program 1" />
          </div>

          <div
            className={`card card-2 ${isVisible ? "slide-in-up" : "hidden"}`}
          >
            <img className="img" src={graduatepic2} alt="Graduate Program 2" />
          </div>

          <div
            className={`card card-3 ${isVisible ? "slide-in-right" : "hidden"}`}
          >
            <img className="img" src={graduatepic3} alt="Graduate Program 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
