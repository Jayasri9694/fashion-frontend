import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onSelectCategory }) => {
  const categories = ["All", "Clothes", "Shoes", "Ornaments", "Bags", "Watches"];

  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
