import "./navbar.css";
import logo from "../../img/Untitled-1.png";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" className="ramy" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a className="home" href="#home">
              <AiFillHome className="icons homeIcon" />
              <p>Home</p>
            </a>
          </li>
          <span>.</span>
          <li>
            <a className="about" href="#about">
              <SiAboutdotme className="icons aboutIcon" />
              <p>About</p>
            </a>
          </li>
          <span>.</span>
          <li>
            <a className="clients" href="#clients">
              <FaUsers className="icons clientsIcon" />
              <p>Clients</p>
            </a>
          </li>
          <span>.</span>
          <li>
            <a className="projects" href="#works">
              <FiMonitor className="icons portfolioIcon" />
              <p>Protfolio</p>
            </a>
          </li>
          <span>.</span>
          <li>
            <a className="contact" href="#contact">
              <TiMessages className="icons contactIcon" />
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
