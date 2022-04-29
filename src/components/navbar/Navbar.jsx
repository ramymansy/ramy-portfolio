import "./navbar.css";
import logo from "../../img/Untitled-1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" className="ramy" />
      </div>
      <ul>
        <li>
          <a className="home" href="#home">
            Home
          </a>
        </li>
        <span>|</span>
        <li>
          <a className="about" href="#about">
            About
          </a>
        </li>
        <span>|</span>
        <li>
          <a className="projects" href="#works">
            Works
          </a>
        </li>
        <span>|</span>
        <li>
          <a className="contact" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
