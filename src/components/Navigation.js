// import dependencies
import React from 'react';

const styles = {
  navLink: {
    fontSize: '1.5rem'
  }
}

// ********* define component 'Navigation' and export it as default ********* 
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5">
      <li className="nav-item mx-2">
        <a 
          href="#AboutMe"
          aria-current="page" 
          onClick={()=>handlePageChange("About Me")}
          className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
          >
          About Me
        </a>
      </li>
      <li className="nav-item mx-2">
        <a 
          href="#Portfolio"
          aria-current="page" 
          onClick={()=>handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
          >
          Portfolio
        </a>
      </li>
      <li className="nav-item mx-2">
        <a 
          href="#Contact"
          aria-current="page" 
          onClick={()=>handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
          >
          Contact
        </a>
      </li>
      <li className="nav-item mx-2">
        <a 
          href="#Resume"
          aria-current="page" 
          onClick={()=>handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}