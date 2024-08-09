import   {useEffect}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySelf = () => {
  useEffect(() => {
    AOS.init({ duration: 700 }); // You can customize the duration and other options here
  }, []);
  const style = {
    willChange: 'transform',
    transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  };

  return (
    <div className="myself-section">
      <div className="myself-container" data-aos="fade-up" data-aos-delay="200">
        <p>
        <h1 data-aos="fade-up">
        WHO I AM?
      </h1>
          Hi, My name is <span>MUHAMMAD <strong>BIALL</strong></span>. Im a
          <strong> Software <span>Engineer</span></strong> with a passion for web development.
          I have developed many web-based projects from
          simple landing pages to MERN applications. I <strong>love </strong>
          learning new and better ways to create seamless user experiences with
          clean, <span>efficient</span>, and scalable code.
           My core skill is
          based on JavaScript and I love to do most of the things using
          JavaScript. I am available for any kind of job opportunity that suits
          my skills and interests. Lets collaborate to turn your vision into
          <strong> reality...😊</strong>
        </p>
        <div className="myself-img" data-aos="fade-left">
        <div className="image-move" style={style}>
          <img className="my-img" src="/me 1.jpeg" alt="Description" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MySelf;
