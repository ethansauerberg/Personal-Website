import "./AboutMe.css"
import ImageGallery from "./ImageGallery";

const AboutMe = () => {
    return (
        <>
            <h2>Who am I?</h2>
            <ul className="normal-text">
                <li>Computer science major at Washington University (expected graduation May 2022)</li>
                <li>Full stack developer, software engineer, and environmentalist;</li>
                <li>Lover of solving complex problems and learning new skills;</li>
                <li>Passionate equity and human rights supporter;</li>
                <li>Casual rock climber, runner, and basketball player;</li>
                <li>Unappologetic of-and-on Diet Coke addict;</li>
                <li>and Goofball, when appropriate</li>
            </ul>
            <br></br>
            <h2>Get to know me in 6 pictures</h2>
            <ImageGallery/>
            <br></br>
        </>
        )

}

export default AboutMe;