import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 
import './Producthome.css';
import producthomeimg1  from './producthomeimages/home1.jpg';
import producthomeimg2  from './producthomeimages/home2.avif';
import producthomeimg3  from './producthomeimages/home3.avif';
import producthomeimg4  from './producthomeimages/home4.avif';
import producthomeimg5  from './producthomeimages/home5.jpeg';
import producthomeimg6  from './producthomeimages/home6.jpeg';
import producthomeimg7  from './producthomeimages/home7.jpeg';
import producthomeimg8  from './producthomeimages/home8.avif';
import producthomeimg9  from './producthomeimages/home8.jpeg';
import producthomeimg10  from './producthomeimages/home9.avif';
import producthomeimg11 from './producthomeimages/home9.jpeg';
import producthomeimg12  from './producthomeimages/home10.jpg';
import producthomeimg13  from './producthomeimages/home11.jpg';
import producthomeimg14  from './producthomeimages/home12.jpeg';
import producthomeimg15  from './producthomeimages/home13.webp';
 

const products = [
  {
    id: 1,
    imgSrc: producthomeimg1 ,
    tag: '# Mens Solid Casual Shirt',
    brand: 'ROADSTER',
    discount: '↓ 56%',
    oldPrice: '₹1,699',
    newPrice: '₹790',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 19297,
  },
  {
    id: 2,
    imgSrc: producthomeimg2 ,
    tag: '# Men Striped Slim Fit Shirt',
    brand: 'HIGHLANDER',
    discount: '↓ 42%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 3,
    imgSrc: producthomeimg3 ,
    tag: '# Men Striped Slim Fit Shirt',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 4,
    imgSrc: producthomeimg4 ,
    tag: '# Men Striped Slim Fit Shirt',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 5,
    imgSrc: producthomeimg5 ,
    tag: '# Women Striped Slim Fit ',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 6,
    imgSrc: producthomeimg6 ,
    tag: '# Women Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 7,
    imgSrc: producthomeimg7 ,
    tag: '# Women Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 8,
    imgSrc: producthomeimg8 ,
    tag: '# Women Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 9,
    imgSrc: producthomeimg9 ,
    tag: '# Women Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 10,
    imgSrc: producthomeimg10 ,
    tag: '# Kids Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 11,
    imgSrc: producthomeimg11,
    tag: '# women Striped Slim Fit ',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 12,
    imgSrc: producthomeimg12,
    tag: '# Kids Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 13,
    imgSrc: producthomeimg13,
    tag: '# Kids Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
   {
    id: 14,
    imgSrc: producthomeimg14,
    tag: '#  Kids Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
     {
    id: 15,
    imgSrc: producthomeimg15,
    tag: '#  Kids Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: '↓ 40%',
    oldPrice: '₹1,299',
    newPrice: '₹779',
    rating: '⭐⭐⭐⭐⭐',
    ratingCount: 15300,
  },
 
  

 
  
];

const Producthome = () => {
   const { addToCart } = useContext(CartContext); 
  const handleAdd = (product) => {
    addToCart(product);
    alert(`Item from ${product.brand} added to cart!`);
  };

  return (
    <div className="products-cards">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imgSrc} alt={`${product.brand} T-shirt`} className="product-image" />

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

export default Producthome;