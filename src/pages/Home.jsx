import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Fashion World</h1>
      <p>Discover the latest fashion trends.</p>
      
      <div className="home-buttons">
        <button onClick={() => navigate("/products")}>View Products</button>
        <button onClick={() => navigate("/reviews")}>Customer Reviews</button>
      </div>
    </div>
  );
};

export default Home;
