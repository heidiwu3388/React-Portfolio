// import dependencies
import React from 'react';

// import user-defined React components
import Project from './Project';

// import images
import portfolioBackground from '../../images/portfolioBackground.jpg';
import evChargeNGo from '../../images/Ev-Charge-N-Go.jpg';
import letsGoDIY from '../../images/Lets-Go-DIY.jpg';
import techBlog from '../../images/Tech-Blog.jpg';
import socialNetworkAPI from '../../images/Social-Network-API.jpg';
import weatherDashboard from '../../images/Weather-Dashboard.jpg';
import noteTaker from '../../images/Note-Taker.jpg';

// define styles for 'Portfolio' component
const styles = {
  container: {
    backgroundImage: `url(${portfolioBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  },
};

// define component 'Portfolio' and export it as default
export default function Portfolio() {
  return (
    <div className="container-fluid px-4 px-sm-5 py-3" style={styles.container}>
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
          backgroundImage={evChargeNGo}
          title="EV Change N Go"
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
        <Project
          backgroundImage={socialNetworkAPI}
          title="Social Network API"
          githubLink="https://github.com/heidiwu3388/Social-Network-API"
          deployLink="https://www.youtube.com/watch?v=RAhfnYqq0Yw"
        />
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
  );
}
