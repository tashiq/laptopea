import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Order = ({ orderedBy, email, product, _id, shipped }) => {
    const [isShipped, setIsShipped] = useState(shipped)
    const handleShipped = e => {
        fetch(`http://localhost:4000/orders/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setIsShipped(true)
                }
            })
    }
    return (
        <Grid items xs={12} md={6}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 'auto',
                    },
                }}

            >
                <Paper elevation={3} style={{ display: 'flex', alignItems: 'space-evenly', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}>
                    <Typography variant="h5">Ordered By: {orderedBy}</Typography>
                    <Typography variant="h5">Email : {email}</Typography>
                    <Typography variant="h5">Product : {product}</Typography>
                    <Typography variant="h5">Shipped :{isShipped ? 'Shipped' : 'Pending'} </Typography>
                    <Button variant="contained" onClick={handleShipped}>Process</Button>
                </Paper>
            </Box>
        </Grid>
    );
};

export default Order;