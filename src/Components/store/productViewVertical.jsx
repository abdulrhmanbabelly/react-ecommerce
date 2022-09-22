import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Collapse from "@mui/material/Collapse";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import MoreVert from "@mui/icons-material/MoreVert";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Share from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import { red, green } from "@mui/material/colors";
import { Box, Button, Divider, Link } from "@mui/material";

const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

let ProductViewVertical = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let { image, title, price, description, id } = props.product;
  let { rate } = props.product.rating;

  return (
    <Grid
      sx={{
        boxShadow: "0px 14px 32px 0px rgba(0, 0, 0, 0.15)",
        width: `${props.width}vw`,
        margin: "1vw auto",
      }}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item container alignItems="center" xs={12} md={6}>
        <img
          src={image}
          style={{
            width: "50%",
            display: "block",
            margin: "auto",
          }}
        />
      </Grid>
      <Grid item xs={11} md={5}>
        {" "}
        <div className="product-info">
          <div className="product-text">
            <h1>
              <Link href={`/products/${id}`}>{title}</Link>
            </h1>
            <h2>
              rating : <Rating value={rate} readOnly size="small" />
            </h2>
            <p>{description}</p>
          </div>
          <Grid
            container
            justifyContent="space-between"
            className="product-price-btn"
            sx={{ paddingLeft: "2vw" }}
          >
            <Grid item>
              <p>
                <span style={{ fontSize: "34px" }}>{price}</span>$
              </p>
            </Grid>
            <Grid item>
              <Button
                type="button"
                sx={{
                  backgroundImage: (theme) =>
                    `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
                }}
              >
                buy now
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductViewVertical;
