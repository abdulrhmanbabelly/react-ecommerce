import React from "react";
import { useTheme } from "react-jss";
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, Phone, Print } from '@mui/icons-material';
import { Divider, Grid } from "@mui/material";
import { useFooterStyles } from "../../styles";

let Footer = () => {
  
  let classes = useFooterStyles();

    return (
      <Grid container>
        <footer className={`${classes.footer} text-center text-white`}>
          <Grid container>
            <section className="mt-5 w-100 p-md-5">
              <Grid container className='justify-content-center' spacing={2}>
                <Grid item md={2} xs={12} className='p-2'>
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">About us</a>
                  </h6>
                </Grid>
      
                <Grid item md={2} xs={12} className='p-2'>
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Products</a>
                  </h6>
                </Grid>
      
                <Grid item md={2} xs={12} className='p-2'>
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Awards</a>
                  </h6>
                </Grid>
      
                <Grid item md={2} xs={12} className='p-2'>
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Help</a>
                  </h6>
                </Grid>
      
                <Grid item md={2} xs={12} className='p-2'>
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Contact</a>
                  </h6>
                </Grid>
              </Grid>
            </section>
      
            <Divider />
      
            <section className="mb-5 w-100 p-2">
              <Grid container className="justify-content-center">
                <Grid item lg={8} className="text-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                    distinctio earum repellat quaerat voluptatibus placeat nam,
                    commodi optio pariatur est quia magnam eum harum corrupti
                    dicta, aliquam sequi voluptate quas.
                  </p>
                </Grid>
              </Grid>
            </section>
      
            <section className="text-center mb-5 justify-content-center w-100">
              <a href="" className="text-white me-4">
                <Facebook />
              </a>
              <a href="" className="text-white me-4">
                <Twitter />
              </a>
              <a href="" className="text-white me-4">
                <Google />
              </a>
              <a href="" className="text-white me-4">
                <Instagram />
              </a>
              <a href="" className="text-white me-4">
                <LinkedIn />
              </a>
              <a href="" className="text-white me-4">
                <GitHub />
              </a>
            </section>
          </Grid>
      
          <div
               className="text-center p-3"
               style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
               >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/"
               >MDBootstrap.com</a
              >
          </div>
        </footer>
      </Grid>
       )
}

export default Footer;