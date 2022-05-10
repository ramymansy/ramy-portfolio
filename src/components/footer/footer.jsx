import React from "react";
import "./footer.css";
import { BsMouse } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      {/*<div className="social-links">
        <a
          href="https://www.facebook.com/profile.php?id=100069971827760"
          target={"blank"}
        >
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          <AiOutlineTwitter className="social" />
        </a>
        <a href="#">
          <FaGithubAlt className="social" />
        </a>
  </div>*/}
    </div>
  );
};
export default Footer;
