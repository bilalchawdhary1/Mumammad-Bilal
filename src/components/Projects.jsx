// import React from 'react'

const Projects = () => {
  return (
    <div>
        <h1 className="hdr-1" data-aos="fade-up">
        <strong>PROJECTS</strong> HERE <span>ME</span>
      </h1>
      <div className="projects-flex-box" data-aos="fade-up" >
        <div className="project-item" data-aos="fade-right">
          <img src="/project1.jpg" alt="project img" />
        </div>
        <div className="project-item" data-aos="fade-left">
          <img src="/project2.jpg" alt="project img" />
        </div>
        <div className="project-item" data-aos="fade-right">
          <img src="/project3.jpg" alt="project img" />
        </div>
        <div className="project-item" data-aos="fade-left">
          <img src="/project4.jpg" alt="project img" />
        </div>
        <div className="project-item" data-aos="fade-right">
          <img src="/project5.jpg" alt="project img" />
        </div>
      </div>
    </div>
  )
}

export default Projects
