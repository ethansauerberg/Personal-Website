import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Link from './components/Link.js'
import ScriptName from './components/ScriptName.js'
import Headshot from './components/Headshot.js'
import AboutMe from './components/AboutMe.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Tldr from './components/Tldr';
import ProjectGallery from './components/ProjectGallery';
import React from 'react';
// import { useState } from 'react'
// import PropTypes from 'prop-types'
import constants from './constants';

const Home = () => {
  return (
    <div>
      <Header link1Text="Projects" link1To={constants.projects} link2Text="Resume For Humans" link2To={constants.resumeForHumans} />
      <Headshot/>
      <AboutMe/>
    </div>
  )
}

const Projects = () => {
  return (
    <>
      <Header link1Text="Home" link1To={constants.home} link2Text="Resume For Humans" link2To={constants.resumeForHumans} />
      <ProjectGallery/>
    </>
  )
}

const ResumeForHumans = () => {
  return (
    <>
      <Header link1Text="Home" link1To={constants.home} link2Text="Projects" link2To={constants.projects} />
      <Tldr/>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className='background'></div>
      <div className='main'>
        {/* <ScriptName/> */}
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