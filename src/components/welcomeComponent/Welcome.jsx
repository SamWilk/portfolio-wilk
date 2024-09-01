import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="welcomeContainer">
        <div className="introContainer">
          <h2 className="introTitle">
            Hi, I&apos;m <span className="nameText">Sam Wilk.</span>
          </h2>
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
