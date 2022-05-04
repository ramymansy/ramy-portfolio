import "./home.css";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialui,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import Robot from "../../img/robot.png";

const Home = () => {
  return (
    <div className="h" id="home">
      <div className="cube">
        <SiJavascript />
      </div>
      <div className="cube">
        <SiReact />
      </div>
      <div className="cube">
        <SiNextdotjs />
      </div>
      <div className="cube">
        <SiHtml5 />
      </div>
      <div className="cube">
        <SiCss3 />
      </div>
      <div className="cube">
        <SiBootstrap />
      </div>
      <div className="cube">
        <SiSass />
      </div>
      <div className="cube">
        <SiTailwindcss />
      </div>
      <div className="cube">
        <SiMaterialui />
      </div>
      <div className="cube">
        <SiGithub />
      </div>
      <div className="cube">
        <SiFigma />
      </div>
      <div className="cube">
        <SiAdobexd />
      </div>
      <div className="cube">
        <SiAdobephotoshop />
      </div>
      <div className="cube">
        <SiAdobeillustrator />
      </div>
      <div className="tube1"></div>
      <div className="tube2"></div>
      <div className="tube3"></div>
      <div className="tube4"></div>
      <div className="h-wraper">
        <h2 className="h-intro">Welcome To My Portfolio</h2>
        <h1 className="h-name">
          <span style={{ fontSize: "28px", fontWeight: "200" }}>I'm</span> Ramy
        </h1>
        <div className="h-title">
          <div className="h-title-wrapper">
            <div className="h-title-item">Fron-End Dev</div>
            <div className="h-title-item">JavaScript Dev</div>
            <div className="h-title-item">React.js Dev</div>
            <div className="h-title-item">Next.js Dev</div>
            <div className="h-title-item">UI Dev</div>
          </div>
        </div>
        <div className="h-desc">
          <p>
            With me you will know
            <br />
            the meaning of professionalism
          </p>
        </div>
      </div>
      <div className="robotDiv">
        <img src={Robot} alt="robot" />
      </div>
    </div>
  );
};

export default Home;
