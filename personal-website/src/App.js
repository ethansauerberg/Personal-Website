import './App.css';
import Link from './components/Link.js'
import ScriptName from './components/ScriptName.js'
import Headshot from './components/Headshot.js'


let bigLink = "big"
let smallLink = "small"

function App() {
  return (
    <div>
      <div id="background"></div>
      <div id="main">
        <ScriptName/>
        <Headshot/>
        <Link linkSize={bigLink} linkText="Projects" onclick={displaySection()}/>
        <Link linkSize={bigLink} linkText="Resume for Humans" onclick={displaySection()}/>
      </div>
    </div>
  );
}

function displaySection(){

}

export default App;
