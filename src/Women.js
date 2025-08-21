import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Producthome.css';

import womenimg1 from './womenimages/women1.avif';
import womenimg2 from './womenimages/women3.avif';
import womenimg3 from './womenimages/women4.webp';
import womenimg4 from './womenimages/women5.avif';
import womenimg5 from './womenimages/women6.avif';
import womenimg6 from './womenimages/women7.avif';
import womenimg7 from './womenimages/women8.jpeg';
import womenimg8 from './womenimages/women9.avif';
import womenimg9 from './womenimages/womens2.jpg';
import womenimg10 from './womenimages/women10.jpeg';

const womenProducts = [
  {
    id: 'w1',
    imgSrc: womenimg1,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 52%',
    oldPrice: '₹2,299',
    newPrice: '₹1,099',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w2',
    imgSrc: womenimg2,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 44%',
    oldPrice: '₹2,150',
    newPrice: '₹1,199',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w3',
    imgSrc: womenimg3,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 50%',
    oldPrice: '₹2,000',
    newPrice: '₹999',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w4',
    imgSrc: womenimg4,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 42%',
    oldPrice: '₹1,899',
    newPrice: '₹1,099',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w5',
    imgSrc: womenimg5,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 34%',
    oldPrice: '₹3,199',
    newPrice: '₹2,099',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w6',
    imgSrc: womenimg6,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 25%',
    oldPrice: '₹2,699',
    newPrice: '₹1,999',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w7',
    imgSrc: womenimg7,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 59%',
    oldPrice: '₹2,199',
    newPrice: '₹899',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w8',
    imgSrc: womenimg8,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 65%',
    oldPrice: '₹3,199',
    newPrice: '₹1,099',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w9',
    imgSrc: womenimg9,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 71%',
    oldPrice: '₹1,399',
    newPrice: '₹1,299',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
  {
    id: 'w10',
    imgSrc: womenimg10,
    tag: '# Casual Floral Dress',
    brand: 'ZARA',
    discount: '↓ 29%',
    oldPrice: '₹2,399',
    newPrice: '₹1,699',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 8500,
  },
];

const Women = () => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product);
    alert(`Item from ${product.brand} added to cart!`);
  };

  return (
    <div className="products-cards">
      {womenProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imgSrc} alt={product.brand} className="product-image" />
          <div className="product-info">
            <p className="tag">{product.tag}</p>
            <h2 className="brand">{product.brand}</h2>
            <p className="price">
              <span className="discount">{product.discount}</span>
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </p>
            <div className="rating">
              {product.rating} <span>({product.ratingCount.toLocaleString()})</span>
            </div>
            <div className="buttons">
              <button className="add-btn" onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Women;
