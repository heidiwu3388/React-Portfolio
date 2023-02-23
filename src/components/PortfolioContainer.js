// import dependencies
import React, { useState } from 'react';

// import user-defined React components
import Header from './Header';

// define component 'PortfolioContainer' and export it as default
export default function PortfolioContainer() {
  // declare state variables, setter functions and initial values
  const [currentPage, setCurrentPage] = useState('About Me');
  
  // define function to handle page changes
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  
  // return JSX for 'PortfolioContainer'
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}
