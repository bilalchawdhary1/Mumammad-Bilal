import { BsPersonWorkspace } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Educations = () => {
    useEffect(() => {
        AOS.init({ duration: 700 }); // You can customize the duration and other options here
      }, []);
      return (
        <div className="experiences-section skill-section" id="education">
            <h1 className="hdr-1" data-aos="fade-up">
               <span>Educations </span>
          </h1>
          <div className="experiences-container">
            <div className="experiences-img" data-aos="fade-right">
              <img src="/sections/educations.gif" alt="experience img" />
            </div>
            <div className="experiences-text" data-aos="fade-left">
              <div className="experiences-text-box">
                <span>(2024 - present)</span>
                <div className="experience">
                  <BsPersonWorkspace className="experience-icon" />
                  <div className="working">
                    <h3>Bachelor of Computer Science</h3>
                    <span>Virtual university</span>
                  </div>
                </div>
              </div>
              <div className="experiences-text-box">
                <span>(2018 - 2020)</span>
                <div className="experience">
                  <BsPersonWorkspace className="experience-icon" />
                  <div className="working">
                    <h3>Intermediate in Computer Science</h3>
                    <span>Govt. Graduate College</span>
                  </div>
                </div>
              </div>
              <div className="experiences-text-box">
                <span>(2014 - 2018)</span>
                <div className="experience">
                  <BsPersonWorkspace className="experience-icon" />
                  <div className="working">
                    <h3>Matric With Computer Science</h3>
                    <span>Government School</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Educations
