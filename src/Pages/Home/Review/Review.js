import { Button, Paper, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

const Review = ({ review }) => {
    const { name, rating, comment } = review;
    let small = comment.slice(0, 330);
    const [short, setShort] = useState(small);
    const [toggle, setToggle] = useState(true);

    const btn = (<Button onClick={() => {
        setToggle(!toggle);
        setShort(toggle ? comment : small);
    }}>Read {toggle ? 'more' : 'less'}</Button>);
    console.log(comment.length);
    return (
        <Paper elevation={2} style={{ textAlign: 'center', padding: '25px', width: '330px' }} className='review-box'>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, fontSize: 17, mb: 2 }} className='review-text'>"{comment.length > 330 ? short : comment}" {comment.length > 330 ? btn : ''}</Typography>

            <Typography variant="body" color="info.main" sx={{ fontWeight: 600, fontSize: 18 }}>{name}</Typography>
            <Typography variant="body2" ><Rating value={rating} readOnly /></Typography>
        </Paper>
    );
};

export default Review;