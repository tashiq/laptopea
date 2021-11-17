import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { _id, name, price, rating, img, description } = product;
    return (
        <div>

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
                        <Link to={`/purchase/${_id}`} style={{ textDecoration: "none" }}>
                            <Button variant="contained">Buy Now</Button>
                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Product;