import "./App.css";
import Welcome from "./components/welcomeComponent/Welcome";

function App() {
  return (
    <>
      <main>
        <div>
          <Welcome />

          {/* Should outline what technologies that are being used */}

          {/* Respective Components */}
          <div>Skills</div>
          <div>Projects</div>
          <div>About</div>
        </div>
      </main>
    </>
  );
}

export default App;
