import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <h1>Fashion World</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            <span className="cart-count">{cartItems.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
