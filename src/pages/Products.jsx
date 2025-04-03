import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import "./Products.css";

const productsData = [
    // clothes's Clothes
    { id: 1, name: "Red Dress", category: "Clothes", price: 1999, image: "/images/red dress.webp" },
    { id: 2, name: "Blue Saree", category: " Clothes", price: 2999, image: "/images/saree.jpeg" },
    { id: 3, name: "Black Kurti", category: "Clothes", price: 1599, image: "/images/red dress.webp" },
    { id: 4, name: "Pink Gown", category: "Clothes", price: 2499, image: "/images/blazzer.jpeg" },
    { id: 5, name: "Casual Jeans", category: "Clothes", price: 1899, image:"/images/saree.jpeg" },
    { id: 6, name: "Office Blazer", category: "Clothes", price: 3599, image: "/images/red dress.webp" },
    { id: 7, name: "Cotton Shirt", category: "Clothes", price: 1299, image: "/images/blazzer.jpeg" },
    { id: 8, name: "Summer Top", category: "Clothes", price: 999, image: "/images/saree.jpeg" },
    { id: 9, name: "Ethnic Wear", category: "clothes Clothes", price: 2799, image: "/images/blazzer.jpeg" },
    { id: 10, name: "Casual T-shirt", category: "clothes Clothes", price: 899, image: "/images/blazzer.jpeg" },

    // Men's Clothes
    { id: 11, name: "Formal Shirt", category: "Clothes", price: 1599, image: "/images/tshirt.jpeg" },
    { id: 12, name: "Casual Jeans", category: "Clothes", price: 1999, image: "/images/hoodies.jpg" },
    { id: 13, name: "Blazer", category: "Clothes", price: 3999, image: "/images/tshirt.jpeg" },
    { id: 14, name: "T-shirt", category: "Clothes", price: 999, image: "/images/hoodies.jpg" },
    { id: 15, name: "Kurta", category: "Clothes", price: 1799, image: "/images/tshirt.jpeg" },
    { id: 16, name: "Denim Jacket", category: "Clothes", price: 2499, image: "/images/hoodies.jpg" },
    { id: 17, name: "Ethnic Wear", category: "Clothes", price: 2799, image: "/images/hoodies.jpg" },
    { id: 18, name: "Sweater", category: "Clothes", price: 1999, image: "/images/tshirt.jpeg" },
    { id: 19, name: "Hoodie", category: "Clothes", price: 2199, image: "/images/hoodies.jpg" },
    { id: 20, name: "Joggers", category: "Clothes", price: 1899, image: "/images/tshirt.jpeg" },

    // shoes's Shoes
    { id: 21, name: "Heels", category: "Shoes", price: 2999, image: "/images/flatslipper.jpeg" },
    { id: 22, name: "Flats", category: "Shoes", price: 1499, image: "/images/flatslipper.jpeg" },
    { id: 23, name: "Sneakers", category: "Shoes", price: 2999, image: "/images/flatslipper.jpeg" },

    // Men's Shoes
    { id: 24, name: "Leather Shoes", category: "Shoes", price: 3499, image: "/images/leather shoes.webp" },
    { id: 25, name: "Sneakers", category: "Shoes", price: 2999, image: "/images/leather shoes.webp" },

    // slipper's Slippers
    { id: 26, name: "Fashion Slippers", category: "Slippers", price: 1299, image: "/images/casual.jpeg" },

    // Men's Slippers
    { id: 27, name: "Casual Slippers", category: "slippers", price: 1199, image: "/images/modern.webp" },

    // Ornaments
    { id: 28, name: "Gold Earrings", category: "Ornaments", price: 4999, image: "/images/bangles.jpeg" },
    { id: 29, name: "Men's Bracelet", category: "Ornaments", price: 2999, image: "/images/necklace.jpeg" },

    // Bags
    { id: 30, name: "Handbag", category: "Bags", price: 3999, image: "/images/handbag.webp" },
    { id: 31, name: "Backpack", category: "Bags", price: 3599, image: "/images/handbag.webp" },

    // Watches
    { id: 32, name: "Luxury Watch", category: "Watches", price: 6999, image: "/images/watch.webp" },
    { id: 33, name: "Men's Watch", category: "Watches", price: 4999, image: "/images/watchw.jpeg" },
];

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All"
        ? productsData
        : productsData.filter(product => product.category === selectedCategory);

    return (
        <div className="products-page">
            <Sidebar onSelectCategory={setSelectedCategory} />
            <div className="products-container">
                <h2>{selectedCategory} Products</h2>
                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No products found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;