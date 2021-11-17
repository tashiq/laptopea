import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" id="app-bar">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Laptopea
                    </Typography>
                    <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Products</Button>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;