import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("home");
  const [editId, setEditId] = useState(null);

  // Load products from localStorage on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) setProducts(JSON.parse(storedProducts));
  }, [setProducts]);

  // Update localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const resetForm = () => {
    setTitle(""); setPrice(""); setOldPrice(""); setDiscount(""); setBrand(""); setImage(""); setCategory("home"); setEditId(null);
  };

  const handleAddOrUpdateProduct = () => {
    if (!title || !price) return;

    if (editId) {
      const updated = products.map(p =>
        p.id === editId ? { ...p, title, price, oldPrice, discount, brand, image, category } : p
      );
      setProducts(updated);
    } else {
      const newProduct = {
        id: Date.now(), title, price, oldPrice: oldPrice || price,
        discount: discount || "0%", brand: brand || "Admin Product",
        image, category, quantity: 1
      };
      setProducts([...products, newProduct]);
    }
    resetForm();
  };

  const handleDelete = (id) => {
    const filteredProducts = products.filter(p => p.id !== id);
    setProducts(filteredProducts);
  };

  const handleEdit = (p) => {
    setTitle(p.title); setPrice(p.price); setOldPrice(p.oldPrice); setDiscount(p.discount); setBrand(p.brand); setImage(p.image); setCategory(p.category); setEditId(p.id);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // optional if you have admin login
    navigate("/admin/login");
  };

  return (
    <div className="admin-container">
      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      <div className="form-container">
        <h2>{editId ? "Edit Product" : "Add Product"}</h2>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <input placeholder="Old Price" value={oldPrice} onChange={e => setOldPrice(e.target.value)} />
        <input placeholder="Discount" value={discount} onChange={e => setDiscount(e.target.value)} />
        <input placeholder="Brand" value={brand} onChange={e => setBrand(e.target.value)} />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="home">Home</option>
    
        </select>
        <button onClick={handleAddOrUpdateProduct}>{editId ? "Update" : "Add"}</button>
      </div>

      <h3>All Products</h3>
      {products.length === 0 ? <p>No products added yet.</p> : (
        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <h4>{p.title}</h4>
              <img src={p.image || "https://via.placeholder.com/150"} alt={p.title} />
              <p>Brand: {p.brand}</p>
              <p>Price: ₹{p.price}</p>
              <p>Old Price: <del>₹{p.oldPrice}</del></p>
              <p>Discount: {p.discount}</p>
              <p>Category: {p.category}</p>
              <div className="product-buttons">
                <button className="edit-btn" onClick={() => handleEdit(p)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
