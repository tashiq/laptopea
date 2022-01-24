import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const [pause, setPause] = useState(false);
    let active = 1;
    const reviewBox = document.getElementsByClassName('review-box');

    useEffect(() => {
        fetch('https://floating-mountain-42780.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const HandleRight = (e) => {
        active--;
        if (active <= 2 - reviewBox.length) active = 2 - reviewBox.length;
        for (let i = 0; i < reviewBox.length; i++) {
            reviewBox[i].style.transform = `translateX(${310 * active}px)`
        }

    }
    const handleLeft = (e) => {
        active++;
        if (active >= 1) active = 1;
        for (let i = 0; i < reviewBox.length; i++) {
            reviewBox[i].style.transform = `translateX(${310 * active}px)`
        }
    }

    return (
        <Container>
            <Typography sx={{ mb: 4 }} variant="h4">People Says</Typography>
            <div className="review">
                <div className="review-container">
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
                {
                    reviews &&
                    <button className="left" onClick={handleLeft}>
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" stroke="green" stroke-width="0" fill="black" />

                            <path d="M70 10 L70 90 L20 50 Z" fill="white" />
                        </svg>
                    </button>
                }{reviews &&
                    <button className="right" onClick={HandleRight}>  <svg width="100" height="100">
                        <circle cx="50" cy="50" r="50" stroke="green" stroke-width="0" fill="black" />

                        <path d="M30 10 L30 90 L75 50 Z" fill="white" />
                    </svg>
                    </button>
                }
            </div>
        </Container >
    );
};

export default Reviews;