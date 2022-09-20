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
import { Box, Divider, Link } from "@mui/material";

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

  let { image, title, price, id } = props.product;
  let { rate, count } = props.product.rating;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box
            component="img"
            style={{ width: "100%", margin: "auto", display: "block" }}
            src={image}
          />
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              <Link href={`/products/${id}`}>{title.substring(0, 300)}...</Link>
              <br />
              <Rating readOnly value={rate} />
              <br />
              <span style={{ color: green["700"] }}>{price}$</span>
              <br />
              {count}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductViewVertical;
