import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="welcomeContainer">
        <div className="introContainer">
          <h2 className="introTitle">
            Hi, I'm <span className="nameText">Sam Wilk.</span>
          </h2>
          <p className="intoPara">
            I am a Software Engineer located in Jacksonville, FL. Lorem ipsum
            odor amet, consectetuer adipiscing elit. Primis interdum nisl
            lobortis venenatis vivamus facilisi ante. Risus habitasse metus amet
            natoque at purus senectus ipsum. Dignissim egestas dolor massa;
            dictumst vivamus ullamcorper? Habitasse at interdum id dolor potenti
            lectus elementum pharetra. Ullamcorper nam venenatis ipsum ex erat
            facilisis? Purus suspendisse vulputate magnis gravida ultricies
            ipsum integer at.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
