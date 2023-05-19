import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
//create navbar for all pages except home
function Navbar() {
    function handleClick(){
        window.scrollTo(0, 0);
    }
    return (
        <div className="navbar" >
            <div className="logo">
                <Link onClick={handleClick} to="/" className="logo-link"><h1>Logo</h1></Link>
            </div>

            <div className="nav-links">
                <Link onClick={handleClick} to="/" className="link">Home</Link>
                <Link onClick={handleClick} to="/about" className="link">About</Link>
            </div>
                
        </div>
    )
}



    export default Navbar;