import './App.css';
import Header from "./Components/Header"
import Intro from "./Components/Intro"
import Footer from "./Components/Footer"
import Education from "./Components/Education"
import Experience from "./Components/Experience"
import Project from "./Components/Project"
import Skill from "./Components/Skill"
import Nav from "./Components/Nav"


function App() {
  return (
    <div className="App">
      <Header/> 
      <Intro/>
      <Education/>
      <Experience/>
      <Project/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
