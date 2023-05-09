import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
//create navbar for all pages except home
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>logo</h1>
            </div>

            <div className="nav-links">
                <Link to="/" className="link">Home</Link>
                <Link to="/blogs" className="link">Blogs</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
                
        </div>
    )
}



    export default Navbar;