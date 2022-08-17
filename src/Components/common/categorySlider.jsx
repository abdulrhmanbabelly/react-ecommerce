import React, { useState } from "react";
import { useCategoryProducts } from "../../hooks";
import { Grid } from "@mui/material";
import Carousel from "nuka-carousel";
import { categorySliderStyles } from "../../styles";
import { ProductViewVertical, Loading } from "../";


let CategorySlider = (props) => {

    let { category } = props;

    let { loading, categoryProducts, error } = useCategoryProducts(category);
    let [slidesToShow, setSlidesToShow] = useState(window.innerWidth <= 786 ? 1 : 3);

    window.addEventListener(
        'resize',
        () => {

            if (slidesToShow === 3 && window.innerWidth <= 786) setSlidesToShow(1);
            if (slidesToShow === 1 && window.innerWidth >= 786) setSlidesToShow(3)
    
        }
    ) 

    if (loading) return <Loading width={100} height={20}/>;
    if (error) return <h2 className="text-info">error...</h2>;

    return (
    <>
    <h2 className="text-center p-2">{category}</h2>
    <Grid className="border" sx={categorySliderStyles}>
        <Carousel slidesToShow={slidesToShow} autoplay cellSpacing={5}> 
                {
                    categoryProducts.map((product, i) =>
                    <ProductViewVertical key={i} product={product} sm={12} md={12}/>)
                }
        </Carousel>
    </Grid>
    </>
    )
};

export default CategorySlider;