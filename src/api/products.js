import axios from 'axios';

let getProducts = async () => {

    let data = await axios.get('https://fakestoreapi.com/products/');

    window.localStorage.setItem('products', JSON.stringify(data.data));

    return data.data;

}

let getProduct = async (id) => {

    let data = await axios.get(`https://fakestoreapi.com/products/${id}`);

    return data.data;

}

let deleteProduct = async (id) => {

    let data = await axios.delete(`https://fakestoreapi.com/products/${id}`);

    return data.data;

}

let addProduct = async (title, price, description, category) => {

    let data = await axios.post('https://fakestoreapi.com/products/', {
        title: title,
        price: price,
        description: description,
        image: 'https://i.pravatar.cc',
        category: category
    });

    return data.data;

}

let updateProduct = async (title, price, description, category, id) => {

    let data = await axios.put(`https://fakestoreapi.com/products/${id}`, {
        title: title,
        price: price,
        description: description,
        image: 'https://i.pravatar.cc',
        category: category
    });

    return data.data;

}

export { getProducts, getProduct, deleteProduct, addProduct, updateProduct };