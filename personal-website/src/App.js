import './App.css';
import Link from './components/Link.js'
import ScriptName from './components/ScriptName.js'
import Headshot from './components/Headshot.js'
import AboutMe from './components/AboutMe.js';
import Footer from './components/Footer.js';


let bigLink = "big"
let smallLink = "small"

function App() {
  return (  
    <div>
      <div className='background'></div>
      <div className='main'>
        <ScriptName/>
        <Headshot/>
        <div className="bigLinkSpacer">
          <Link linkSize={bigLink} linkText="Projects" onclick={displaySection()}/>
          <Link linkSize={bigLink} linkText="Resume for Humans" onclick={displaySection()}/>
        </div>
        <AboutMe/>
      </div>
      <Footer linkSize={smallLink}></Footer>
    </div>
  );
}

function displaySection(){

}

export default App;
