import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { products, setProducts } = useContext(ProductContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [oldprice, setOldprice] = useState('');
  const [category, setCategory] = useState('home');
  const [image, setImage] = useState('');
  const [discount, setDiscount] = useState('');
  const [editId, setEditId] = useState(null);

  const resetForm = () => {
    setTitle('');
    setPrice('');
    setOldprice('');
    setCategory('home');
    setImage('');
    setDiscount('');
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updatedProducts = products.map((p) =>
        p.id === editId
          ? { ...p, title, price, oldprice, category, image, discount }
          : p
      );
      setProducts(updatedProducts);
      alert('Product updated!');
    } else {
      const newProduct = {
        id: Date.now(),
        title,
        price,
        oldprice,
        category,
        image,
        discount,
      };
      setProducts([...products, newProduct]);
      alert('Product added!');
    }
    resetForm();
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setOldprice(product.oldprice);
    setCategory(product.category);
    setImage(product.image);
    setDiscount(product.discount);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    window.location.href = '/login';
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="New Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Old Price"
          value={oldprice}
          onChange={(e) => setOldprice(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="home">Home</option>
       
        </select>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        {/* Image preview */}
        {image && (
          <div className="image-preview">
            <p>Current Image:</p>
            <img
              src={image}
              alt="Product"
              style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
            />
          </div>
        )}

        <input
          type="number"
          placeholder="Discount (%)"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <button type="submit">{editId ? 'Update Product' : 'Add Product'}</button>
        {editId && <button type="button" onClick={resetForm}>Cancel Edit</button>}
      </form>

      <div className="product-list">
        <h2>All Products</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', marginRight: '10px' }}
                />
                <strong>{product.title}</strong> - ₹{product.price} - <em>{product.category}</em>
                <div className="product-actions">
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
