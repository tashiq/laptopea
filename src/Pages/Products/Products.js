import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Shared/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div style={{ margin: '0 auto' }}>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ my: 4 }} variant="h4">Available Products</Typography>
                <Grid container spacing={2}>
                    {
                        products.map((product) => <Product key={product._id} product={product}>
                            <Link to={`/purchase/${product._id}`} style={{ textDecoration: "none" }}>
                                <Button variant="contained">Buy Now</Button>
                            </Link>
                        </Product>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Products;