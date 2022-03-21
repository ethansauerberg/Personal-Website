import React from 'react'
import "./ProjectGallery.css"

import automatedAPIs from '../assets/automatedAPIs.png'
import plants from '../assets/plants.jpg'
import family from '../assets/family2.jpg'
import iceskating from '../assets/iceskating2.jpg'
import washu from '../assets/washu.jpg'
import volleyball from "../assets/volleyball.JPG"





const ProjectGallery = () => {
  return (
    <div className='projectGalleryGridWrapper'> 
        <div className='projectGalleryGrid'>
            <div className="projectGalleryItemWrapper">
                <img className="projectGalleryImage" src={automatedAPIs} alt="Automated APIs GitHub Screenshot"/>
                <div>
                    <div className="projectGalleryTitle">Automated APIs</div>
                    <div className="projectGalleryDescription">A python automation project that generates free, unlimited REST API's with user-defined types</div>
                    <div className="projectGalleryTechStack">Python/Node.js/Express.js/MongoDB</div>
                    <a className="projectGalleryLink" href='https://github.com/ethansauerberg/Automated-APIs'>View on GitHub</a>
                </div>
            </div>
            <div className="projectGalleryItemWrapper">
                <img className="projectGalleryImage" src={automatedAPIs} alt="Personal Website Screenshot"/>
                <div>
                    <div className="projectGalleryTitle">Automated APIs</div>
                    <div className="projectGalleryDescription">A python automation project that generates free, unlimited REST API's with user-defined types</div>
                    <div className="projectGalleryTechStack">Python/Node.js/Express.js/MongoDB</div>
                    <a className="projectGalleryLink" href='https://github.com/ethansauerberg/Personal-Website'>View on GitHub</a>
                </div>
            </div>
            <div className="projectGalleryItemWrapper">
                <img className="projectGalleryImage" src={automatedAPIs} alt="My Family"/>
                <div>
                    <div className="projectGalleryTitle">Automated APIs</div>
                    <div className="projectGalleryDescription">A python automation project that generates free, unlimited REST API's with user-defined types</div>
                    <div className="projectGalleryTechStack">Python/Node.js/Express.js/MongoDB</div>
                    <a className="projectGalleryLink" href='https://github.com/ethansauerberg/Automated-APIs'>View on GitHub</a>
                </div>
            </div>
            <div className="projectGalleryItemWrapper">
                <img className="projectGalleryImage" src={automatedAPIs} alt="My Family"/>
                <div>
                    <div className="projectGalleryTitle">Automated APIs</div>
                    <div className="projectGalleryDescription">A python automation project that generates free, unlimited REST API's with user-defined types</div>
                    <div className="projectGalleryTechStack">Python/Node.js/Express.js/MongoDB</div>
                    <a className="projectGalleryLink" href='https://github.com/ethansauerberg/Automated-APIs'>View on GitHub</a>
                </div>
            </div>
            <div className="projectGalleryItemWrapper">
                <img className="projectGalleryImage" src={automatedAPIs} alt="My Family"/>
                <div>
                    <div className="projectGalleryTitle">Automated APIs</div>
                    <div className="projectGalleryDescription">A python automation project that generates free, unlimited REST API's with user-defined types</div>
                    <div className="projectGalleryTechStack">Python/Node.js/Express.js/MongoDB</div>
                    <a className="projectGalleryLink" href='https://github.com/ethansauerberg/Automated-APIs'>View on GitHub</a>
                </div>
            </div>
            <div className="projectGalleryItemWrapper">
                <img className="projectGalleryImage" src={automatedAPIs} alt="My Family"/>
                <div>
                    <div className="projectGalleryTitle">Automated APIs</div>
                    <div className="projectGalleryDescription">A python automation project that generates free, unlimited REST API's with user-defined types</div>
                    <div className="projectGalleryTechStack">Python/Node.js/Express.js/MongoDB</div>
                    <a className="projectGalleryLink" href='https://github.com/ethansauerberg/Automated-APIs'>View on GitHub</a>
                </div>
            </div>
        </div>
    </div>
  )
}

ProjectGallery.propTypes = {
}


export default ProjectGallery