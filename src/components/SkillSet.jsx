import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "html", imgSrc: "/skills/html.svg" },
  { name: "css", imgSrc: "/skills/css.svg" },
  { name: "javascript", imgSrc: "/skills/javascript.svg" },
  { name: "react", imgSrc: "/skills/react.svg" },
  { name: "Node.js", imgSrc: "/skills/node.png" },
  { name: "git", imgSrc: "/skills/git.svg" },
  { name: "tailwind", imgSrc: "/skills/bootstrap.svg" },
  { name: "express.js", imgSrc: "/skills/express.png" },
  { name: "Mongoodb", imgSrc: "/skills/mongoDB.svg" },
  { name: "Canva", imgSrc: "/skills/canva.svg" },
  { name: "Docker", imgSrc: "/skills/docker.svg" },
  { name: "AWS", imgSrc: "/skills/aws.svg" },
  { name: "Blender", imgSrc: "/skills/blender.svg" },
  { name: "Mysql", imgSrc: "/skills/mysql.svg" },
  { name: "Photoshop", imgSrc: "/skills/photoshop.svg" },
];

const SkillSet = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div className="skill-section" id="skills">
      <h1 className="hdr-1" data-aos="fade-up">
        Professional <span>Skillset </span>
      </h1>

      <div className="skill-flex-box" data-aos="fade-up">
        <div className="sliding-text-container">
          <div className="sliding-text">
            {skills.map((skill, index) => (
              <div className={`sliding-box ${skill.name}`} key={index}>
                <img src={skill.imgSrc} alt={skill.name} />
                <small className="sliding-sml">{skill.name}</small>
                <span className="border"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
