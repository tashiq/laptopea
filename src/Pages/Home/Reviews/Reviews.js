import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://floating-mountain-42780.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container">
            <Typography sx={{ mb: 4 }} variant="h4">People Says</Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;