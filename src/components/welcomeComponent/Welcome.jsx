import "./Welcome.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import resume from "./MyResume.pdf";

function Welcome() {
  return (
    <>
      <div className="welcomeContainer">
        <div className="introContainer">
          <h2 className="introTitle">
            Hi, I&apos;m <span className="nameText">Sam Wilk.</span>
          </h2>
          <ul className="linkList">
            <li>
              <a
                href="https://www.linkedin.com/in/sam-wilk-a66314210/"
                target="_blank"
              >
                <FaLinkedin size={50} />
              </a>
            </li>
            <li>
              <a href="mailto:samwilk18@outlook.com">
                <SiMicrosoftoutlook size={50} />
              </a>
            </li>
            <li>
              <a href="https://github.com/SamWilk" target="_blank">
                <FaGithubSquare size={50} />
              </a>
            </li>
            <li>
              <a href={resume} target="_blank" rel="noreferrer">
                <FaFilePdf size={45} />
              </a>
            </li>
          </ul>
          <p className="intoPara">
            Hi there, my name is Sam Wilk, and I'm a software engineer with a
            passion for developing innovative solutions. I've been working in
            the tech industry for over three years, specializing in backend
            development and cloud computing. My background includes a degree in
            Computer Science and hands-on experience with various technologies
            like Node.js, C#, and SQL. I thrive on tackling complex problems and
            creating efficient, scalable systems that drive business success.
            Currently, I’m focused on optimizing system performance and
            enhancing overall functionality. Outside of coding, I enjoy staying
            up-to-date with the latest industry trends. I'm excited to connect
            with like-minded professionals and explore new opportunities in this
            ever-evolving field.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
