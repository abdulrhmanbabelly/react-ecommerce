import React, { useState } from "react";
import { useCategoryProducts } from "../../hooks";
import Grid from "@mui/material/Grid";
import Carousel from "nuka-carousel";
import { categorySliderStyles } from "../../styles";
import { ProductViewVertical, Loading } from "../";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
let CategorySlider = (props) => {
  let { category } = props;

  let { loading, categoryProducts, error } = useCategoryProducts(category);
  let [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 786 ? 1 : 3
  );

  window.addEventListener("resize", () => {
    if (slidesToShow === 3 && window.innerWidth <= 786) setSlidesToShow(1);
    if (slidesToShow === 1 && window.innerWidth >= 786) setSlidesToShow(3);
  });

  if (loading) return <Loading width={100} height={20} />;
  if (error) return <h2 className="text-info">error...</h2>;

  return (
    <>
      <Box component="h2" sx={{ color: "#333", marginBottom : "1vw" }}>
        {category}
      </Box>
      <Grid sx={categorySliderStyles}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categoryProducts.map((product, i) => (
            <SwiperSlide>
              <ProductViewVertical key={i} product={product} sm={12} md={12} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
};

export default CategorySlider;
