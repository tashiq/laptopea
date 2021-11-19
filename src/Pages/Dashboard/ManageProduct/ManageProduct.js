import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://floating-mountain-42780.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleManageSubmit = (productId) => {
        const ans = window.confirm('Do you wanna delete?');
        if (ans) {
            fetch(`https://floating-mountain-42780.herokuapp.com/products/${productId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deleteCount) {

                        const updateProduct = products.filter(product => product._id !== productId)
                        setProducts(updateProduct)
                    }
                })
        }

    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mx: 'auto' }}>
                {
                    products.map(product => <Product key={product._id} product={product}><Button onClick={() => { handleManageSubmit(product._id) }} variant="contained" color="error">Delete
                    </Button></Product>)
                }
            </Grid>
        </Container>
    );
};

export default ManageProduct;