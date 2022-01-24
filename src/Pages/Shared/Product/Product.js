import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating } from '@mui/material';
// import { Link } from 'react-router-dom';
const Product = ({ product, children, it }) => {
    const { name, price, rating, img, description } = product;
    const handleResize = () => {

    }
    window.addEventListener('resize', handleResize);
    return (
        <Grid items xs={12} sm={6} md={4} style={{ position: 'relative' }} className="product-card" data-aos="fade-up">
            <Card sx={{ minWidth: 250, m: 1 }} id="product-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={name}
                    />
                    <CardContent className="card-body">
                        <Typography gutterBottom variant="h5" component="div" className="card-title">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='card-description'>
                            {description}
                        </Typography>
                        <Typography variant="h6" color="text.primary" className="product-price">
                            Price: {price} <br /></Typography>
                        <Typography component="legend" className='rating'>
                            <Rating name="rating" value={rating} readOnly />({rating})
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>

            <div className='cover-product-card'>{children}</div>
        </Grid>
    );
};

export default Product;