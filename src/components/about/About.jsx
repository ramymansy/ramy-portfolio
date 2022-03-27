import "./about.css";
import Dev from "../../img/Untitled-1.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card">
          <img src={Dev} alt="dev" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I have highly skilled development web, apps experience, all this made
          me able to develop a web, app from start to end.
        </p>
        <p
          className="a-desc"
          style={{
            color: "#4b6fff",
            textTransform: "capitalize",
            fontSize: "24px",
          }}
        >
          Skills
        </p>
        <p className="a-desc">JavaScript - React - Next</p>
        <p className="a-desc">jQuery - NodeJs - EcmaScript</p>
        <p className="a-desc">HTML - CSS - scss - Saas</p>
        <p className="a-desc">Bootstrap - Tailwind</p>
        <p className="a-desc">Material UI - Styled Components</p>
        <p className="a-desc">Git - Github</p>
        <p className="a-desc">Figma - Adobe XD</p>
        <p className="a-desc">Photoshop - Illustrator - Indesign</p>
      </div>
    </div>
  );
};

export default About;
