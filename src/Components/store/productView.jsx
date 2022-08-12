import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, CardActions, Typography, Avatar, Collapse, CardContent, CardMedia, CardHeader, Card, Grid } from '@mui/material';
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

let ProductView = (props) => {
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
                count : {count}
                <br/>rate : <span style={{ color : yellow['700'] }}>{rate}</span>
                <br/>price : <span style={{ color : green['700'] }}>{price}$</span>
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


/* let ProductView = (props) => {

    let { image, title, description, price, id } = props.product;
    let { rate, count } = props.product.rating;    
    let theme = useTheme();

    return (
        <Grid item sm={props.sm} spacing={1}>
            <Card className='product'>
                <Card.Img variant="top" src={image} className=""/>
                <Card.Body style={{ backgroundColor : theme.background, color : theme.foreground }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description.substring(0, 100)}...
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className='text-warning' style={{ backgroundColor : theme.background }}>
                        {rate}
                    </ListGroupItem>
                    <ListGroupItem style={{ backgroundColor : theme.background, color : theme.foreground }}>
                        {count} left
                    </ListGroupItem>
                    <ListGroupItem className='text-success' style={{ backgroundColor : theme.background }}>
                        ${price}
                    </ListGroupItem>
                </ListGroup>
                <Card.Body style={{ backgroundColor : theme.background,color : theme.foreground }}>
                    <Card.Link href={`http://localhost:3000/product/${id}`}>product page</Card.Link>
                </Card.Body>
            </Card> 
        </Grid>
    )
} */

export default ProductView;