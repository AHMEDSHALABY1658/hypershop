import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
export default function MainLayout() {
    return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main style={{minHeight:"100vh"}}>
            <Outlet/>
        </main>
        <footer style={{marginTop:"80px"}}>
            <Footer/>
        </footer>
        
    </div>
    )
}
