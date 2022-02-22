import React, { Component } from "react/cjs/react.production.min";
import headshot from '../assets/Professional Pic Square1.jpg'
import './Headshot.css';

class Headshot extends Component{
    render() {
        return <img className="headshot" src={headshot} alt="Ethan Sauerberg"/>
    }
}

export default Headshot;