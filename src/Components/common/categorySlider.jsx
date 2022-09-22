import React, { useState } from "react";
import { useCategoryProducts } from "../../hooks";
import Grid from "@mui/material/Grid";
import { categorySliderStyles } from "../../styles";
import { ProductViewHorizontal, Loading } from "../";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
let CategorySlider = (props) => {
  let { category, width } = props;

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
      <Box component="h2" sx={{ color: "#333", marginBottom: "1vw" }}>
        {category} :
      </Box>
      <Box sx={categorySliderStyles}>
        <Swiper
          style={{ height: "100%" }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categoryProducts.map((product, i) => (
            <SwiperSlide>
              <ProductViewHorizontal key={i} product={product} width={30} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default CategorySlider;
