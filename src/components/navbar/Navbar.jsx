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
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a className="homei" href="#home">
              <AiFillHome className="icons" />
              <p>Home</p>
            </a>
          </li>
          <span>|</span>
          <li>
            <a className="abouti" href="#about">
              <SiAboutdotme className="icons" />
              <p>About</p>
            </a>
          </li>
          <span>|</span>
          <li>
            <a className="clientsi" href="#clients">
              <FaUsers className="icons" />
              <p>Testimonials</p>
            </a>
          </li>
          <span>|</span>
          <li>
            <a className="projectsi" href="#works">
              <FiMonitor className="icons" />
              <p>Protfolio</p>
            </a>
          </li>
          <span>|</span>
          <li>
            <a className="contacti" href="#contact">
              <TiMessages className="icons" />
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="avilable-container">
        <div className="avilable">
          <p className="hire">Hire</p>
          <div className="avStatus">
            <div className="status"></div>
            <p className="avi">Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
