import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Shared/Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div style={{ marginTop: '20px' }} className="container">
            <Typography sx={{ mb: 4 }} variant="h4">Products</Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map((product, index) => {
                            if (index < 6) {
                                return <Product key={product._id} product={product}>
                                    <Link to={`/purchase/${product._id}`} style={{ textDecoration: "none" }}>
                                        <Button variant="contained">Buy Now</Button>
                                    </Link>
                                </Product>
                            }
                            else {
                                return <></>
                            }
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default HomeProducts;