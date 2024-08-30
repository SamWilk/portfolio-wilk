import "./Welcome.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaFileLines } from "react-icons/fa6";
import softImage from "../../assets/icons8-developer-64.png";
import discImage from "../../assets/icons8-software-96.png";
import devopsImage from "../../assets/icons8-devops-100.png";
import archImage from "../../assets/icons8-architect-100.png";

function Welcome() {
  return (
    <>
      <div className="welcomeContainer">
        <div className="introContainer">
          <h2 className="introTitle">
            Hello, I am <span className="nameText">Sam Wilk.</span>
          </h2>
          <ul className="linkList">
            <a href="" target="_blank">
              <FaFileLines size={45} alt="Resume" />
            </a>
            <a href="https://github.com/SamWilk" target="_blank">
              <FaGithubSquare size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/sam-wilk-a66314210/"
              target="_blank"
            >
              <FaLinkedin size={50} />
            </a>
            <a href="mailto:samwilk18@outlook.com">
              <SiMicrosoftoutlook size={50} />
            </a>
          </ul>
        </div>

        <div className="imageContainer">
          <img src={softImage} height={110} width={110} />
          <img src={discImage} height={120} width={120} />
          <img src={devopsImage} height={120} width={120} />
          <img src={archImage} height={120} width={120} />
        </div>
      </div>
    </>
  );
}

export default Welcome;
