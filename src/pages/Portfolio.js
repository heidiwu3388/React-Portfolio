// import dependencies
import React from 'react';

// import user-defined React components
import Project from './Project';

// import images
import parentHelperHub from '../assets/images/Parent-Helper-Hub.png';
import portfolioBackground from '../assets/images/portfolioBackground.jpg';
import evChargeNGo from '../assets/images/Ev-Charge-N-Go.jpg';
import letsGoDIY from '../assets/images/Lets-Go-DIY.jpg';
import techBlog from '../assets/images/Tech-Blog.jpg';
// import socialNetworkAPI from '../../assets/images/Social-Network-API.jpg';
import weatherDashboard from '../assets/images/Weather-Dashboard.jpg';
import noteTaker from '../assets/images/Note-Taker.jpg';

// define styles for 'Portfolio' component
const styles = {
  container: {
    backgroundImage: `url(${portfolioBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  },
  innerContainer: {
    maxWidth: "1200px",
  },
};

// ********* define component 'Portfolio' and export it as default *********
export default function Portfolio() {
  return (
    <div className="container-fluid px-4 px-sm-5 py-3" style={styles.container}>
      <div className="container-fluid" style={styles.innerContainer}>
        {/* title */}
        <div className="row" >
          <div className="col-12 d-flex justify-content-center">
            <h1 className='py-3 text-white'>
              Portfolio
            </h1>
          </div>
        </div>
        {/* projects */}
        <div className="row d-flex px-lg-5 justify-content-center align-items-stretch">
          <Project
            backgroundImage={parentHelperHub}
            title="Parent Helper Hub"
            githubLink="https://github.com/heidiwu3388/heidi-parent-helper-hub"
            deployLink="https://heidi-parent-helper-hub.herokuapp.com/"
          />
          <Project
            backgroundImage={evChargeNGo}
            title="EV Charge N Go"
            githubLink="https://github.com/heidiwu3388/EV-Charge-N-Go"
            deployLink="https://ev-charge-n-go.herokuapp.com/"
          />
          <Project
            backgroundImage={letsGoDIY}
            title="Let's Go DIY"
            githubLink="https://github.com/heidiwu3388/Let-s-Go-DIY"
            deployLink="https://heidiwu3388.github.io/Let-s-Go-DIY/"
          />
          <Project
            backgroundImage={techBlog}
            title="Tech Blog"
            githubLink="https://github.com/heidiwu3388/Tech-Blog"
            deployLink="https://heidi-tech-blog.herokuapp.com/"
          />
          {/* <Project
            backgroundImage={socialNetworkAPI}
            title="Social Network API"
            githubLink="https://github.com/heidiwu3388/Social-Network-API"
            deployLink="https://www.youtube.com/watch?v=RAhfnYqq0Yw"
          /> */}
          <Project
            backgroundImage={weatherDashboard}
            title="Weather Dashboard"
            githubLink="https://github.com/heidiwu3388/Weather-Dashboard"
            deployLink="https://heidiwu3388.github.io/Weather-Dashboard/"
          />
          <Project
            backgroundImage={noteTaker}
            title="Note Taker"
            githubLink="https://github.com/heidiwu3388/Note-Taker"
            deployLink="https://heidi-note-taker.herokuapp.com/"
          />
        </div>
      </div>
    </div>
  );
}
