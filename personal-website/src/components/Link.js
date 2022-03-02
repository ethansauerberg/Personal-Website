import "./Link.css"
import PropTypes from 'prop-types'

const Link = ({onclick, linkSize, linkText}) => {
    return (
        <span onClick={onclick} className={linkSize + " link"}>
            {linkText}
        </span>
    )
}
Link.propTypes = {
    onclick: PropTypes.func.isRequired, 
    linkSize: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}

export default Link
