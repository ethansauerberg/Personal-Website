import "./Tldr.css"
import constants from "../constants";
import Link from "./Link";

const Tldr = () => {
    return (
        <div>
            <h2>Why me?</h2>
            <ul className="normal-text">
                <li>1.5 years full stack and software engineering experience</li>
                <li>Many advanced projects ― check out my auto-api project <Link to={constants.projects} linkText="here"/></li>
                <li>Excellent technical writing and communication skills; very comfortable with agile workflow</li>
                <li>Compotent in many different <Link to={constants.skillsAndTechnologies} linkText="languages and technologies"/>, and an incredibly fast learner for new ones</li>
            </ul>
            <br/>
            <h2>From my last employer:</h2>
            <p className="small-text">"...He has been an invaluable asset for our team. 
            I have never seen someone adapt to a brand new, complex tech stack as quickly as he has and continues to do. He is also the single easiest developer
            to work with I have ever had. Ethan requires little to zero oversight to accomplish tasks that entire codebases depend upon...
            He is highly skilled at full-stack development and creative problem-solving."
            <br/>-Alexander Bothe (CTO at LeadLynx Inc)
            </p>
            <br/>
            <h2>Additional Reasons</h2>
            <ul className="normal-text">
                <li>Graduating from a top university with a <Link to={constants.academicTranscript} linkText="3.96 GPA"/></li>
                <li>Willing to work remote or in person, anywhere in the coutry</li>
                <li>A guaranteed positive contributor to workplace dynamics, find out who I am <Link to={constants.home} linkText="here"/></li>
                <li></li>
            </ul>

            
        </div>
        )

}

export default Tldr;