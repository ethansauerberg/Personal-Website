import React, { Component } from "react/cjs/react.production.min";
import Link from './Link.js'
import "./Footer.css"
import githubLogo from '../assets/githubLogo.png'


class Footer extends Component{
    render() {
        return (
        <div className="footer">
            <div className="footerMobile">
                <div className="footerIconFlexbox">
                    <img className="logoImg flexboxItem" src={githubLogo}/>
                    <img className="logoImg flexboxItem" src={githubLogo}/>
                    <img className="logoImg flexboxItem" src={githubLogo}/>
                </div>
                <div className="footerLinkFlexbox">
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Academic Transcript"/>
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Resume for Robots"/>
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Skills & Technologies"/>
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Coursework"/>
                </div>
            </div>
            <div className="footerNonMobile">
                <div className="footerAllFlexbox">
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Academic Transcript"/>
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Resume for Robots"/>
                    <img className="logoImg flexboxItem" src={githubLogo}/>
                    <img className="logoImg flexboxItem" src={githubLogo}/>
                    <img className="logoImg flexboxItem" src={githubLogo}/>
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Skills & Technologies"/>
                    <Link linkSize={`${this.props.linkSize} flexboxItem`} linkText="Coursework"/>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Footer;