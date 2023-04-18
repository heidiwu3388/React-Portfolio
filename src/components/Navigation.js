// import dependencies
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const styles = {
  navLink: {
    fontSize: '1.5rem'
  }
}

// ********* define component 'Navigation' and export it as default ********* 
export default function Navigation() {
  // declare state variables, setter functions and initial values
  const [currentPage, setCurrentPage] = useState('About Me');
  // define function to handle page changes
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5">
      <li className="nav-item mx-2">
        <Link 
          to="/AboutMe"
          aria-current="page" 
          onClick={()=>handlePageChange("About Me")}
          className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
          >
          About Me
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link 
          to="/Portfolio"
          aria-current="page" 
          onClick={()=>handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
          >
          Portfolio
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link 
          to="/Contact"
          aria-current="page" 
          onClick={()=>handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
          >
          Contact
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Resume"
          aria-current="page" 
          onClick={()=>handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          style={styles.navLink}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}