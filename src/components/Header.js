// import dependencies
import React from 'react';
// import images
import headerBackground from '../assets/images/headerBackground.jpg';
// import user-defined React components
import Navigation from './Navigation';

// define styles for 'Header' component
const styles = {
  container: {
    backgroundImage: `url(${headerBackground})`
  },
  innerContainer: {
    maxWidth: '1200px'
  },
  nameStyle: {
    fontSize: '3rem'
  }
};

// ********* define component 'Header' and export it as default ********* 
export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container-fluid d-flex justify-content-center" style={styles.container}>
      <div className="container-fluid" style={styles.innerContainer}>
        <nav className="navbar navbar-expand-lg navbar-dark py-5">
          <div className="container-fluid">
            <a className="navbar-brand me-5" href="#Heidi" style={styles.nameStyle}>Heidi Wu</a>
            <button className="navbar-toggler" 
              type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}



