import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx";
import SignIn from "./pages/signin.jsx";
import Register from "./pages/register.jsx";
function App() {
  const [products, setProducts] = useState([]);   // ✅ store products here
  const [cart, setCart] = useState([]);

  // ✅ Fetch only once
  useEffect(() => {
    axios.get("https://restapi-django-5nhm.onrender.com/api/products/")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              products={products} 
              addToCart={addToCart} 
            />
          } 
        />

        <Route 
          path="/shop" 
          element={
            <Shop 
              products={products} 
              addToCart={addToCart} 
            />
          } 
        />

        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
            />
          } 
        />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;