import React from 'react';
import { Grid, List, ListItem, Typography } from '@mui/material';
const footerStyle = {
    padding: '20px 30px',
    backgroundColor: '#212d38',
    color: 'white'
}
const Footer = () => {
    return (
        <div style={footerStyle}>
            <Grid container spacing={2} sx={{ my: 0 }}>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5">About Us</Typography>
                    <List>
                        <ListItem>Contact HP</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Investor relations</ListItem>
                        <ListItem>Press center</ListItem>
                        <ListItem>The Garage</ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5">Ways to Buy</Typography>
                    <List>
                        <ListItem>
                            Shop Online
                        </ListItem>
                        <ListItem>Call an HP rep</ListItem>
                        <ListItem>Find reseller</ListItem>
                        <ListItem>Enterprise</ListItem>
                        <ListItem>Public Sector</ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5">Support</Typography>
                    <List>
                        <ListItem>
                            Download
                        </ListItem>
                        <ListItem>Support and Troubleshooting</ListItem>
                        <ListItem>Authorized Service</ListItem>
                        <ListItem>Fraud Alert</ListItem>
                        <ListItem>Secuirity Center</ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5">Stay Connected</Typography>
                    <List>
                        <ListItem>
                            FaceBook
                        </ListItem>
                        <ListItem>Whatsapp</ListItem>
                        <ListItem>Mail</ListItem>
                    </List>
                </Grid>
            </Grid>
            <Typography variant="body1">Copyright &copy;2021 fahim foisal</Typography>
        </div>
    );
};

export default Footer;