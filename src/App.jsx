import "./App.css";
import Navbar from "./components/navbarComponent/Navbar";
import Welcome from "./components/welcomeComponent/Welcome";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Welcome />

        {/* Should outline what technologies that are being used */}

        {/* Respective Components */}
        <div>Skills</div>
        <div>Projects</div>
        <div>About</div>
      </main>
    </>
  );
}

export default App;
