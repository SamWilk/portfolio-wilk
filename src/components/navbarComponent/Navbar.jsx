import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <ul id="navList" className="navbarList">
          <li>
            <input
              type="button"
              className="navButton"
              value="Home"
              onClick={() => {
                document.getElementById("Home").scrollIntoView();
              }}
            />
          </li>
          <li>
            <input
              type="button"
              className="navButton"
              value="Skills"
              onClick={() => {
                document.getElementById("Skills").scrollIntoView();
              }}
            />
          </li>
          <li>
            <input
              type="button"
              className="navButton"
              value="Projects"
              onClick={() => {
                document.getElementById("Projects").scrollIntoView();
              }}
            />
          </li>
          {/* <li>
            <input
              type="button"
              className="navButton"
              value="About"
              onClick={() => {
                document.getElementById("About").scrollIntoView();
              }}
            />
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
