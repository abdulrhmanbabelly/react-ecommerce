import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Checkbox, Grid, TextField, FormControlLabel } from '@mui/material';
import { Container, Typography, Box, Link, CssBaseline, Avatar } from '@mui/material';
import { useMutation } from '@apollo/client';
import { LOGGED_IN, SIGN_IN } from '../gql';
import client from '../config/apolloClient';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let SignIn = () => {

  let [signIn] = useMutation(SIGN_IN);

    let handleSubmit = (e) => {

        e.preventDefault();

        signIn({
          variables : {
            input : {
              username : document.getElementById('username').value,
              password : document.getElementById('password').value  
            }
          }
        }).then((data) => {
          client.writeQuery({
            query : LOGGED_IN,
            data : {
              loggedIn : data.data.signIn.token ? true : false
            }
          });
          localStorage.setItem('token', data.data.signIn.token);
          if (location.pathname === '/signIn') {
            location.href = '/';
          }
        });



    }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username Address"
              name="Username"
              autoComplete="Username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}


export default SignIn;