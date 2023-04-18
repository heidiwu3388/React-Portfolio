// import dependencies
import React from 'react';

 // import images & pdf
import resumeBackground from "../assets/images/resumeBackground.jpg";
import resumePDF from "../assets/pdf/Resume_HeidiWu.pdf";

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
    fontSize: "1rem",
    color: "white",
    borderRadius: "5px",
  },
  proficiencyList: {
    backgroundColor:"rgb(18, 35, 153)",
    boxShadow: "15px 15px 10px rgba(0,0,0,0.5)",
    borderRadius: "5px",
  },
};

// ********* define component 'Resume' and export it as default *********
export default function Resume() {
  return (
    <div className="container-fluid p-5 pt-1 d-flex justify-content-center" style={styles.container}>
      <div className="container-fluid" style={styles.innerContainer}>
        {/* title */}
        <div className="row" >
          <div className="col-12 d-flex justify-content-center">
            <h1 className='m-3 text-white'>
              Resume
            </h1>
          </div>
        </div>
        {/* download button */}
        <div className="row">
          <div className="col-12 mb-3 d-flex justify-content-center">
            <a href={resumePDF} download="Resume_HeidiWu.pdf">
              <button style={styles.downloadButton}>
                Download Resume
              </button>
            </a>
          </div>
        </div>
        {/* proficiency list title*/}
        <div className="row text-white fs-4 px-5" >
          <div className="col-12 text-white fs-4 mb-3 px-2 d-flex justify-content-center">
            Proficiencies:
          </div>
        </div>
        {/* proficiency list*/}
        <div className="p-4" style={styles.proficiencyList} >
          <div className="row text-white d-flex justify-content-between" >
            {/* front-end */}
            <div className="col-12 col-sm-6 col-md-3 px-4">
              <div className="text-white-50 fs-3 mb-3">
                Front-End:
              </div>
              <ul className="text-white fs-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>APIs</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            {/* back-end */}
            <div className="col-12 col-sm-6 col-md-3 px-4">
              <div className="text-white-50 fs-3 mb-3">
                Back-End:
              </div>
              <ul className="text-white fs-5">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Inquirer</li>
                <li>Handlebars</li>
                <li>Bcrypt</li>
                <li>Dotenv</li>
                <li>Jest</li>
                <li>Express-Session</li>
              </ul>
            </div>
            {/* database */}
            <div className="col-12 col-sm-6 col-md-3 px-4">
              <div className="text-white-50 fs-3 mb-3">
                Database:
              </div>
              <ul className="text-white fs-5">
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>IndexedDB</li>
              </ul>
            </div>
            {/* other */}
            <div className="col-12 col-sm-6 col-md-3 px-4">
              <div className="text-white-50 fs-3 mb-3">
                Other:
              </div>
              <ul className="text-white fs-5">
                <li>MERN</li>
                <li>Model-View-Controller</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>VS Code</li>
                <li>Object-Oriented Programming</li>
                
              </ul>
            </div>  
          </div>
        </div>  
      </div>  
    </div>
  );
}
