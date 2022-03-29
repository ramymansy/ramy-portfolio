import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="navbar">
        <ul>
          <li>
            <a className="about" href="#about">
              About
            </a>
          </li>
          <span style={{ color: "#fff" }}>|</span>
          <li>
            <a className="projects" href="#works">
              Projects
            </a>
          </li>
          <span style={{ color: "#fff" }}>|</span>
          <li>
            <a className="contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="i-wraper">
        <h2 className="i-intro">Welcome To My Portfolio</h2>
        <h1 className="i-name">
          <span style={{ fontSize: "28px", fontWeight: "200" }}>I'm</span> Ramy
        </h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Fron-End Dev</div>
            <div className="i-title-item">JavaScript Dev</div>
            <div className="i-title-item">React.js Developer</div>
            <div className="i-title-item">Next.js Developer</div>
            <div className="i-title-item">UI Developer</div>
          </div>
        </div>
        <div className="i-desc">
          <p>
            Here You Will Find What Is You looking For
            <br />
            success, Development And Increase Business Profits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
