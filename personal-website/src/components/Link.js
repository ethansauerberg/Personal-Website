import "./Link.css"
import PropTypes from 'prop-types'
import { Link as RouterLink} from 'react-router-dom'

const Link = ({to, linkSize, linkText}) => {
    return (
        <RouterLink
            to={to} 
            className={linkSize + " link"}>
            {linkText}
        </RouterLink>
    )
}
Link.propTypes = {
    to: PropTypes.string.isRequired, 
    linkSize: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}

export default Link
