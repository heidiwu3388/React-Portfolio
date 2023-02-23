// import dependencies
import React from 'react';

// import user-defined React components
import NavBar from './NavBar';

// define component 'Header' and export it as default
export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Heidi">Heidi Wu</a>
        <button className="navbar-toggler" 
          type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
          </ul>
        </div>
      </div>
    </nav>
  )
}



