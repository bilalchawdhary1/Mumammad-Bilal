import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HowIAm = () => {
  useEffect(() => {
    AOS.init({ duration: 700 }); // You can customize the duration and other options here
  }, []);
  return (
    <div className="howim-section" id="about">
      <div className="howim-flex-box">
        <div className="howim-text" data-aos="fade-right">
          <h1>
            <strong>Know</strong> Who <span>I‵M</span>
          </h1>
          <p>
            Hi Everyone, I am <span>Muhammad</span> <strong>Bilal</strong> from
            Punjab, <span>Pakistan</span>.I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests.
          </p>
        </div>
        <div className="howim-img" data-aos="fade-left">
          <img src="/logo/me 1.jpeg" alt="about img" />
        </div>
      </div>
    </div>
  );
};

export default HowIAm;
