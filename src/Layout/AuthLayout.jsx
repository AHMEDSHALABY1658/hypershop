import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../imgs/logo.png"
import { Link, NavLink } from 'react-router-dom';

import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

export default function AuthLayout() {
    return (
    <div>
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
        
        </ul>
        <div className="holder">

        <NavLink className="signout" to="/Signup">Signup</NavLink>
        <NavLink className="signout" to="/Signin">Signin</NavLink>
        </div>
    </div>
    </div>
</nav>
        <Outlet/>
    </div>
    )
}
