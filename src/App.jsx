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
import Checkout from "./pages/checkout.jsx";

function App() {
  const dummyProducts = [
    {
      id: 1,
      name: "Coffee",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
    },
    {
      id: 2,
      name: "Tea",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80",
    },
    {
      id: 3,
      name: "Cold Coffee",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    },
  ];

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // Fetch products from Django REST Framework
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://restapi-django-5nhm.onrender.com/api/products/", {
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : {},
      })
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts(dummyProducts);
        }
      })
      .catch((error) => {
        console.error("Product API failed:", error);
        setProducts(dummyProducts);
      });
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product or increase its quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product completely
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Increase or decrease product quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Total number of individual items
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

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

        <Route path="/about" element={<About />} />

        <Route path="/contactus" element={<Contactus />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;