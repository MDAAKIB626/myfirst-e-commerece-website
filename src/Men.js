


import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Producthome.css';
import menimges1 from './menproductimages/menimage1.jpg';
import menimges2 from './menproductimages/menimage2.jpg';
import menimges3 from './menproductimages/menimage3.jpg';
import menimges4 from './menproductimages/menimage4.webp';
import menimges5 from './menproductimages/menimage5.jpg';
import menimges6 from './menproductimages/menimage6.jpg';
import menimges7 from './menproductimages/menimage7.jpg';
import menimges8 from './menproductimages/menimage8.jpg';
import menimges9 from './menproductimages/menimage9.webp';
import menimges10 from './menproductimages/men10.avif';

const MenProducts = [
  {
    id: 'm1',
    imgSrc: menimges1,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 45%',
    oldPrice: '₹1,899',
    newPrice: '₹1,044',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm2',
    imgSrc: menimges2,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 36%',
    oldPrice: '₹1,799',
    newPrice: '₹1,144',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm3',
    imgSrc: menimges3,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 27%',
    oldPrice: '₹1,699',
    newPrice: '₹1,224',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm4',
    imgSrc: menimges4,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 11%',
    oldPrice: '₹1,299',
    newPrice: '₹1,144',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm5',
    imgSrc: menimges5,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 02%',
    oldPrice: '₹1,999',
    newPrice: '₹1,944',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm6',
    imgSrc: menimges6,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 01%',
    oldPrice: '₹1,599',
    newPrice: '₹1,574',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm7',
    imgSrc: menimges7,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 16%',
    oldPrice: '₹1,199',
    newPrice: '₹1,004',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm8',
    imgSrc: menimges8,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 45%',
    oldPrice: '₹1,899',
    newPrice: '₹1,044',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm9',
    imgSrc: menimges9,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 05%',
    oldPrice: '₹1,299',
    newPrice: '₹1,224',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
  {
    id: 'm10',
    imgSrc: menimges10,
    tag: '# Slim Fit Shirt',
    brand: 'LEVIS',
    discount: '↓ 45%',
    oldPrice: '₹1,899',
    newPrice: '₹1,044',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 10200,
  },
];

const Men = () => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product);
    alert(`Item from ${product.brand} added to cart!`);
  };

  return (
    <div className="products-cards">
      {MenProducts.map((product) => (
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

export default Men;
