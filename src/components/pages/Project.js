// import dependencies
import React from 'react';

// import images
import githubIcon from '../../assets/images/github-mark.svg';

// define component 'Project' and export it as default
export default function Project({ backgroundImage, title, githubLink, deployLink }) {
  // define styles for 'Project' component
  const styles = {
    projectContainer: {
      // keep the aspect ratio of the image
      width: "100%",
      height: 0,
      paddingBottom: "66.66%",
      // setup for absolute positioning of the child elements (title and githubIcon)
      position: "relative",
      // set the background image
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      // set the box shadow
      boxShadow: "15px 15px 10px rgba(0,0,0,0.5)",
      // set the border radius
      borderRadius: "5px",
    },
    projectTitle: {
      // position the title to lower left corner
      position: "absolute",
      bottom: "5px",
      left: 0,
      padding: "5px 10px 5px 10px",
      // set the background color and opacity
      backgroundColor: "rgba(000,000,000, 0.7)",
      fontSize: "1.5rem",
      color: "white",
    },
    githubIcon: {
      // position the github icon to upper right corner
      position: "absolute",
      top: 0,
      right: 0,
      // set the size
      width: "50px",
      height: "50px",
      // set the border radius to make it a circle
      borderRadius: "50%",
      backgroundColor: "rgba(225,225,225, 0.6)",
      margin: "10px",
      padding: "5px",
    },
    
  };
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="" style={styles.projectContainer}>
        <a href={githubLink} rel="noreferrer" target="_blank">
          <img src={githubIcon} alt="projectImage" style={styles.githubIcon}/>
        </a>
        <a href={deployLink} rel="noreferrer" target="_blank">
          <p style={styles.projectTitle}>
            {title}
          </p>
        </a>
      </div>
    </div>
  );
}
