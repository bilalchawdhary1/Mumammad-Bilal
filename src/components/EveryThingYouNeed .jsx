import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdReviews } from 'react-icons/md';
import { PiStrategyBold } from "react-icons/pi";
import { SiVorondesign  } from "react-icons/si";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaLaptopMedical } from "react-icons/fa";
import { BsBuildingFillGear } from "react-icons/bs";

const EveryThingYouNeed = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the duration and other options here
  }, []);

  return (
    <div className="need-section">
      <h1 data-aos="fade-up">
        Everything <span>you need </span>to create a{" "}
        <strong>beautiful Website</strong>
      </h1>
      <div className="need-flex-boxs">
        <div className="need-flex-box" data-aos="fade-up" data-aos-delay="200">
          <div className="need-item" data-aos="fade-right">
          <MdReviews className='need-icon'/>
            <div className="item-text">
              <h3>
                <span>Website</span> <strong>Review</strong>
              </h3>
              <small>
                I make sure your <span>Website </span> is performing its best by
                thoroughly <strong>Reviewing</strong> it before making any changes.
              </small>
            </div>
          </div>
          <div className="need-item" data-aos="fade-right" data-aos-delay="100">
            <PiStrategyBold   className='need-icon'/>
            <div className="item-text">
              <h3>
                <span>Business </span> <strong>Strategy</strong>
              </h3>
              <small>
                We discuss what you are trying to achieve, and place goals on
                your website planning how to achieve that.
              </small>
            </div>
          </div>
          <div className="need-item" data-aos="fade-right" data-aos-delay="200">
          <SiVorondesign      className='need-icon'/>
            <div className="item-text">
              <h3>
                User <span>Experience </span> <strong>Design</strong>
              </h3>
              <small>
                I design your website to be as easy to use as possible while
                guiding users towards the end goal.
              </small>
            </div>
          </div>
        </div>
        <div className="need-flex-box" data-aos="fade-up" data-aos-delay="400">
          <div className="need-item" data-aos="fade-left">
          <BsBuildingFillGear        className='need-icon'/>
            <div className="item-text">
              <h3>
                <span>Tailored </span> <strong>Development</strong>
              </h3>
              <small>
                I build with your goals in mind, whether you want a simple
                flexible website, a custom storefront or a SaaS product.
              </small>
            </div>
          </div>
          <div className="need-item" data-aos="fade-left" data-aos-delay="100">
          <FaFileCircleCheck       className='need-icon'/>
            <div className="item-text">
              <h3>
                <span>Rigorous </span> <strong>Testing</strong>
              </h3>
              <small>
                I ensure your website is of excellent quality by thoroughly
                testing using multiple approaches.
              </small>
            </div>
          </div>
          <div className="need-item" data-aos="fade-left" data-aos-delay="200">
          <FaLaptopMedical       className='need-icon'/>
            <div className="item-text">
              <h3>
                <span>Ongoing </span> <strong>Support</strong>
              </h3>
              <small>
                Your website is always growing. Whether you’re adding new
                features or making improvements I’m here to help.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryThingYouNeed;
