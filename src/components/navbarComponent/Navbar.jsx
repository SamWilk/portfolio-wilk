import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <a className="navbarName">Sam Wilk</a>
        <ul className="navbarList">
          <li>
            <a className="navButton">Skills</a>
          </li>
          <li>
            <a className="navButton">Projects</a>
          </li>
          <li>
            <a className="navButton">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
