// import dependencies
import React from "react";
// import images
import footerBackground from "../assets/images/footerBackground.jpg";
import githubIcon from "../assets/images/github-mark-white.svg";
import linkedinIcon from "../assets/images/linkedin.png";
import stackoverflowIcon from "../assets/images/stackoverflow.png";
// define styles for 'Footer' component
const styles = {
  footerStyle: {
    backgroundImage: `url(${footerBackground})`,
  },
  iconStyle: {
    width: "50px",
    height: "50px",
  },
};

// define component 'Footer' and export it as default
export default function Footer() {
  return (
    <div
      className="container-flluid py-3"
      style={styles.footerStyle}
    >
      <div className="row d-flex justify-content-center">
        <div className="col-8 col-sm-6 col-lg-4 d-flex justify-content-around">
          <a href="https://github.com/heidiwu3388" rel="noreferrer" target="_blank">
            <img src={githubIcon} alt="github" style={styles.iconStyle}/>
          </a>
          <a href="https://www.linkedin.com/in/heidi-wu-lau/" rel="noreferrer" target="_blank">
            <img src={linkedinIcon} alt="linkedin" style={styles.iconStyle}/>
          </a>
          <a href="https://stackoverflow.com/users/19934254/heidi-wu" rel="noreferrer" target="_blank">
            <img src={stackoverflowIcon} alt="stackoverflow" style={styles.iconStyle}/>
          </a>
        </div>
      </div>
    </div>
  );
}
