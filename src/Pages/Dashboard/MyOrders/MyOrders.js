import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Product from '../../Shared/Product/Product';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    useEffect(
        () => {

            fetch(`http://localhost:4000/orders/${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }, [user]);
    return (
        <Container sx={{ my: 2 }}>
            <Typography variant="h4">My Orders</Typography>
            <Grid container spacing={1} xs={6} md={12} sx={{ mt: 3 }}>
                {
                    myOrders.map((order) => <Product key={order._id} product={order.product}>
                    </Product>)
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;