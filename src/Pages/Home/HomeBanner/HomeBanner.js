import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const appbarStyle = {
    backgroundColor: '#0f0f0f',
    // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZKLohwRpVPv-_wxYrWLT7bVz7Fv5Md2S1A&usqp=CAU')`,
    backgroundBlendMode: '',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    boxSizing: 'border-box',
    textAlign: 'center',
    color: 'white',
    marginTop: '1px'
}
//need change
const HomeBanner = () => {

    return (
        <Grid container spacing={2} style={appbarStyle}>
            <Grid item xs={12} md={5}>
                <Typography variant="h4" sx={{ mb: 3 }}>Lenovo Yoga Slim 7, Slim Laptop, 13.3"QHD Display, Intel Core i5-1135G7, 16GB RAM, 512GB SSD,</Typography>
                <Typography paragraph color="GrayText">The Yoga Slim 7i (13") delivers incredible QHD visuals optimized with Dolby Vision, Intel Iris Xe graphics and 91% screen ratio. Combined with the powerful sound of Dolby Atmos-optimized Harman Kardon speakers.</Typography>
                <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{
                    mt: 3, backgroundColor: "#ff1a1a", boxShadow: '1px 1px gray', textDecoration: 'none'
                }}>Explore</Button></Link>
            </Grid>
            <Grid item xs={12} md={7}>
                <img src="https://i.ibb.co/j8y3B3f/cfaulkner-20210326-4491-0006-removebg-preview.png" alt="cfaulkner-20210326-4491-0006-removebg-preview" border="0" width
                    ="100%" />
            </Grid>
        </Grid>
    );
};

export default HomeBanner;