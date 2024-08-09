import { BsPersonWorkspace } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experiences = () => {
  useEffect(() => {
    AOS.init({ duration: 700 }); // You can customize the duration and other options here
  }, []);
  return (
    <div className="experiences-section skill-section" id="experiences">
        <h1 className="hdr-1" data-aos="fade-up">
        Work  <span>Experiences </span>
      </h1>
      <div className="experiences-container">
        <div className="experiences-img" data-aos="fade-right">
          <img src="/sections/experience-2.png" alt="experience img" />
        </div>
        <div className="experiences-text" data-aos="fade-left">
          <div className="experiences-text-box">
            <span>(May 2024 - present)</span>
            <div className="experience">
              <BsPersonWorkspace className="experience-icon" />
              <div className="working">
                <h3>Software Engineer</h3>
                <span>Ads Analytica</span>
              </div>
            </div>
          </div>
          <div className="experiences-text-box">
            <span>(july 2024 - present)</span>
            <div className="experience">
              <BsPersonWorkspace className="experience-icon" />
              <div className="working">
                <h3>FullStack Developer</h3>
                <span>Fiverr (freelance)</span>
              </div>
            </div>
          </div>
          <div className="experiences-text-box">
            <span>(Doc 2020 - present)</span>
            <div className="experience">
              <BsPersonWorkspace className="experience-icon" />
              <div className="working">
                <h3>Self Employed</h3>
                <span>Code and build something in everyday.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
