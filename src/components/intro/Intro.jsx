import "./intro.css";
import Video from "../../assests/video.mp4";

const Intro = () => {
  return (
    <div className="i">
      <video loop autoPlay muted className="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="navbar">
        <ul>
          <li>
            <a className="about" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="projects" href="#works">
              Projects
            </a>
          </li>
          <li>
            <a className="contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="i-wraper">
        <h2 className="i-intro">Welcome To My Portfolio</h2>
        <h1 className="i-name">Ramy</h1>
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
            Here You Will Find What Is You looking For About success,
            <br />
            Development Business And Increase Profits.
            <br /> I'll be Happy to help you to reach your goal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
