let homeStyles = {
  "& .slider-container": {
    padding: 0,
    color: "#Fff",
    "& div": {
      position: "relative",
      "& span": {
        position: "absolute",
        color: "rgba($color: #000000, $alpha: 0.8)",
        background: "rgba(0,0,0,0.8)",
        fontSize: "2vw",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        fontWeight: 700,
        padding: "1vw",
      },
      "& img": {
        width: "100% !important",
        height: "86vh",
        display: "block !important",
        margin: "auto",
      },
    },
  },
};

export default homeStyles;
