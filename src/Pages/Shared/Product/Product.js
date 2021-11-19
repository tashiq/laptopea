import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
const Product = ({ product, children }) => {
    const { _id, name, price, rating, img, description } = product;
    return (
        <Grid items xs={12} sm={6} md={4}>

            <Card sx={{ maxWidth: 345, m: 1 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            Price: {price} <br /></Typography>
                        <Typography component="legend">
                            <Rating name="rating" value={rating} readOnly />({rating})
                        </Typography>
                        {
                            children
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Product;