
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaBagShopping } from "react-icons/fa6"; // or FaShoppingBag
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({logout,user}) => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">E-COMMERECE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <Link to="/cart" className="cart-icon" style={{ marginLeft: '15px', position: 'relative' }}>
            <FaBagShopping size={24} />
            <span className="count-items" style={{ position: 'absolute',top: '-5px', right: '-10px', backgroundColor: 'red',color: 'white',
            borderRadius: '50%',   padding: '2px 6px', fontSize: '12px'  }}>{cartItems.length}</span>
          </Link>

         <Link to="/admin">Admin</Link> {/* ✅ Visible to all */}
            <button onClick={logout}>Logout</button>
        </div>
      </div>
     
    
      
    </nav>
  );
}


export default Navbar;
