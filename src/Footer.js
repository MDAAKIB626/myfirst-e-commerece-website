

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 mt-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p style={{ fontSize: '14px' }}>
              We are a leading fashion and lifestyle store offering trendy clothing for Men, Women, and Kids.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/men" className="text-dark">Men</Link></li>
              <li><Link to="/women" className="text-dark">Women</Link></li>
              <li><Link to="/kids" className="text-dark">Kids</Link></li>
              <li><Link to="/contact" className="text-dark">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div style={{ fontSize: '20px' }}>
              <a href="https://facebook.com" className="text-dark me-3"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-dark me-3"><FaInstagram /></a>
              <a href="https://whatapp.com" className="text-dark me-3"><FaWhatsapp /></a>
              <a href="https://youtube.com" className="text-dark"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="text-center py-3 border-top mt-3" style={{ fontSize: '14px' }}>
          © {new Date().getFullYear()} YourStoreName. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
