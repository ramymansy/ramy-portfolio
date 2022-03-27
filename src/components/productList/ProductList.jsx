import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl" id="works">
      <div className="pl-texts">
        <h1 className="pl-title">Creative & inspire ...</h1>
        <p className="pl-desc">
          Here you will find creative Websites, Beautiful Landingpages, stunning
          styles that your work has been waiting for & a whole lot more awaits
          inside.
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
