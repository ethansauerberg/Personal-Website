import "./Footer.css"

import PropTypes from 'prop-types'
import Link from './Link.js'

import githubLogo from '../assets/githubLogo.png'
import linkedInLogo from '../assets/linkedInLogo.jpg'
import instagramLogo from '../assets/instagramLogo.jpg'
import constants from "../constants"

const Footer = ({changePage}) => {
    return (
        <div className="footer">
            <div className="footerMobile">
                <div className="footerIconFlexbox">
                    <img alt="Instagram Logo" className="logoImg flexboxItem" src={instagramLogo} onClick={()=>{window.open(constants.instagramLink, '_blank')}}/>
                    <img alt="GitHub Logo" className="logoImg flexboxItem" src={githubLogo} onClick={()=>{window.open(constants.githubLink, '_blank')}}/>
                    <img alt="LinkedIn Logo" className="logoImg flexboxItem" src={linkedInLogo} onClick={()=>{window.open(constants.linkedInLink, '_blank')}}/>
                </div>
                <div className="footerLinkFlexbox">
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Academic Transcript" onclick={()=>{changePage(constants.academicTranscript)}}/>
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Resume for Robots" onclick={()=>{changePage(constants.resumeForRobots)}}/>
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Skills & Technologies" onclick={()=>{changePage(constants.skillsAndTechnologies)}}/>
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Coursework" onclick={()=>{changePage(constants.coursework)}}/>
                </div>
            </div>
            <div className="footerNonMobile">
                <div className="footerAllFlexbox">
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Academic Transcript" onclick={()=>{changePage(constants.academicTranscript)}}/>
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Resume for Robots" onclick={()=>{changePage(constants.resumeForRobots)}}/>
                    <img alt="Instagram Logo" className="logoImg flexboxItem" src={instagramLogo} onClick={()=>{window.open(constants.instagramLink, '_blank')}}/>
                    <img alt="GitHub Logo" className="logoImg flexboxItem" src={githubLogo} onClick={()=>{window.open(constants.githubLink, '_blank')}}/>
                    <img alt="LinkedIn Logo" className="logoImg flexboxItem" src={linkedInLogo} onClick={()=>{window.open(constants.linkedInLink, '_blank')}}/>
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Skills & Technologies" onclick={()=>{changePage(constants.skillsAndTechnologies)}}/>
                    <Link linkSize={constants.smallLink + " flexboxItem"} linkText="Coursework" onclick={()=>{changePage(constants.coursework)}}/>
                </div>
            </div>
            
        </div>
    )
}
 
Footer.propTypes = {
    linkSize: PropTypes.string.isRequired,
    changePage: PropTypes.func.isRequired
}

export default Footer