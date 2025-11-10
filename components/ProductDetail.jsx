"use client"
import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
    const {
    id,
    name,
    images,
    price,
    originalPrice,
    reviews = [],
    description,
    colors = [],
    sizes = [],
    inStock = true,
    features = []
  } = product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of ${name} to cart`);
  };

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img 
              src={images[selectedImage]} 
              alt={name}
            />
          </div>
          <div className="thumbnail-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} ${index + 1}`}
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{name}</h1>
          <div className="product-price">
            <span className="current-price">
                ${price}
            </span>
            {originalPrice && (
              <span className="original-price">${originalPrice}</span>
            )}
          </div>

          <div className="product-rating">
            <div className="stars">
              {'★'.repeat(5)}{'☆'.repeat(5 - 5)}
            </div>
            <span className="review-count">({reviews.length} reviews)</span>
          </div>

          <p className="product-description">{description}</p>
          {/* Color Selection */}
          <div className="color-selection">
            <h3>Color</h3>
            <div className="color-options">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
          <div className="size-selection">
            <h3>Size</h3>
            <div className="size-options">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className="size-option"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="purchase-options">
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button 
              className="add-to-cart-btn"
              onClick={addToCart}
              disabled={!inStock}
            >
              {inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;