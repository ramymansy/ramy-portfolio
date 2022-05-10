import React from "react";
import "./portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Ecommerce from "../props/ecommerce-market.webp";
import Movies from "../props/movies.webp";
import Realhome from "../props/realhome.webp";
import Travel from "../props/travel.webp";
import Fashion from "../props/fashion.webp";
import Greenfood from "../props/Green-Foods.webp";
import Cocacola from "../props/cocacola.webp";
import Fitness from "../props/Fitness-Gym.webp";
import Food from "../props/food.webp";
import Products from "../props/products.webp";
import Fruits from "../props/Fruits.webp";
import Suzuki from "../props/Suzuki.webp";
import Bondi from "../props/Bondi.webp";
import Clipboard from "../props/Clipboard.webp";
import Leon from "../props/leon.webp";
import Codna from "../props/Zero.webp";
import Huddle from "../props/Huddle.webp";
import Kasper from "../props/kasper.webp";
import Fylo from "../props/fylo.webp";
import Coventic from "../props/coventic.webp";

const Portfolio = () => {
  return (
    <div id="portfolio" className="container portfolio-container">
      <h1 className="portfolio-txt">Portfolio</h1>
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div>
          <a
            href="https://ecommerce-market-sigma.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Ecommerce} alt="Ecommerce" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/react-movies/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Movies} alt="Movies" />
          </a>
        </div>
        <div>
          <a
            href="https://realhome-beta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Realhome} alt="Realhome" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/travel-react-app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Travel} alt="Travel" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/fashion-e-commerce-react/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Fashion} alt="Fashion" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Green-Foods/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Greenfood} alt="Greenfood" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/cocacola/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cocacola} alt="Cocacola" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Fitness-Gym/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Fitness} alt="Fitness" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/food/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Food} alt="Food" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/products/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Products} alt="Products" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Fruits/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Fruits} alt="Fruits" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Suzuki/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Suzuki} alt="Suzuki" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Bondi/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Bondi} alt="Bondi" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Clipboard/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Clipboard} alt="Clipboard" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/leon/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Leon} alt="Leon" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Zero/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Codna} alt="Codna" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/Huddle/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Huddle} alt="Huddle" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/kasper/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Kasper} alt="Kasper" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/fylo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Fylo} alt="Fylo" />
          </a>
        </div>
        <div>
          <a
            href="https://ramymansy.github.io/coventic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Coventic} alt="Coventic" />
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default Portfolio;
