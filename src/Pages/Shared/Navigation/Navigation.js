import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navigation.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import laptop from '../../../images/laptop.png'
// import { width } from '@mui/system';
const Navigation = () => {
    const { user, logOut } = useAuth();
    const [navbar, setNavbar] = useState(true);
    const [res, setRes] = useState(window.innerWidth >= 768 ? true : false);
    const [vis, setVis] = useState(true)
    const listenScroll = () => {
        if (window.scrollY <= 50) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    const listenResize = () => {
        if (window.innerWidth >= 768) {
            setRes(true)
        }
        else {
            setRes(false)
        }
    }
    window.addEventListener('scroll', listenScroll)
    window.addEventListener('resize', listenResize)
    const handleHumberger = () => {
        setVis(!vis)
    }
    return (
        // <Box sx={{ flexGrow: 1 }} className='header'>
        <AppBar position="relative" id="app-bar">
            <Toolbar className={navbar && res ? 'nav-big' : 'nav'}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'white', width: '200px' }} className={navbar && res ? 'logo-big' : 'logo'}>
                    <div>
                        <img src={laptop} alt="" className={navbar && res ? 'laptop-logo-big' : 'laptop-logo'} />
                    </div>
                    <Button color="inherit" sx={{ fontSize: 18 }}>Laptopea</Button>
                </Link>
                {!res &&
                    <Button style={{ color: 'white' }} onClick={handleHumberger}><i className="fas fa-hamburger"></i></Button>
                }
                <div className={!res ? vis ? 'res-nav d-none' : 'res-nav' : navbar ? 'nav-items-big' : 'nav-items'}>

                    <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Products</Button>
                    </Link>
                    {
                        user.email ?
                            <>
                                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" sx={{ color: 'white' }} onClick={logOut}>Logout ({user.displayName})</Button>
                                </Link>
                            </>
                            : <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Login</Button>
                            </Link>
                    }
                </div>
            </Toolbar>
        </AppBar>
        // </Box>
    );
};

export default Navigation;