

// src/AuthPage.js
import React, { useState, useContext } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./SignUp.css";

const AuthPage = ({ setToken }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { setUserId } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (isSignup) {
        res = await API.post("/auth/signup", form);
      } else {
        res = await API.post("/auth/login", form);
      }
      const userId = res.data.userId;
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token); // ✅ Update App token state
      setUserId(userId);
      navigate("/home");
    } catch (err) {
      alert(isSignup ? "Signup failed" : "Signin failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>

        {isSignup && (
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>

        <div className="auth-toggle">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span className="auth-toggle-link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Sign In" : " Sign Up"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
