// import dependencies
import React from 'react';

// define component 'NavBar' and export it as default
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <li className="nav-item">
      <a 
        href="#AboutMe"
        aria-current="page" 
        onClick={()=>handlePageChange("About Me")}
        className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
      >
        About Me
      </a>
    </li>
  );
}