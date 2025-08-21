import React from 'react';
import './Service.css';

const services = [
  {
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders above ₹999 across India.',
    icon: '🚚',
  },
  {
    title: '24/7 Customer Support',
    description: 'Reach out anytime. Our support team is always here for you.',
    icon: '📞',
  },
  {
    title: 'Easy Returns',
    description: 'Not satisfied? Return your item within 7 days, hassle-free.',
    icon: '↩️',
  },
  {
    title: 'Secure Payment',
    description: 'Your payment is encrypted and 100% secure.',
    icon: '💳',
  },
  {
    title: 'Top Brands',
    description: 'We bring you products from the best and most trusted brands.',
    icon: '🏷️',
  },
  {
    title: 'Fast Delivery',
    description: 'We deliver your products within 2–5 business days.',
    icon: '⏱️',
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
