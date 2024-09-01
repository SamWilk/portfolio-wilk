import "./App.css";
import About from "./components/aboutComponent/About";
import Navbar from "./components/navbarComponent/Navbar";
import Projects from "./components/projectComponent/Projects";
import Skills from "./components/skillsComponent/Skills";
import Welcome from "./components/welcomeComponent/Welcome";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div id="Home" className="mainContainer">
          <Welcome />

          {/* Should outline what technologies that are being used */}

          {/* Respective Components */}
          <span id="Skills">
            <Skills />
          </span>
          <span id="Projects">
            <Projects />
          </span>
          <span id="About">
            <About />
          </span>
        </div>
      </main>
    </>
  );
}

export default App;
