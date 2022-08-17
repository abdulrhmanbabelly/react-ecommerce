import React from "react";
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub} from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Link, List, ListItem, TextField, useTheme } from "@mui/material";
import { footerStyles } from "../../styles";

let Footer = () => {
  let theme = useTheme();
    return (
    <footer>
      <Box sx={footerStyles(theme)}>
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
                <TextField type='email' label='Email address' fullWidth/>
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
            <Grid item md={3} sm={6} xs={12}>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='/'>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/store'>
                    Store
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/carts'>
                    cart
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/editAccount'>
                    edit account
                  </Link>
                </ListItem>
              </List>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='/signIn'>
                    sign-in
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/signUp'>
                    sign-up
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/adminDashboard'>
                    admin Dashboard
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='/'>
                    E-commerce
                  </Link>
                </ListItem>
              </List>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    Facebook
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    Instagram
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    LinkedIn
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!'>
                     Codepen
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <List className='list-unstyled mb-0'>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    CodeSandBox
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    GeeksForGeeks
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    Twitter
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="inherit" href='#!'>
                    Telegram
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>

      <Grid container p={3} justifyContent='center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Grid item>
          © 2022 Copyright:abd alrhman babelly
        </Grid>
      </Grid>
    </Box>
  </footer>
       )
}

export default Footer;