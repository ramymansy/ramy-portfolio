import "./about.css";
import Dev from "../../img/Untitled-2.png";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialui,
  SiStyledcomponents,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
} from "react-icons/si";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card">
          <img src={Dev} alt="dev" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="about">
          <h2 className="a-about-title">About me</h2>
          <p className="a-about-content">
            I’m a developer who has a passion for building clean web-apps with
            intuitive functionality, Enjoy the process of turning ideas into
            reality using creative solutions.
            <br />
            I’m always curious about learning new skills, tools, and concepts.
            <br />
            in addition to working on various solo front-end projects, I have
            worked with creative teams, which involves daily stand-ups and
            communications, source control, and project management.
          </p>
        </div>
        <div className="skills">
          <h2 className="a-skills-title">Skills</h2>
          <p className="a-skills-content">
            I develop a simple, intuitive, and responsive user interface that
            helps users get things done with less effort and time with those
            technologies.
          </p>
        </div>
        <div className="a-skills-list">
          <ul>
            <li>
              <SiJavascript className="skilllogo" />
              JavaScript
            </li>
            <li>
              <SiReact className="skilllogo" />
              React
            </li>
            <li>
              <SiNextdotjs className="skilllogo" />
              Next
            </li>
            <li>
              <SiJquery className="skilllogo" />
              jQuery
            </li>
            <li>
              <SiNodedotjs className="skilllogo" />
              NodeJs
            </li>
            <li>
              <SiTypescript className="skilllogo" />
              TypeScript
            </li>
            <li>
              <SiHtml5 className="skilllogo" />
              HTML
            </li>
            <li>
              <SiCss3 className="skilllogo" />
              CSS
            </li>
            <li>
              <SiSass className="skilllogo" />
              SASS
            </li>
            <li>
              <SiBootstrap className="skilllogo" />
              Bootstrap
            </li>
            <li>
              <SiTailwindcss className="skilllogo" />
              Tailwind
            </li>
            <li>
              <SiMaterialui className="skilllogo" />
              Material-UI
            </li>
            <li>
              <SiStyledcomponents className="skilllogo styled" />
              Styled-Components
            </li>
            <li>
              <SiGit className="skilllogo" />
              Git
            </li>
            <li>
              <SiGithub className="skilllogo" />
              Github
            </li>
            <li>
              <SiFigma className="skilllogo" />
              Figma
            </li>
            <li>
              <SiAdobexd className="skilllogo" />
              Adobe XD
            </li>
            <li>
              <SiAdobephotoshop className="skilllogo" />
              Photoshop
            </li>
            <li>
              <SiAdobeillustrator className="skilllogo" />
              Illustrator
            </li>
            <li>
              <SiAdobeindesign className="skilllogo" />
              Indesign
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
