import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const WebContent = () => {
  return (
    <div>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};
export default WebContent;
