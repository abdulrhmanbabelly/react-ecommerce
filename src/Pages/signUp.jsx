import { Button, FormGroup, Grid, TextField } from '@mui/material';
import React from 'react';
import { addUser } from '../api/user';
import { useSignUpStyles } from '../styles';

let SignUp = () => {

    let classes = useSignUpStyles();

    let handleSubmit = async (e) => {
        e.preventDefault();
        let data = await addUser(
            document.getElementById('email').value,
            document.getElementById('username').value,
            document.getElementById('firstname').value,
            document.getElementById('lastname').value,
            document.getElementById('city').value,
            document.getElementById('street').value,
            document.getElementById('number').value,
            document.getElementById('zipcode').value,
            document.getElementById('lat').value,
            document.getElementById('long').value,
            document.getElementById('phone').value,
            document.getElementById('password').value,
        );
        alert(data.id);
        };

    return (
    <form className={classes.signUp}>
        <h3 className='text-center'>Sign-up</h3>
        <h5>Personal information</h5>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="email" placeholder="Enter email" id='email' variant="outlined" label="Email"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Username"  id='username' variant="outlined" label="Username"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Firstname" id='firstname' variant="outlined" label="Firstname"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Lastname" id='lastname' variant="outlined" label="Lastname"/>
                </FormGroup>
            </Grid>
        </Grid>
        <h5>Address</h5>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="text" placeholder="Enter City" className="mb-3" id='city' variant="outlined" label="City"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="text" placeholder="Enter Street" className="mb-3" id='street' variant="outlined" label="Street"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="number" placeholder="Enter Number" className="mb-3" id='number' variant="outlined" label="Number"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="text" placeholder="Enter Zipcode" className="mb-3" id='zipcode' variant="outlined" label="Zipcode"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="number" placeholder="Enter Lat" className="mb-3" id='lat' variant="outlined" label="Lat"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="number" placeholder="Enter Long" className="mb-3" id='long' variant="outlined" label="Long"/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Phone" id='phone' variant="outlined" label="Phone"/>
                </FormGroup>
            </Grid>          
        </Grid>
        <h5>Password</h5>
        <FormGroup className="mb-3">
            <TextField type="password" placeholder="Enter Password" id='password' variant="outlined" label="Password"/>
        </FormGroup>
        <Button type="submit" onClick={handleSubmit}>
            Submit
            </Button>
        </form>
   )
}

export default SignUp;