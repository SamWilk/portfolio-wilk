import "./App.css";
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
          <Skills />
          <Projects />
          <div>About</div>
        </div>
      </main>
    </>
  );
}

export default App;
