import React from 'react'
import logo from "../../imgs/logo.png"
import { Link, NavLink } from 'react-router-dom';

import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
export default function Navbar() {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <div className="logo-container">
        <img src={logo} alt="" />
        <h5>HYPERSHOP</h5>
    </div>
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">
            Home
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/products">
            Products
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/categories">
            Categories
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/brands">
            Brands
            </NavLink>
        </li>
        
        </ul>
        <div className="navbar-nav">
        <div className="cart">
            <NavLink className="nav-link" to="/cart" >
            Cart
            </NavLink>
            <div className="IconHolder" exact>
            <IoCart />
            <span>3</span>
            </div>
        </div>
        <div className="wishlist">
            <NavLink className="nav-link" to="/Wishlist">
            Wishlist
            </NavLink>
            <div className="IconHolder">
            <FaHeart />
            <span>5</span>
            </div>
        </div>
        <NavLink className="signout" to="/Signin">signout</NavLink>
        </div>
    </div>
    </div>
</nav>
    </>
    )
}
