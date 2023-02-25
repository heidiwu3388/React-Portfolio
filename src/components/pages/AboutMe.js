// import dependencies
import React from 'react';

// import images
import aboutMeBackground from "../../images/aboutMeBackground.jpg";
import aboutMePhoto from "../../images/aboutMePhoto.jpg";


// define styles for 'AboutMe' component
const styles = {
  container: {
    backgroundImage: `url(${aboutMeBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  },
  /* responsive for photo */
  photoContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "133.33%"
  },
  photo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  bio: {
    fontSize: "1.2rem",
    backgroundColor: "rgba(255,255,255, 0.4)",
    borderRadius: "10px",
  }
};

// define component 'AboutMe' and export it as default
export default function AboutMe() {
  return (
    <div className="container-fluid p-5" style={styles.container}>
      <div className="row" >
        {/* title */}
        <div className="col-12">
          <h1 className='py-3'>
            About Me
          </h1>
        </div>
      </div>
      <div className="row d-flex align-items-strech">
        {/* photo */}
        <div className="col-sm-5 col-lg-3 col-xl-2">
          <div className="mb-4" style={styles.photoContainer}>
            <img className="rounded" src={aboutMePhoto} alt="aboutMePhoto" style={styles.photo}/>
          </div>
        </div>
        {/* bio */}
        <div className="col-sm-12 col-lg-5 col-xl-5 d-flex align-items-strech" >
          <div className="d-flex align-items-center px-4 mb-4" style={styles.bio}>
            <p>
              {`Hi, my name is Heidi Wu. 
              I am a full-stack web developer with a background in computer science 
              and a passion for creating beautiful and functional web applications. 
              I am currently enrolled in the University of California San Diego's Full-Stack Web Development Bootcamp.
              I am proficient in HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, MySQL, MongoDB, React.js, and more.
              I am looking for a full-time position as a web developer.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
