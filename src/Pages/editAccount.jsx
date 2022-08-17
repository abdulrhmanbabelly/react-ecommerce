import { useMutation } from '@apollo/client';
import { Box, Button, FormGroup, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Loading, Popup } from '../Components';
import { DELETE_USER, UPDATE_USER } from '../gql';
import { useUser } from '../hooks';
import { editAccountStyles } from '../styles';

let EditAccount = () => {

    let { loading, error, user } = useUser(1);
    let [updateUser] = useMutation(UPDATE_USER);
    let [deleteUser] = useMutation(DELETE_USER);
    let [popup, setPopup] = useState(null);

    if (loading) return <Loading width={100 } height={100}/>
    if (error) return <h2>error</h2>

    let handleUpdate = async (e) => {
        e.preventDefault();
        await updateUser(
            {
                variables :{
                    input : {
                       email : document.getElementById('email').value,
                       username:  document.getElementById('username').value,
                       name : {
                        firstname: document.getElementById('firstname').value,
                        lastname : document.getElementById('lastname').value,
                       },
                       address : {
                        city: document.getElementById('city').value,
                        street: document.getElementById('street').value,
                        number: document.getElementById('number').value,
                        zipcode: document.getElementById('zipcode').value,
                        geolocation : {
                            lat: document.getElementById('lat').value,
                            long: document.getElementById('long').value,
                        }
                       },
                       phone: document.getElementById('phone').value,
                       password: document.getElementById('password').value,
                    },
                    id : 1
                }
            }
        );
        setPopup(<Popup content={`updated your account`} type="success" setPopup={setPopup}/>)
    };

    let handleDelete = async (e) => {
        e.preventDefault()
        await deleteUser(
            {
                variables : {
                    id : 1
                }
            }
         );
        setPopup(<Popup content={`deleted your account`} type="error" setPopup={setPopup} then={() => {
            location.href = '/signIn'
        }}/>)
    };

    return (
    <Box sx={editAccountStyles}>
        <form>
            <h2 className='text-center'>Edit-account</h2>
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
            {popup}
        </form>
    </Box>
    )
}

export default EditAccount;