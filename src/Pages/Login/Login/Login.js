import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [userLoginInfo, setUserLoginInfo] = useState({});
    const handleLoginBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userLoginInfo };
        newInfo[type] = value;
        setUserLoginInfo(newInfo);
    }
    const handleLoginSubmit = e => {
        console.log(userLoginInfo);
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ my: 3 }}>Please Login</Typography>
                        <form onSubmit={handleLoginSubmit}>

                            <TextField id="email" label="Email" variant="standard"
                                name="email"
                                onBlur={handleLoginBlur}
                                type="email" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <TextField id="pass" label="Password" variant="standard"
                                onBlur={handleLoginBlur}
                                name="pass"
                                type="password" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <Button type="submit" variant="contained" sx={{ width: '75%' }}>Login</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/3Nq0WjF/removal-ai-tmp-6194e5ac9b75b.png" alt="removal-ai-tmp-6194e5ac9b75b" border="0" width="100%" />
                    </Grid>

                </Grid>

                <Link to="/register"> <Typography variant="body1" color="info.main">New User? Please Register</Typography></Link>
            </Container>
        </div>
    );
};

export default Login;