import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



const Navbar = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <h2>myContacts</h2>
                </div>

                <div className='button-container'>
                    <div className="nav-button">
                        <Link to="/signup" className="nav-btn-link" >Sign Up</Link>
                    </div>

                    <div className="nav-button">
                        <Link to="/signin" className="nav-btn-link" >Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



















