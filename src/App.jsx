import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";
import Contactus from "./pages/contactus.jsx";
import Cart from "./pages/cart.jsx";
import SignIn from "./pages/signin.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
function App() {
 const dummyProducts = [
  {
    id: 1,
    name: "Coffee",
    price: 120,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80"
  },
  {
    id: 2,
    name: "Tea",
    price: 80,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80"
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: 150,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80"
  }
];
  const [products, setProducts] = useState([]);   // ✅ store products here
  const [cart, setCart] = useState([]);

  // ✅ Fetch only once
 useEffect(() => {
  const token = localStorage.getItem("token");

  axios.get("https://restapi-django-5nhm.onrender.com/api/products/", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    if (response.data && response.data.length > 0) {
      setProducts(response.data);
    } else {
      setProducts(dummyProducts);
    }
  })
  .catch((error) => {
    console.log("API failed, using dummy data");
    setProducts(dummyProducts);
  });

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
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>} />
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
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;