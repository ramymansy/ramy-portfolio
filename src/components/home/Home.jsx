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

const Home = () => {
  return (
    <div className="h" id="home">
      <div className="cube">
        <SiReact />
      </div>
      <div className="cube">
        <SiNextdotjs />
      </div>
      <div className="cube">
        <SiJavascript />
      </div>
      <div className="cube">
        <SiMaterialui />
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
      <div className="avilable-container">
        <div className="avilable">
          <p className="hire">Hire</p>
          <div className="avStatus">
            <div className="status"></div>
            <p className="avi">Available</p>
          </div>
        </div>
      </div>
      <div className="h-wraper">
        <h2 className="h-intro">Welcome To My Portfolio</h2>
        <h1 className="h-name">
          <span style={{ fontSize: "28px", fontWeight: "200" }}>I'm</span> Ramy
        </h1>
        <div className="h-title">
          <div className="h-title-wrapper">
            <div className="h-title-item">Fron-End Dev</div>
            <div className="h-title-item">JavaScript Dev</div>
            <div className="h-title-item">React.js Developer</div>
            <div className="h-title-item">Next.js Developer</div>
            <div className="h-title-item">UI Developer</div>
          </div>
        </div>
        <div className="h-desc">
          <p>Here You Will Find What Is You looking For.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
