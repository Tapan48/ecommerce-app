import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  console.log("Navbar renderedd");
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
