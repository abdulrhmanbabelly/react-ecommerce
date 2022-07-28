import { Button, CircularProgress, FormGroup, Grid, TextField } from '@mui/material';
import React from 'react';
import { deleteUser, updateUser } from '../api/user';
import { useUser } from '../hooks';
import { useSignUpStyles } from '../styles';

let Settings = () => {

    let { loading, user } = useUser(1);
    let classes = useSignUpStyles();

    if (loading) return <CircularProgress />
 
    let handleUpdate = async (e) => {
        e.preventDefault();
        let data = await updateUser(
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
            1
        );
        alert(data.id);
    };

    let handleDelete = async () => {
        let res = await deleteUser(1);
        alert(res.id)
    };

    return (
    <form className={classes.signUp}>
        <h3 className='text-center'>Edit-account</h3>
        <h5>Personal information</h5>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="email" placeholder="Enter email" id='email' variant="outlined" label="Email" defaultValue={user.email}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Username"  id='username' variant="outlined" label="Username" defaultValue={user.username}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Firstname" id='firstname' variant="outlined" label="Firstname" defaultValue={user.name.firstname}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Lastname" id='lastname' variant="outlined" label="Lastname" defaultValue={user.name.lastname}/>
                </FormGroup>
            </Grid>
        </Grid>
        <h5>Address</h5>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="text" placeholder="Enter City" className="mb-3" id='city' variant="outlined" label="City" defaultValue={user.address.city}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="text" placeholder="Enter Street" className="mb-3" id='street' variant="outlined" label="Street" defaultValue={user.address.street}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="number" placeholder="Enter Number" className="mb-3" id='number' variant="outlined" label="Number" defaultValue={user.address.number}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="text" placeholder="Enter Zipcode" className="mb-3" id='zipcode' variant="outlined" label="Zipcode" defaultValue={user.address.zipcode}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="number" placeholder="Enter Lat" className="mb-3" id='lat' variant="outlined" label="Lat" defaultValue={user.address.geolocation.lat}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup>
                    <TextField type="number" placeholder="Enter Long" className="mb-3" id='long' variant="outlined" label="Long" defaultValue={user.address.geolocation.long}/>
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormGroup className="mb-3">
                    <TextField type="text" placeholder="Enter Phone" id='phone' variant="outlined" label="Phone" defaultValue={user.phone}/>
                </FormGroup>
            </Grid>          
        </Grid>
        <h5>Password</h5>
        <FormGroup className="mb-3">
            <TextField type="password" placeholder="Enter Password" id='password' variant="outlined" label="Password" defaultValue={user.password}/>
        </FormGroup>
        <Button type="submit" onClick={handleUpdate}>
            update
        </Button>
        <Button type="submit" onClick={handleDelete}>
            delete
        </Button>
    </form>
    )
}

export default Settings;