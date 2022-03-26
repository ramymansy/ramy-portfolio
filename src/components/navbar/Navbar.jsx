import "./navbar.css";
import click from "../../img/click.png";

const Navbar = () => {
  return (
    <div className="n">
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
      <img className="click" src={click} alt="click" />
    </div>
  );
};

export default Navbar;
