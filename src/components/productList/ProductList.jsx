import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl" id="works">
      <div className="pl-texts">
        <h1 className="pl-title">
          See My Works
          <br />
          Which Will Amaze You!
        </h1>
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
