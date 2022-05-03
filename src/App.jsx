import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Clients />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;

