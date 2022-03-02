import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Link from './components/Link.js'
import ScriptName from './components/ScriptName.js'
import Headshot from './components/Headshot.js'
import AboutMe from './components/AboutMe.js';
import Footer from './components/Footer.js';
import React from 'react';
// import { useState } from 'react'
// import PropTypes from 'prop-types'
import constants from './constants';

const Home = () => {
  return (
    <div>
      <div className="bigLinkSpacer">
        <Link 
          linkSize={constants.bigLink} 
          linkText="Projects" 
          to={constants.projects}/>
        <Link 
          linkSize={constants.bigLink} 
          linkText="Resume for Humans" 
          to={constants.resumeForHumans}/>
      </div>  
      <AboutMe/>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <div className="bigLinkSpacer">
        <Link 
          linkSize={constants.bigLink} 
          linkText="Home" 
          to={constants.home}/>
        <Link 
          linkSize={constants.bigLink} 
          linkText="Resume for Humans" 
          to={constants.resumeForHumans}/>
      </div>   
    </div>
  )
}

const ResumeForHumans = () => {
  return (
    <div>
      <div className="bigLinkSpacer">
        <Link 
          linkSize={constants.bigLink} 
          linkText="Home" 
          to={constants.home}
        />
        <Link 
          linkSize={constants.bigLink} 
          linkText="Projects" 
          to={constants.projects}
        />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className='background'></div>
      <div className='main'>
        <ScriptName/>
        <Headshot/>
        <Routes>
          <Route path="/" exact element={Home()}></Route>
          <Route path={constants.projects} exact element={Projects()}></Route>
          <Route path={constants.resumeForHumans} exact element={ResumeForHumans()}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;