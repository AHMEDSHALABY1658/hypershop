import React, { useContext, useEffect } from 'react'
import logo from "../../imgs/logo.png"
import { Link, NavLink } from 'react-router-dom';

import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { storeContext } from '../../context/StoreContext';


export default function Navbar() {

    let {counter,getCart,setCounter,getWishlist,Wishlist,setCountertWishlist} =useContext(storeContext)

    useEffect(()=>{
        (async()=>{
            let data = await getCart()
            setCounter(data.data.numOfCartItems)
        })()
        
    },[])
    useEffect(()=>{
        (async()=>{
            let data = await getWishlist()
            setCountertWishlist(data.data.count)
        })()
        
    },[])


    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{paddingInline:"50px"}}>
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
            <div className="IconHolder" >
            <IoCart />
            {counter?<span>{counter}</span>:""}
            
            </div>
        </div>
        <div className="wishlist">
            <NavLink className="nav-link" to="/Wishlist">
            Wishlist
            </NavLink>
            <div className="IconHolder">
            <FaHeart />
            {counter?<span>{Wishlist}</span>:""}
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
