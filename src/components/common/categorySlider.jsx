import React, { useEffect, useState } from "react";
import { useCategoryProducts } from "../../hooks";
import { categorySliderStyles } from "../../styles";
import { Loading, ProductViewVertical } from "../";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

let CategorySlider = (props) => {
  let { category } = props;
  let { loading, categoryProducts, error } = useCategoryProducts(category);
  let [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 786 ? 1 : 3
  );
  let { i18n } = useTranslation();
  if (i18n.language !== localStorage.getItem("language")) location.reload();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (slidesToShow === 3 && window.innerWidth <= 900) setSlidesToShow(1);
      if (slidesToShow === 1 && window.innerWidth >= 900) setSlidesToShow(3);
    });

    return window.removeEventListener("resize", () => {
      if (slidesToShow === 3 && window.innerWidth <= 900) setSlidesToShow(1);
      if (slidesToShow === 1 && window.innerWidth >= 900) setSlidesToShow(3);
    });
  });

  if (loading) return <Loading width={100} height={20} />;
  if (error) return <h2 className="text-info">error...</h2>;

  return (
    <Grid sx={categorySliderStyles} item xs={12}>
      <Box component="h2" className="category">{category} :</Box>
      <Box className="slider">
        <Swiper
          modules={[Pagination]}
          spaceBetween={5}
          slidesPerView={slidesToShow}
          pagination={{ clickable: true }}
        >
          {categoryProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <ProductViewVertical
                product={product}
                width={slidesToShow === 3 ? 30 : 90}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Grid>
  );
};

export default CategorySlider;
