import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Order from '../order/Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <Grid container spacing={2}>
                {
                    orders.map(order => < Order key={order._id} orderedBy={order.orderBy} email={order.email} product={order.product.name} _id={order._id} shipped={order.shipped} ></Order>)
                    // 
                }
            </Grid>
        </div>
    );
};

export default ManageOrders;