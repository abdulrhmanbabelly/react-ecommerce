import React, { useState } from 'react';
import { Dialog, List, AppBar, Toolbar, IconButton, Typography, Slide, Box, Button, FormGroup, FormLabel, MenuItem, Select, Slider, TextField, FormControl } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Popup } from '../';
import { useUpdateProduct } from '../../hooks';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let UpdateProduct = (props) => {


    let { title, description, id, rating } = props.product;
    let { categories } = props;
    let [category, setCategory] = useState(props.product.category);
    let [price, setPrice] = useState(props.product.price);
    const [open, setOpen] = useState(false);
    let [popup, setPopup] = useState('');
    let { updateProduct } = useUpdateProduct(rating)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let handleUpdate = async () => {
        let newTitle = document.getElementById('title').value;
        await updateProduct({
            variables : {
                input : {
                    title : newTitle,
                    price : price,
                    description : document.getElementById('description').value,
                    category : category,
                },
                id : id
            }
        });
        setPopup(<Popup content={`updated product ${title} to be ${newTitle}`} type="success" title="Done Updating Product" setPopup={setPopup}/>)
    }

    let handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    let handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    return (
    <>
    <div>
        <Button variant="contained" onClick={handleClickOpen}>
            update
        </Button>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Update Product
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
            <Box>
                <form>
                    <FormGroup>
                        <TextField type="text" placeholder="Example : HUAWEI MATE 10 LITE" label = 'title' variant="outlined" defaultValue={title} id="title"/>
                        <TextField placeholder='Write product`s description here' variant="outlined" label="description" defaultValue={description} id="description"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Price :</FormLabel>
                        <FormControl>
                            <Slider min={0} max={10000} valueLabelDisplay="auto" defaultValue={price} onChange={handlePriceChange}/>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Category : </FormLabel>
                        <Select label="category" value={category} onChange={handleCategoryChange}>
                            <MenuItem value="all">all</MenuItem>
                            {categories.map((category) => <MenuItem key={Math.random() * 10000} value={category}>{category}</MenuItem>)}
                        </Select>
                    </FormGroup>
                </form>
                <Button variant='contained' color='secondary' onClick={() => { handleUpdate(); handleClose(); }} style={{ float : "right" }}>
                    Update
                </Button>
            </Box>
        </List>
      </Dialog>
    </div>
    {popup}
    </>
  );
}

export default UpdateProduct;