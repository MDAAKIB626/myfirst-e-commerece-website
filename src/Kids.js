import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Producthome.css';

// Static images
import kidimg1 from './kidimages/img3.jpg';
import kidimg2 from './kidimages/img4.webp';
import kidimg3 from './kidimages/img5.webp';
import kidimg4 from './kidimages/img6.webp';
import kidimg5 from './kidimages/img7.webp';
import kidimg6 from './kidimages/img8.webp';
import kidimg7 from './kidimages/img9.webp';
import kidimg8 from './kidimages/img10.webp';
import kidimg9 from './kidimages/kidimg1.webp';
import kidimg10 from './kidimages/kidimg2.webp';

// Static product data
const kidsProducts = [
  { id: 'k1', imgSrc: kidimg1, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 35%', oldPrice: '₹799', newPrice: '₹519', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k2', imgSrc: kidimg2, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 47%', oldPrice: '₹799', newPrice: '₹419', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k3', imgSrc: kidimg3, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 42%', oldPrice: '₹899', newPrice: '₹519', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k4', imgSrc: kidimg4, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 18%', oldPrice: '₹699', newPrice: '₹569', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k5', imgSrc: kidimg5, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 23%', oldPrice: '₹599', newPrice: '₹459', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k6', imgSrc: kidimg6, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 18%', oldPrice: '₹999', newPrice: '₹819', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k7', imgSrc: kidimg7, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 36%', oldPrice: '₹499', newPrice: '₹319', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k8', imgSrc: kidimg8, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 25%', oldPrice: '₹899', newPrice: '₹669', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k9', imgSrc: kidimg9, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 07%', oldPrice: '₹399', newPrice: '₹369', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
  { id: 'k10', imgSrc: kidimg10, tag: '# Kids Printed ', brand: 'PEPPERMINT', discount: '↓ 31%', oldPrice: '₹759', newPrice: '₹519', rating: '⭐⭐⭐⭐☆', ratingCount: 4300 },
];

const Kids = () => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product);
    alert(`Item from ${product.brand} added to cart!`);
  };

  return (
    <div className="products-cards">
      {kidsProducts.map((product) => (
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

export default Kids;
