// import dependencies
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// import user-defined React components
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// ********* define component 'PortfolioContainer' and export it as default ********* 
export default function PortfolioContainer() {
  
  // return JSX for 'PortfolioContainer'
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route
            path='/'
            element={<AboutMe />}
          />
          <Route
            path='/React-Portfolio'
            element={<AboutMe />}
          />
          <Route
            path='/Portfolio'
            element={<Portfolio />}
          />
          <Route
            path='/Contact'
            element={<Contact />}
          />
          <Route
            path='/Resume'
            element={<Resume/>}
          />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}
