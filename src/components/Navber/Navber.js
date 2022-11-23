import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Image/logo.png';
import './Navber.css';

const Navber = () => {
    return (
        <nav>
            <NavLink to='/'>
                <div className='logo-container'>
                    <img src={Logo} alt="" />
                </div>
            </NavLink>
            <div className='link-container'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/vedios'>Vedios</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/login'>Login</NavLink>
            </div>
        </nav>
    );
};

export default Navber;