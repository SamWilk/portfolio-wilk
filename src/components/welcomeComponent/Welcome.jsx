import "./Welcome.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
// import pdf from "./Sam_Francis_Wilk_Resume_2024.pdf";

function Welcome() {
  return (
    <>
      <div className="welcomeContainer">
        <div>
          <h2>Hi, I am Sam Wilk</h2>
          <ul className="linkList">
            {/* <a href={pdf} target="_blank">
              My Resume
            </a> */}
            <a href="https://github.com/SamWilk" target="_blank">
              <FaGithubSquare size={50} />
            </a>
            <a>
              <FaLinkedin size={50} />
            </a>
            <a>
              <BiLogoGmail size={50} />
            </a>
          </ul>
        </div>

        <div>Image goes here</div>
      </div>
    </>
  );
}

export default Welcome;
