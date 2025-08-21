// Home.js
import React, { useContext } from 'react';
import './Home.css';
import Producthome from './Producthome';
import banner1 from './homeimages1/banner7.jpg';
import { ProductContext } from './ProductContext';
import { CartContext } from './CartContext';

const Home = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const homeProducts = products.filter(p => p.category === 'home');

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  const handleAdd = (product) => {
    const cartProduct = {
      id: product.id,
      title: product.title,
      brand: product.brand || 'Admin Product',
      image: product.image,
      price: product.price,
      discount: product.discount,
      quantity: 1,
    };
    addToCart(cartProduct);
     alert(`${cartProduct.brand} added to cart!`);
  };

  return (
    <div>
      <div className="bannerimg">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="admin-home-products">
        <h2>New Arrivals</h2>
        <div className="admin-home-product-1">
          {homeProducts.length > 0 ? (
            homeProducts.map((p) => (
              <div key={p.id} className="admin-product-card">
                <img src={p.image} alt={p.title} width="200" />
                <h4>{p.title}</h4>
                <h4>{p.brand}</h4>
                <p>₹{p.price}</p>
                <p className="oldprice">₹{p.oldprice}</p>
                <p>{p.discount}% off</p>
                <button className="homeremovebtn" onClick={() => handleDelete(p.id)}>Delete</button>
                <button className="homeaddbtn" onClick={() => handleAdd(p)}>ADD TO CART</button>
              </div>
            ))
          ) : (
            <p>No new products added yet.</p>
          )}
        </div>
      </div>

      <Producthome />
    </div>
  );
};

export default Home;
