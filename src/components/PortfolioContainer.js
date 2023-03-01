// import dependencies
import React, { useState } from 'react';

// import user-defined React components
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// ********* define component 'PortfolioContainer' and export it as default ********* 
export default function PortfolioContainer() {
  // declare state variables, setter functions and initial values
  const [currentPage, setCurrentPage] = useState('About Me');
  
  // define function to render page based on 'currentPage' state
  function renderPage() {
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };
  // define function to handle page changes
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  
  // return JSX for 'PortfolioContainer'
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}
