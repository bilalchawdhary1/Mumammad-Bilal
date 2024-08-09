import { FaArrowUp, FaFacebook, FaGithub } from "react-icons/fa";
import { RiInstagramFill,RiMessage3Fill   } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fooetr-section">
            <hr className="end-hr"/>
        <div className="footer-text">
          <h6>Designed and Developed by: <span>M</span>uhammad <strong>B</strong>ilal</h6>
          <h6 className="d-n"><strong>M</strong><span>B</span><strong>.</strong> © 2024 . All rights reserved.</h6>
          <div className="fooetr-icon">
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
                <RiInstagramFill className="f-icon" />
              </a>
              {isVisible && (
            <button onClick={top} className="arrow-btn">
              <FaArrowUp />
            </button>
          )}
            <button className="msg-btn">
              <RiMessage3Fill   />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Footer
