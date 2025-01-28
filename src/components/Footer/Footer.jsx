import React from 'react';
import { Link } from 'react-router-dom'; // تأكد من إضافة الاستيراد
import logo from "../../imgs/logo.png"
const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center   p-4 border-bottom   links" style={{gap:"18%"}}>
                {/* Left */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}

                {/* Right */}
                <div>
                    <Link to="https://www.facebook.com/profile.php?id=100055856226017" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="https://twitter.com" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="https://google.com" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="https://www.instagram.com/ahmed_shalaby03" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ahmed-farag-shalaby" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="https://github.com/AHMEDSHALABY1658" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
                        <i className="fab fa-github"></i>
                    </Link>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}

            {/* Section: Links  */}
            <section>
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className=" logoFooter col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 " style={{display:"flex",justifyContent:"flex-end",margin:"-11px"}}>
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logo}  style={{width:"50px",height:"50px"}} alt="" /> HYPERSHOP
                            </h6>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p>
                                <Link to="/mens-clothing" className="text-reset" style={{ textDecoration: 'none' }}>Men's clothing</Link>
                            </p>
                            <p>
                                <Link to="/girls-clothing" className="text-reset" style={{ textDecoration: 'none' }}>Girls' clothing</Link>
                            </p>
                            <p>
                                <Link to="/hardware" className="text-reset" style={{ textDecoration: 'none' }}>Hardware</Link>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <Link to="/pricing" className="text-reset" style={{ textDecoration: 'none' }}>Pricing</Link>
                            </p>
                            <p>
                                <Link to="/settings" className="text-reset" style={{ textDecoration: 'none' }}>Settings</Link>
                            </p>
                            <p>
                                <Link to="/orders" className="text-reset" style={{ textDecoration: 'none' }}>Orders</Link>
                            </p>
                            <p>
                                <Link to="/help" className="text-reset" style={{ textDecoration: 'none' }}>Help</Link>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> 14th Street Balsam Al Matariyah</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                <a href="mailto:ahmedshalaby1658@gmail.com" className="text-reset" style={{ textDecoration: 'none' }}>ahmedshalaby1658@gmail.com</a>
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +20 1508590031</p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}

            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2025 Copyright:
                <Link to="/about" className="text-reset fw-bold" style={{ textDecoration: 'none' }}>     shalaby</Link>
            </div>
            {/* Copyright */}
        </footer>
    );
};

export default Footer;
