import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
            Projects
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
