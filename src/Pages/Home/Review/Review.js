import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({ review }) => {
    const { name, rating, comment } = review;

    return (
        <Grid item xs={6} md={4}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: 'auto',
                    },
                }}
            >
                <Paper elevation={2} style={{ textAlign: 'center', padding: '25px' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, fontSize: 17, mb: 2 }} >"{comment}"</Typography>
                    <Typography variant="body" color="info.main" sx={{ fontWeight: 600, fontSize: 18 }}>{name}</Typography>
                    <Typography variant="body2" ><Rating value={rating} readOnly /></Typography>
                </Paper>
            </Box>
        </Grid>
    );
};

export default Review;