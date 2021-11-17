import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth'
import Navigation from '../Shared/Navigation/Navigation';
const Purchase = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ py: 3 }}>
                <Typography variant="h4" sx={{ pb: 3 }}>Please Provide required information</Typography>
                <TextField id="name" label="Name" variant="standard" defaultValue={displayName}
                    name="name" sx={{ width: '75%', display: '', mb: 3 }} disabled />
                <TextField id="name" label="Email" variant="standard" defaultValue={email}
                    name="name" sx={{ width: '75%', display: '', mb: 3 }} disabled />
                <div style={{ width: '75%', display: '', mb: 3, color: 'grey', borderBottom: '1px solid', padding: '10px 0 12px 0', boxSizing: 'border-box' }} >{product.name}</div>

                <TextField id="phone" label="Phone Number" variant="standard"
                    name="phone" sx={{ width: '75%', display: '', mb: 3 }} required />
                <TextField id="address" label="Address" variant="standard"
                    name="address" sx={{ width: '75%', display: '', mb: 3 }} />
                <Button variant="contained" sx={{ width: '75%', display: '', mb: 3 }}>Place Order</Button>
            </Container>
        </div>
    );
};

export default Purchase;