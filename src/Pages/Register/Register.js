import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [userRegInfo, setUserRegInfo] = useState({});
    const { registerUser, error } = useAuth();
    const navigate = useNavigate();
    const handleLoginBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userRegInfo };
        newInfo[type] = value;
        setUserRegInfo(newInfo);
    }
    const handleLoginSubmit = e => {
        registerUser(userRegInfo.email, userRegInfo.pass, userRegInfo.name, navigate, userRegInfo.phone);
        if (!error) {
            // console.log(user);
        }
        else {
            alert(error)
        }
        // console.log(userRegInfo);
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ my: 3 }}>Please Register</Typography>
                        <form onSubmit={handleLoginSubmit}>

                            <TextField id="email" label="Your Name" variant="standard"
                                name="name"
                                onBlur={handleLoginBlur}
                                type="text" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <TextField id="Phone" label="Phone" variant="standard"
                                name="phone"
                                onBlur={handleLoginBlur}
                                type="text" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <TextField id="email" label="Email" variant="standard"
                                name="email"
                                onBlur={handleLoginBlur}
                                type="email" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <TextField id="pass" label="Password" variant="standard"
                                onBlur={handleLoginBlur}
                                name="pass"
                                type="password" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <TextField id="pass" label="Retype Password" variant="standard"
                                onBlur={handleLoginBlur}
                                name="pass2"
                                type="password" sx={{ width: '75%', display: ' ', mb: 3 }} />
                            <Button type="submit" variant="contained" sx={{ width: '75%' }}>Register</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/3Nq0WjF/removal-ai-tmp-6194e5ac9b75b.png" alt="removal-ai-tmp-6194e5ac9b75b" border="0" width="100%" />
                    </Grid>

                </Grid>
                <Link to="/login"> <Typography variant="body1" color="info.main" sx={{ mt: 3 }}>Already have an account? Please Login</Typography></Link>
            </Container>
        </div>
    );
};

export default Register;