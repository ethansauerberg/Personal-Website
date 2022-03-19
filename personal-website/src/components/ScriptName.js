import React, { Component } from "react/cjs/react.production.min";
import name from '../assets/Name Transparent.png'
import './ScriptName.css';

class LinkComponent extends Component{
    render() {
        return <>
            <img className="scriptName" src={name} alt="Ethan Sauerberg"/>
        </>
    }
}

export default LinkComponent;