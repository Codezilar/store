// components/ProductDetail.js
"use client"
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

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

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    alert('Product added to cart!');
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img 
              src={images[selectedImage]} 
              alt={name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="thumbnail-images flex gap-2 mt-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} ${index + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title text-3xl font-bold mb-4">{name}</h1>
          
          <div className="product-price mb-4">
            <span className="current-price text-2xl font-bold text-green-600">
              ${price}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="original-price line-through text-gray-500 ml-2">
                ${originalPrice}
              </span>
            )}
          </div>

          <div className="product-rating flex items-center mb-4">
            <div className="stars text-yellow-400">
              {'★'.repeat(5)}
            </div>
            <span className="review-count text-gray-600 ml-2">
              ({reviews.length} reviews)
            </span>
          </div>

          <p className="product-description text-gray-700 mb-6">{description}</p>

          {/* Color Selection */}
          {colors.length > 0 && (
            <div className="color-selection mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="color-options flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {sizes.length > 0 && (
            <div className="size-selection mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="size-options flex gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`size-option px-4 py-2 border rounded ${
                      selectedSize === size 
                        ? 'bg-blue-500 text-white border-blue-500' 
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Purchase Options */}
          <div className="purchase-options mb-6">
            <div className="quantity-selector flex items-center gap-4 mb-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border rounded">
                <button 
                  className="px-3 py-1 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  className="px-3 py-1 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            <button 
              className="add-to-cart-btn w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              {inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="product-features">
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;