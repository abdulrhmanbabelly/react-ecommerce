import React from 'react';
import { Footer, CategorySlider } from '../Components';
import { useCategories } from '../hooks';
import { Grid } from '@mui/material';
import { useHomeStyles } from '../styles';
import Carousel from "nuka-carousel";

let Home = () => {

  let { categories } = useCategories();
  let classes = useHomeStyles();

  return (
    <>
      <Grid item xs={12} className={classes.home}>
        <Carousel slidesToShow={1}>
          <div>
            <img src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span>WELCOME TO OUR STORE</span>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <span>Veniam incididunt aliquip est cupidatat. Aute officia esse exercitation consequat velit nisi dolore non nisi aute nisi deserunt minim elit. Qui nisi laboris et ipsum ut Lorem duis. Laboris duis culpa nulla quis sit laboris do duis labore ea. Cupidatat commodo magna anim quis esse. Qui irure consequat laboris labore Lorem nisi ullamco elit cillum.</span>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <span>fugiat.Dolor quis do esse qui tempor eu nulla. Non laborum dolor cupidatat dolore. Fugiat et eu irure nostrud nostrud id veniam magna mollit. Ut mollit ipsum deserunt nisi eu occaecat. Minim ad cillum dolore mollit commodo do deserunt aliqua elit sint deserunt dolor duis consectetur</span>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <span> ipsum occaecat fugiat. Laborum exercitation ad mollit elit. Deserunt laborum sunt irure esse sunt et ut adipisicing amet irure ad. Ea sit elit ipsum enim.</span>
          </div>
        </Carousel>
      </Grid>
      <Grid item xs={12} container justifyContent='center' p={2}>
        <h1>Catagories</h1>
      </Grid>
      <Grid item xs={12} p={2}>
        {categories.map((category) => <CategorySlider key={Math.random() * 10000} category={category} />)}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}


export default Home;