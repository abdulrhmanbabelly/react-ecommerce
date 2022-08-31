import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { green } from "@mui/material/colors";

let ProductViewHorizontal = (props) => {
  let { image, title, description, price, id } = props.product;
  let { rate, count } = props.product.rating;

  return (
    <Grid item xs={12} width="100vw" className="product">
      <Grid container spacing={1}>
        <Grid item md={3} xs={12} className="image">
          <img src={image} />
        </Grid>
        <Grid
          item
          md={9}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
          p={3}
        >
          <div>
            <h2 style={{ marginBottom: 0 }}>
              <Link href={`/products/${id}`} color="inherit">
                {title}
              </Link>
            </h2>
            <Typography paragraph pr={2} mb={0}>
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="read-only" value={rate} readOnly />
              <br />
              <span style={{ color: green["700"] }}>{price}$</span>
              <br />
              {count} left
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductViewHorizontal;
