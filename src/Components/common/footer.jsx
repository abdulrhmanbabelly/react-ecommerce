import React from "react";
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub} from '@mui/icons-material';
import { Button, Grid, IconButton, Link, List, ListItem, TextField, useTheme } from "@mui/material";
import { useFooterStyles } from "../../styles";

let Footer = () => {
  let theme = useTheme();
  let classes = useFooterStyles(theme);
    return (
      <footer className={classes.footer}>
      <Grid container p={4} bgcolor='inherit'>
        <Grid item xs={12}>
          <Grid container justifyContent='center' p={2}>
            <IconButton color='inherit'>
              <Facebook />
            </IconButton>

            <IconButton  color='inherit'>
              <Twitter />
            </IconButton>

            <IconButton color='inherit'>
              <Google />
            </IconButton>

            <IconButton color='inherit'>
              <Instagram />
            </IconButton>

            <IconButton color='inherit'>
              <LinkedIn />
            </IconButton>

            <IconButton color='inherit'>
              <GitHub />
            </IconButton>
          </Grid>
        </Grid>
      
        <Grid item xs={12}>
          <form>
            <Grid container spacing={3} mb={2} p={2} justifyContent='center' alignItems='center' >
              <Grid item>
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Grid>

              <Grid item md={5}>
                <TextField contrast type='email' label='Email address' fullWidth/>
              </Grid>
              <Grid item>
                <Button variant="contained" color="success">
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item xs={12} justifyContent='center' mb={4}>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
              voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
              sequi voluptate quas.
            </p>
          </section>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={3} justifyContent='center'>
            <Grid item container md={3} sm={6} justifyContent='center'>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/store' className='text-white'>
                    Store
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/carts' className='text-white'>
                    cart
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/editAccount' className='text-white'>
                    edit account
                  </Link>
                </ListItem>
              </List>
            </Grid>

            <Grid item container md={3} sm={6} justifyContent='center'>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='/signIn' className='text-white'>
                    sign-in
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/signUp' className='text-white'>
                    sign-up
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/adminDashboard' className='text-white'>
                    admin Dashboard
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/' className='text-white'>
                    E-commerce
                  </Link>
                </ListItem>
              </List>
            </Grid>

            <Grid item container md={3} sm={6} justifyContent='center'>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    Facebook
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    Instagram
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    LinkedIn
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                     Codepen
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item container md={3} sm={6} justifyContent='center'>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    CodeSandBox
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    GeeksForGeeks
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    Twitter
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!' className='text-white'>
                    Telegram
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>

      <Grid container p={3} justifyContent='center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <Link color="inherit" className='text-white' href='https://mdbootstrap.com/'>
          abd alrhman babelly
        </Link>
      </Grid>
    </footer>
       )
}

export default Footer;