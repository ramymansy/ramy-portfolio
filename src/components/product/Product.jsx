import "./product.css";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle min"></div>
        <div className="p-circle max"></div>
        <div className="p-circle close"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="img" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
