import React from 'react';
import Slider from 'react-slick';
import CategorySlider from '../Components/common/categorySlider';
import Footer from '../Components/common/footer';
import { useCategories } from '../hooks';
import { Grid } from '@mui/material';
import { useHomeStyles } from '../styles';
import Carousel from "nuka-carousel";

let Home = () => {

  let categories = useCategories();
  let classes = useHomeStyles();

  return (
    <>
      <Grid item xs={12} className={classes.home}>
        <Carousel slidesToShow={1}>
          <div>
            <img src="../images/1.jpg" />
            <span>WELCOME TO OUR STORE</span>
          </div>
          <div>
            <img src="../images/2.jpg" />
            <span>Veniam incididunt aliquip est cupidatat. Aute officia esse exercitation consequat velit nisi dolore non nisi aute nisi deserunt minim elit. Qui nisi laboris et ipsum ut Lorem duis. Laboris duis culpa nulla quis sit laboris do duis labore ea. Cupidatat commodo magna anim quis esse. Qui irure consequat laboris labore Lorem nisi ullamco elit cillum.</span>
          </div>
          <div>
            <img src="../images/3.jpg" />
            <span>fugiat.Dolor quis do esse qui tempor eu nulla. Non laborum dolor cupidatat dolore. Fugiat et eu irure nostrud nostrud id veniam magna mollit. Ut mollit ipsum deserunt nisi eu occaecat. Minim ad cillum dolore mollit commodo do deserunt aliqua elit sint deserunt dolor duis consectetur</span>
          </div>
          <div>
            <img src="../images/4.jpg" />
            <span> ipsum occaecat fugiat. Laborum exercitation ad mollit elit. Deserunt laborum sunt irure esse sunt et ut adipisicing amet irure ad. Ea sit elit ipsum enim.</span>
          </div>
          <div>
            <img src="../images/6.jpg" />
            <span> tempor.Dolor quis do esse qui tempor eu nul consequat nisi laborum ex magna nulla voluptate </span>
          </div>
          <div>
            <img src="../images/8.jpg" />
            <span>Id dolore laborum deserunt veniam dolore id tempor consequat nisi laborum ex magna nulla volupta</span>
          </div>
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <h1 className='text-center p-3 text-decoration-underline'>Catagories</h1>
      </Grid>
      <Grid item xs={12}>
        {categories.map((category) => <CategorySlider key={Math.random() * 10000} category={category} />)}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}


export default Home;