import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth'
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleAdminBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        fetch(`https://floating-mountain-42780.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(isAdmin => {
                // console.log(isAdmin.role);
                // console.log(isAdmin);
                if (isAdmin.role !== 'admin') {
                    navigate('/')
                }
                else {
                    fetch(`https://floating-mountain-42780.herokuapp.com/admin?email=${email}`, {
                        method: 'PUT',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (!data.modifiedCount) {
                                alert('No Email Found')
                            }
                            navigate('/dashboard')

                        })
                }
            });



        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="email" name="email" label="Email" variant="standard" required onBlur={handleAdminBlur} />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;