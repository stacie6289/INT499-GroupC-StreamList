import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/search">Search</Link>
                <span> | </span>
                <Link to="/watchlist">Watchlist</Link>
                <span> | </span>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar;