import { Button, Divider, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useNavigate } from 'react-router';

const DashReview = () => {
    const { user } = useAuth();
    const [ratingValue, setRatingValue] = useState(0);
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const getComment = e => {
        setComment(e.target.value)
    }
    const handleReviewSubmit = e => {
        const name = user.displayName;
        const rating = ratingValue;
        const toStore = { name, rating, comment };


        fetch('https://floating-mountain-42780.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toStore),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review is posted');
                    navigate('/dashboard')
                }
                else {
                    alert(data)
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h4">Please Write Your Review</Typography>
            <Box>
                <Divider />
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Your Comment"
                    name="comment"
                    onBlur={getComment}
                    style={{ width: '75%', height: '120px', fontSize: 17, padding: '12px 10px' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', padding: '12px 0' }}>
                    <Typography variant="legend" sx={{ pe: 3 }}>Your experiance: </Typography>
                    <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }}
                    />
                </div>
                <Button variant="contained" style={{ width: '90px', display: 'block' }} onClick={handleReviewSubmit}>Submit</Button>
            </Box>
        </div>
    );
};

export default DashReview;