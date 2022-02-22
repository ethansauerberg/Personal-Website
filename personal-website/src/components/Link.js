import React, { Component } from "react/cjs/react.production.min";
import "./Link.css"

class LinkComponent extends Component{
    render() {
        return <a className={`${this.props.linkSize} link`}>{this.props.linkText}</a>
    }
}

export default LinkComponent;