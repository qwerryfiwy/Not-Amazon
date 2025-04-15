import React, { useState } from 'react';

function ProductCard({ product }) { // Accept individual product as a prop
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Product Card */}
      <div className="product-card" onClick={openModal}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>

      {/* Modal for Product Details */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>×</span>
            <div className="modal-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="modal-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="modal-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
