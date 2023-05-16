import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
//create navbar for all pages except home
function Navbar() {
    return (
        <div className="navbar" >
            <div className="logo">
                <h1>logo</h1>
            </div>

            <div className="nav-links">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
            </div>
                
        </div>
    )
}



    export default Navbar;