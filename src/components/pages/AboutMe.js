// import dependencies
import React from 'react';

// import images
import aboutMeBackground from "../../assets/images/aboutMeBackground.jpg";
import aboutMePhoto from "../../assets/images/aboutMePhoto.jpg";


// define styles for 'AboutMe' component
const styles = {
  container: {
    backgroundImage: `url(${aboutMeBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  },
  innerContainer: {
    maxWidth: "1200px",
  },
  /* responsive for photo */
  photoContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "133.33%",
    boxShadow: "15px 15px 10px rgba(0,0,0,0.5)",
    borderRadius: "5px",
  },
  photo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  },
  bio: {
    fontSize: "1.3rem",
    color: "white",
    backgroundColor: "rgb(206, 144, 159)",
    boxShadow: "15px 15px 10px rgba(0,0,0,0.5)",
    borderRadius: "5px",
  }
};

// define component 'AboutMe' and export it as default
export default function AboutMe() {
  return (
    <div className="container-fluid px-2 px-sm-5 py-3 " style={styles.container}>
      <div className="container-fluid " style={styles.innerContainer}>
        {/* title */}
        <div className="row " >
          <div className="col-12 d-flex justify-content-center">
            <h1 className='py-3 text-white'>
              About Me
            </h1>
          </div>
        </div>
        <div className="row d-flex d-flex justify-content-center align-items-stretch ">
          {/* photo */}
          <div className="col-8 col-sm-6 col-md-5 col-lg-4 mb-4">
            <div className="" style={styles.photoContainer}>
              <img className="" src={aboutMePhoto} alt="aboutMePhoto" style={styles.photo}/>
            </div>
          </div>
          {/* bio */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 d-flex align-item-stretch mb-4" >
            <div className="d-flex align-items-center px-3 px-sm-4 py-3 py-sm-4" style={styles.bio}>
              <p className="fs-xxl-2">
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
    </div>
  );
}
