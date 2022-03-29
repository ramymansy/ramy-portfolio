import "./app.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
