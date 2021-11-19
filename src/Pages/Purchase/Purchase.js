import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth'
import Navigation from '../Shared/Navigation/Navigation';
const Purchase = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://floating-mountain-42780.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const preData = { orderBy: displayName, email };
    // console.log(preData);
    const [orderInfo, setOrderInfo] = useState(preData);


    const handleBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[name] = value;
        setOrderInfo(newInfo)
    }
    const handlePlaceorderSubmit = e => {
        orderInfo['product'] = product;
        fetch('https://floating-mountain-42780.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    alert('Order Placed')
                }
                else {
                    alert('An error occured');
                }
                navigate('/products')
            })
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ py: 3 }}>
                <form onSubmit={handlePlaceorderSubmit}>
                    <Typography variant="h4" sx={{ pb: 3 }}>Please Provide required information</Typography>
                    <TextField id="name" label="Name" variant="standard" defaultValue={displayName}
                        name="name" sx={{ width: '75%', display: '', mb: 3 }} disabled />
                    <TextField id="name" label="Email" variant="standard" defaultValue={email}
                        name="name" sx={{ width: '75%', display: '', mb: 3 }} disabled />
                    <div style={{ width: '75%', display: '', mb: 3, color: 'grey', borderBottom: '1px solid', padding: '10px 0 12px 0', boxSizing: 'border-box' }} >{product.name}</div>

                    <TextField id="phone" label="Phone Number" variant="standard"
                        name="phone" sx={{ width: '75%', display: '', mb: 3 }} required />
                    <TextField id="address" label="Address" variant="standard"
                        name="address" sx={{ width: '75%', display: '', mb: 3 }} onBlur={handleBlur} />
                    <Button variant="contained" sx={{ width: '75%', display: '', mb: 3 }} type="submit">Place Order</Button>
                </form>
            </Container>
        </div>
    );
};

export default Purchase;