import './App.css';
import Link from './components/Link.js'
import ScriptName from './components/ScriptName.js'
import Headshot from './components/Headshot.js'
import AboutMe from './components/AboutMe.js';
import Footer from './components/Footer.js';
import React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types'
import constants from './constants';

const Home = ({changePage}) => {
  return (
    <div>
    <div className='background'></div>
    <div className='main'>
      <ScriptName/>
      <Headshot/>
      <div className="bigLinkSpacer">
        <Link linkSize={constants.bigLink} linkText="Projects" onclick={()=>changePage(constants.projects)}/>
        <Link linkSize={constants.bigLink} linkText="Resume for Humans" onclick={()=>changePage(constants.resumeForHumans)}/>
      </div>  
      <AboutMe/>
    </div>
    <Footer linkSize={constants.smallLink} changePage={changePage}></Footer>
    </div>
  )
}
Home.propTypes = {
  changePage: PropTypes.func.isRequired,
}

const Projects = ({changePage}) => {
  return (
    <div>
      <div className='background'></div>
      <div className='main'>
        <ScriptName/>
        <Headshot/>
        <div className="bigLinkSpacer">
          <Link linkSize={constants.bigLink} linkText="Home" onclick={()=>changePage(constants.home)}/>
          <Link linkSize={constants.bigLink} linkText="Resume for Humans" onclick={()=>changePage(constants.resumeForHumans)}/>
        </div>   
      </div>
      <Footer linkSize={constants.smallLink} changePage={changePage}></Footer>
    </div>
  )
}
Projects.propTypes = {
  changePage: PropTypes.func.isRequired,
}

const ResumeForHumans = ({changePage}) => {
  return (
    <div>
      <div className='background'></div>
      <div className='main'>
        <ScriptName/>
        <Headshot/>
        <div className="bigLinkSpacer">
          <Link linkSize={constants.bigLink} linkText="Home" onclick={()=>changePage(constants.home)}/>
          <Link linkSize={constants.bigLink} linkText="Projects" onclick={()=>changePage(constants.projects)}/>
        </div>  
      </div>
      <Footer linkSize={constants.bigLink} changePage={changePage}></Footer>
    </div>
  )
}
ResumeForHumans.propTypes = {
  changePage: PropTypes.func.isRequired,
}

function App() {
  let [currentPage, setCurrentPage] = useState(constants.home)

  const changePage = (newPage) => {
    setCurrentPage(newPage)
  }
  console.log(currentPage)
  if(currentPage === constants.home){
    return (
      <Home changePage={changePage}/>
    )
  }
  else if(currentPage === constants.projects){
    return(
      <Projects changePage={changePage}/>
    )
  }
  else if(currentPage === constants.resumeForHumans){
    return(
      <ResumeForHumans changePage={changePage}/>
    )
  }
  else {
    console.log(currentPage + " not implemented yet")
    return(
      <Home changePage={changePage}/>
    )
  }
 
}

export default App;
