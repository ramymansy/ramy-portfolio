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
            I’m a developer who has a passion for building clean web
            applications with intuitive functionality. I enjoy the process of
            turning ideas into reality using creative solutions. I’m always
            curious about learning new skills, tools, and concepts. In addition
            to working on various solo front-end projects, I have worked with
            creative teams, which involves daily stand-ups and communications,
            source control, and project management.
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
              <SiJavascript className="logo" />
              JavaScript
            </li>
            <li>
              <SiReact className="logo" />
              React
            </li>
            <li>
              <SiNextdotjs className="logo" />
              Next
            </li>
            <li>
              <SiJquery className="logo" />
              jQuery
            </li>
            <li>
              <SiNodedotjs className="logo" />
              NodeJs
            </li>
            <li>
              <SiTypescript className="logo" />
              TypeScript
            </li>
            <li>
              <SiHtml5 className="logo" />
              HTML
            </li>
            <li>
              <SiCss3 className="logo" />
              CSS
            </li>
            <li>
              <SiSass className="logo" />
              SASS
            </li>
            <li>
              <SiBootstrap className="logo" />
              Bootstrap
            </li>
            <li>
              <SiTailwindcss className="logo" />
              Tailwind
            </li>
            <li>
              <SiMaterialui className="logo" />
              Material-UI
            </li>
            <li>
              <SiStyledcomponents className="logo styled" />
              Styled-Components
            </li>
            <li>
              <SiGit className="logo" />
              Git
            </li>
            <li>
              <SiGithub className="logo" />
              Github
            </li>
            <li>
              <SiFigma className="logo" />
              Figma
            </li>
            <li>
              <SiAdobexd className="logo" />
              Adobe XD
            </li>
            <li>
              <SiAdobephotoshop className="logo" />
              Photoshop
            </li>
            <li>
              <SiAdobeillustrator className="logo" />
              Illustrator
            </li>
            <li>
              <SiAdobeindesign className="logo" />
              Indesign
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
