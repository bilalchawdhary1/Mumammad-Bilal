import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <div className="hero-section">
      <div className="hero-text" data-aos="fade-right">
        <h3>
          Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
        </h3>
        <h2>
          This is <strong className="s1">MUHAMMAD</strong> <strong className="s2">BILAL</strong>
        </h2>
        <div className="typewriter">
          <Typewriter
            words={[
              'MERN Stack Developer',
              'Software Developer',
              'Open Source Contributor',
              'Freelancer',
            ]}
            loop={false}
            cursor
            cursorStyle={<span style={{ color: '#15f3b3' }}>|</span>}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="icon hero-icon">
              <a href="https://www.facebook.com/profile.php?id=61561648869488">
                <FaFacebook className="f-icon" />
              </a>
              <a href="https://www.linkedin.com/in/m-bilal-chawdhary-b3539b315/">
                <FaLinkedin className="f-icon" />
              </a>
              <a href="https://github.com/bilalchawdhary1">
                {" "}
                <FaGithub className="f-icon" />
              </a>
              <a href="https://www.instagram.com/chbilalc627/">
                {" "}
                <SiLeetcode  className="f-icon" />
              </a>
              <a href="https://www.instagram.com/chbilalc627/">
                {" "}
                <RiInstagramFill className="f-icon" />
              </a>
            </div>
        <div className="hero-btn">
          <a href="https://wa.me/+923186191327">
            <button className="btn1">CONTACT ME <>☎</></button>
          </a>
          <button className="btn2">GET RESUME <span>📝</span></button>
        </div>
      </div>
      <div className="hero-img" data-aos="fade-up" data-aos-delay="400">
          <img src="/sections/home.png" alt="Profile" className="img" />
        </div>
     
    </div>
  );
};

export default HeroSection;
