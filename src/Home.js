import React, { useContext } from "react";
import "./Home.css";
import Producthome from "./Producthome"; 
import banner1 from "./homeimages1/banner7.jpg";
import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Sirf "home" category ke products
  const homeProducts = products.filter(p => p.category === "home");

  const handleAddToCart = (product) => {
    const cartProduct = { 
      ...product, 
      quantity: 1 
    };
    addToCart(cartProduct);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="bannerimg">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img src={banner1} className="d-block w-100" alt="banner" />
              </div>
            ))}
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

      {/* Home Products Section */}
      <div className="admin-home-products">
        <h2>New Arrivals</h2>
        <div className="admin-home-product-1">
          {homeProducts.length > 0 ? (
            homeProducts.map((p) => (
              <div key={p.id} className="admin-product-card">
                <img 
                  src={p.image || "https://via.placeholder.com/180"} 
                  alt={p.title} 
                  style={{ width: "200px", height: "200px", objectFit: "cover", marginBottom: "10px" }}
                />
                <h4 className="tag-1">{p.title}</h4>
                <h5 className="brand-1">{p.brand}</h5>
              <div className="price-line">
              <p className="newprice-1">₹{p.price}</p>
              <p className="oldprice-1"><del>₹{p.oldPrice}</del></p>
              <p className="discount-1">{p.discount}%</p>
               </div>

                <button 
                  className="homeaddbtn" 
                  onClick={() => handleAddToCart(p)}
                  style={{ padding: "5px 10px", marginTop: "5px", cursor: "pointer" }}
                >
                  ADD TO CART
                </button>
              </div>
            ))
          ) : (
            <p>No new products added yet.</p>
          )}
        </div>
      </div>

      {/* Extra Section */}
      <Producthome />
    </div>
  );
};

export default Home;
