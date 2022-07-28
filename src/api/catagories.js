import axios from "axios";

let getCatagories = async () => {

    let data = await axios.get('https://fakestoreapi.com/products/categories');

    return data.data;

}

let getCatagoryProducts = async (catagory) => {

    let data = await axios.get(`https://fakestoreapi.com/products/category/${catagory}`);

    return data.data;

}

export { getCatagories, getCatagoryProducts };