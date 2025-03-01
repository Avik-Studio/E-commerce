import Header from "./compoents/Header";
import Footer from "./compoents/Footer";
import Contact from "./Pages/contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ProductFilter from "./Pages/ProductFilter";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/productDetail";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import Order from "./Pages/Order";
import Address from "./Pages/Address";
import PageNotfound from "./Pages/pageNotfound";
import Signin from "./Pages/signIn";
import Signup from "./Pages/signUp";
//alert
import "./Utils/alert";

//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/product/:categoryName" element={<Product />} />
          <Route path="/ProductFilter" element={<ProductFilter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/address" element={<Address />} />
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Signin" element={<Signin />} /> 
          <Route path="*" element={<PageNotfound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
