import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/appointment">Make Appointment</Link></li>
                <li><Link to="/buy">Buy Property</Link></li>
                <li><Link to="/rent">Rent Property</Link></li>
                <li><Link to="/properties">Property Listing</Link></li>
                <li><Link to="/signin">Sign In</Link></li> 
            </ul>
        </nav>
    );
};

export default NavBar;
