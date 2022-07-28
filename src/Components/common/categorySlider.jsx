import React, { useState } from "react";
import ProductView from "../Products/productView";
import { useCategoryProducts } from "../../hooks";
import { Grid } from "@mui/material";
import { createUseStyles } from "react-jss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "nuka-carousel";
import { useCategorySliderStyles } from "../../styles";

let CategorySlider = (props) => {

    let { category } = props;

    let { loading, categoryProducts } = useCategoryProducts(category);
    let [slidesToShow, setSlidesToShow] = useState(window.innerWidth <= 786 ? 1 : 3);
    let classes = useCategorySliderStyles();

    window.addEventListener(
        'resize',
        () => {

            if (slidesToShow === 3 && window.innerWidth <= 786) setSlidesToShow(1);
            if (slidesToShow === 1 && window.innerWidth >= 786) setSlidesToShow(3)
    
        }
    ) 

    if (loading) return <h2 className="text-info">loading...</h2>;

    return (
    <>
    <h2 className="text-center p-2">{category}</h2>
    <Grid className={`border ${classes.categorySlider} categorySlider`}>
        <Carousel slidesToShow={slidesToShow}> 
                {
                    categoryProducts.map((product) =>
                    <ProductView product={product} sm={12} md={12}/>)
                }
        </Carousel>
    </Grid>
    </>
    )
};

export default CategorySlider;