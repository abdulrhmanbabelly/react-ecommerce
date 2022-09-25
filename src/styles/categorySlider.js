let categorySliderStyles = {
  overflowX: "hidden",
  width: "100vw",
  ".category": {
    color: (props) => (props.palette.mode === "light" ? "#333" : "#eee"),
    marginBottom: "1vw",
    paddingRight: (props) => (props.palette.ltr ? "0" : 2),
    paddingLeft: (props) => (props.palette.ltr ? 2 : "0"),
  },
  "& .slider": {
    padding: 1,
    "& .swiper": { overflow: "visible" },
    "& .swiper-wrapper": {
      display: "flex",
    },
  },
};

export default categorySliderStyles;
