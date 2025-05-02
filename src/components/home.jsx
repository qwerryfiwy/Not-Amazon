import React, { useState } from 'react'; // Usestate is imported from React
import "./styles/home.css";
import ProductCard from "./products"; 
import { Products } from "./product.json"; // Importing the Products array from product.json

const allCategories = ["All", "Mobiles", "Perfumes", "Bags", "Makeup"];

function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showCategories, setShowCategories] = useState(false);

    const filteredProducts = selectedCategory === "All"
        ? Products
        : Products.filter(p => p.category === selectedCategory);

    return (
        <div className="home">
            {/* Navbar */}
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item" onClick={() => setShowCategories(!showCategories)}>
                        <a href="#all">All</a>
                    </li>
                    {["Today's Deals", "Customer Service", "Gift Cards"].map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>  

            {/* Category Dropdown */}
            {showCategories && (
                <div className="category-dropdown">
                    {allCategories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            {/* Home Container */}
            <div className="home-container">
                <img src="B1.png" alt="Not Amazon Banner" className="home-image" />

                {/* Product Listing */}
                <div className="home-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} /> // Passing each product to ProductCard
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
