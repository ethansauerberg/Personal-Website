import "./Header.css"
import Link from './Link.js'
import constants from "../constants"
import ScriptName from "./ScriptName.js"
import PropTypes from 'prop-types'


const Header = ({link1Text, link1To, link2Text, link2To}) => {
    return (
        <div className="headerFlexbox">
            <Link linkSize={constants.bigLink + " headerFlexboxItem"} linkText={link1Text} to={link1To}/>
            <ScriptName></ScriptName>
            <Link linkSize={constants.bigLink + " headerFlexboxItem"} linkText={link2Text} to={link2To}/>
        </div>
    )
}

Header.propTypes = {
    link1Text: PropTypes.string.isRequired,
    link1To: PropTypes.string.isRequired,
    link2Text: PropTypes.string.isRequired,
    link2To: PropTypes.string.isRequired,
}

export default Header