import React from "react";
import "./home.css";
import img from "../props/img6.png";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="img" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I’m a developer who has a passion for building clean web apps with
          intuitive functionality, Enjoy the process of turning ideas into
          reality using creative solutions, and I’m always curious about
          learning new skills, tools, and concepts, in addition to working on
          various solo front-end projects, I have worked with creative teams,
          which involves daily stand-ups and communications, source control, and
          project management, I develop a simple, intuitive, and responsive user
          interface that helps users get things done with less.
        </p>
      </h2>
      <Buttons />
    </div>
  );
};

export default Home;
