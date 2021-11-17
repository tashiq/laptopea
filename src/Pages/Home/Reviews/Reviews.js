import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import Review from '../Review/Review';


const sample = [
    {
        name: 'Abul',
        rating: 4,
        comment: 'I suspect that the problem lies in the fact that you are calling your state setter immediately inside the function component body, which forces React to re-invoke your function again, with the same props, which ends up calling the state setter again, which triggers React to call your function again.... and so on.'
    }
]
const Reviews = () => {
    const [reviews, setReviews] = useState(sample)

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