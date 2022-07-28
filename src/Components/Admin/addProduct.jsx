import React, { useState } from 'react';
import { addProduct } from "../../api/products";
import { Box, Button, FormGroup, FormLabel, MenuItem, Select, Slider, TextField, FormControl, InputLabel } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Popup from '../common/Popup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let AddProduct = (props) => {

    const [open, setOpen] = useState(false);
    let { categories } = props;
    let [category, setCategory] = useState('');
    let [price, setPrice] = useState(0);
    let [popup, setPopup] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let handleAddProduct = async () => {
        let res = await addProduct(
        document.getElementById('title').value,
        price,
        document.getElementById('description').value,
        category
        );
        if (res) setPopup(<Popup content={`added product ${res.title}`} type={"success"} title="Done Adding product" setPopup={setPopup}/>);
    }

    let handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    let handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    return (
        <div>
        <Button variant="contained" color='success' onClick={handleClickOpen} style={{ marginBottom : "1vw" }}>
            Add product
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
                        <TextField type="text" placeholder="Example : HUAWEI MATE 10 LITE" label = 'title' variant="outlined" id="title"/>
                        <TextField placeholder='Write product`s description here' variant="outlined" label="description" id="description"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Price :</FormLabel>
                        <FormControl>
                            <Slider min={0} max={10000} valueLabelDisplay defaultValue={price} onChange={handlePriceChange}/>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select labelId='category-label' label="Category" value={category} onChange={handleCategoryChange} variant='outlined'>
                                <MenuItem value="all">all</MenuItem>
                                {categories.map((category) => <MenuItem key={Math.random() * 10000} value={category}>{category}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </FormGroup>
                </form>
                <Button variant='contained' color='secondary' onClick={() => { handleAddProduct(); handleClose(); }} style={{ float : "right" }}>
                    Add
                </Button>
            </Box>
        </List>
      </Dialog>
      {popup}
    </div>
  );
}

export default AddProduct;
