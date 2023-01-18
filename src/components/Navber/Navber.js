import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../Assets/Image/logo.png';
import { auth } from '../../Firebase/Firebase.init';
import './Navber.css';

const Navber = () => {
    const { pathname } = useLocation()
    const [user, setUser] = useState({});
    // console.log(user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav style={pathname.includes("blog") ? { display: "none" } : { display: "flex" }}>
            <NavLink to='/'>
                <div className='logo-container'>
                    <img src={Logo} alt="" />
                </div>
            </NavLink>
            <div className='link-container'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/vedios'>Vedios</NavLink>
                {user?.uid ? (<button className='logout-button' onClick={handleLogOut}>Logout</button>) : (<NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/login'>Login</NavLink>)}
            </div>
        </nav>
    );
};

export default Navber;