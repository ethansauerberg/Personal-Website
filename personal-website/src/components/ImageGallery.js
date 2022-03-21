import React from 'react'
import "./ImageGallery.css"
import reverb from '../assets/reverb2.jpg'
import plants from '../assets/plants.jpg'
// import running from '../assets/running.jpg'
import family from '../assets/family2.jpg'
import iceskating from '../assets/iceskating2.jpg'
import washu from '../assets/washu.jpg'
import volleyball from "../assets/volleyball.JPG"





const ImageGallery = () => {
  return (
    <div className='imageGalleryGridWrapper'> 
        <div className='imageGalleryGrid'>
            <div>
                <img className="imageGalleryImage" src={family} alt="My Family"/>
                <div className="imageGalleryCaption">My Family <br></br>... featuring some funky shirts my grandma bought us for Christmas</div>
            </div>
            <div>
                <img className="imageGalleryImage" src={iceskating} alt="My friends"/>
                <div className="imageGalleryCaption">My Friends <br></br>... also one of the first times I ever ice skated without falling on my butt</div>
            </div>
            <div>
                <img className="imageGalleryImage" src={plants} alt="My army of plants"/>
                <div className="imageGalleryCaption">My Plants<br></br>... which are obviously the third priority after family and friends</div>
            </div>
            <div>
                <img className="imageGalleryImage" src={reverb} alt="My A Cappella Group"/>
                <div className="imageGalleryCaption">My A Cappella Group<br></br>... I sing! (poorly) :)</div>
            </div>
            <div>
                <img className="imageGalleryImage" src={washu} alt="My A Cappella Group"/>
                <div className="imageGalleryCaption">Me alone? <br></br>... in a self-timer picture I use on things where I'm trying to look cool</div>
            </div>
            <div>
                <img className="imageGalleryImage" src={volleyball} alt="A picture of my volleyball team"/>
                <div className="imageGalleryCaption">My Friends (again)<br></br> ... after losing a volleyball match but having lots of fun!</div>
            </div>
        </div>
    </div>
  )
}

ImageGallery.propTypes = {
}


export default ImageGallery