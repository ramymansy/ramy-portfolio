import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl" id="works">
      <div className="pl-texts">
        <h1 className="pl-title">See My Works Which Will Amaze You!</h1>
        <p className="pl-desc">
          I develop the best quality website that serves for the long-term.
          <br />
          Well-documented, clean, easy and elegant interface helps any
          non-technical clients.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
