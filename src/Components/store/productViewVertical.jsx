import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, CardActions, Typography, Avatar, Collapse, CardContent, CardMedia, CardHeader, Card, Grid, Rating } from '@mui/material';
import { red, green, yellow } from '@mui/material/colors';
import { MoreVert, ExpandMore, Share, Favorite } from '@mui/icons-material';

const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

let ProductViewVertical = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let { image, title, description, price, id } = props.product;
  let { rate, count } = props.product.rating;    

  return (
    <Grid item sm={props.sm} md={props.md} xs={12} style={{ margin : "1vw auto" }} className='product'>
        <Card>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title={title}
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            style={{ width : "100%" }}
            image={image}
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                <Rating readOnly value={rate} />
                <br/>price : <span style={{ color : green['700'] }}>{price}$</span>
                <br/>
                {count} left
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Favorite />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
            <ExpandMoreButton
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMore />
            </ExpandMoreButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                    {description}
                </Typography>
                <a href={`/products/${id}`}>buy</a>
            </CardContent>
        </Collapse>
        </Card>
    </Grid>
  );
}

export default ProductViewVertical;