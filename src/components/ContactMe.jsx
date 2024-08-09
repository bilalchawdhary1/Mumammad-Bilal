import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 700 }); // You can customize the duration and other options here
  }, []);
  return (
    <div className="contact-section" id="contact">
      <div className="contact-flex-box">
      <h1 className="hdr-1" data-aos="fade-up">
        <strong>CONTACT</strong> WITH <span>ME</span>
      </h1>
      <p data-aos="fade-up">
            So if you are looking for someone hardworking, authentic and <br />
            always up for a good challenge, look no further than yours truly!
            <br /> Lets connect and see how we can make a difference together:)
          </p>
          <div className="social-media-icons">
            <a href="https://wa.me/+923186191327" data-aos="fade-right">
              <div className="icon-text">
                <IoLogoWhatsapp    className="social-media-icon" />
                <h2>WhatsApp</h2>
              </div>
              <p className="para">+92 3186191327</p>
            </a>
            <a  href="mailto:chbilalc627@gmail.com" data-aos="fade-left">
              <div className="icon-text">
                <SiMinutemailer   className="social-media-icon" />
                <h2>Email</h2>
              </div>
              <p className="para">muhammadbilal@gmail.com</p>
            </a>
          </div>
      </div>
    </div>
  );
};

export default ContactMe;
