// src/components/Navbar.js
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { FaBagShopping } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);       // update App state
    navigate("/");        // redirect to auth page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">E-COMMERCE</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>

          <Link to="/cart" className="cart-icon">
            <FaBagShopping />
            <span className="count-items">{cartItems.length}</span>
          </Link>

          <Link to="/admin">Admin</Link>

          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
