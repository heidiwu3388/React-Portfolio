// import dependencies
import React from 'react';

 // import images & pdf
import resumeBackground from "../../assets/images/resumeBackground.jpg";
import resumePDF from "../../assets/pdf/Resume_HeidiWu.pdf";

// define styles for 'Resume' component
const styles = {
  container : {
      backgroundImage: `url(${resumeBackground})`,
  },
  innerContainer: {
    maxWidth: "1200px",
  },
  downloadButton: {
    height: "50px",
    width: "200px",
    backgroundColor:"rgb(18, 35, 153)",
    boxShadow: "5px 5px 2px rgba(0,0,0,0.5)",
    borderRadius: "25px",
    fontSize: "1rem",
    color: "white",

    
  }
};

export default function Resume() {
  return (
    <div className="contain-fluid p-5 pt-1 d-flex justify-content-center" style={styles.container}>
      <div className="contain-fluid" style={styles.innerContainer}>
        {/* title */}
        <div className="row" >
          <div className="col-12 d-flex justify-content-start">
            <h1 className='py-3 text-white'>
              Resume
            </h1>
          </div>
        </div>
        {/* download resume */}
        <div className="row">
          <div className="col-12">
            <a href={resumePDF} download="Resume_HeidiWu.pdf">
              <button className="mb-4" style={styles.downloadButton}>
                Download Resume
              </button>
            </a>
            <div className="col-12 text-white fs-4 mb-3 px-2">
              Proficient in:
            </div>
            <div className="rol text-white fs-4 d-flex justify-content-start flex-wrap" >
              <ul className="col-12 col-sm-6 col-md-3 px-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>APIs</li>
                <li>REST</li>
              </ul>
              <ul className="col-12 col-sm-6 col-md-3 px-5">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Inquirer</li>
                <li>Handlebars</li>
                <li>Bcrypt</li>
                <li>Dotenv</li>
                <li>Jest</li>
                <li>Express-Session</li>
              </ul>
              <ul className="col-12 col-sm-6 col-md-3 px-5">
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>IndexedDB</li>
              </ul>
              <ul className="col-12 col-sm-6 col-md-3 px-5">
                <li>MERN</li>
                <li>Model-View-Controller</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>VS Code</li>
                <li>Object-Oriented Programming</li>
                <li>Responsive Web Design</li>
              </ul>  
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
