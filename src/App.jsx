import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Cart from "./pages/Cart.jsx";
import Review from "./pages/Review"; 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
