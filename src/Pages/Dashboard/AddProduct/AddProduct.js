import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const navigate = useNavigate()
    const handleAddBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...addProduct };
        newData[name] = value;
        setAddProduct(newData);
    }
    const handleAddSubmit = e => {
        fetch("https://floating-mountain-42780.herokuapp.com/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId)
                    alert('A product is added')
                else {
                    alert('An error occured');
                }
                navigate('/dashboard');

            })

        e.preventDefault()
        e.target.reset();
    }
    return (
        <div>
            <Typography variant="h4">Add A product</Typography>
            <form onSubmit={handleAddSubmit}>
                <TextField id="address" label="Name of the product" variant="standard"
                    name="name" sx={{ width: '75%', display: '', mb: 3 }} onBlur={handleAddBlur} />
                <TextField id="img" label="Image url" variant="standard"
                    name="img" sx={{ width: '75%', display: '', mb: 3 }} onBlur={handleAddBlur} />
                <TextField id="description" label="Description" variant="standard"
                    name="description" sx={{ width: '75%', display: '', mb: 3 }} onBlur={handleAddBlur} />
                <TextField id="price" label="Price" variant="standard"
                    name="price" sx={{ width: '75%', display: '', mb: 3 }} onBlur={handleAddBlur} />
                <TextField id="rating" label="Rating" variant="standard"
                    name="rating" sx={{ width: '75%', display: '', mb: 3 }} onBlur={handleAddBlur} />
                <Button type="submit" variant="contained" sx={{ width: '75%', display: '', mb: 3 }}>Submit</Button>
            </form>
        </div>
    );
};

export default AddProduct;