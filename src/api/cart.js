import axios from "axios"

let getUserCarts = async (userId) => {

    let data = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);

    return data.data;

}


let getCarts = async () => {

    let data = await axios.get('https://fakestoreapi.com/carts');

    return data.data;

}

let updateCart = async (cart) => {

    let data = await axios.put(`https://fakestoreapi.com/carts/${cart.id}`, cart);

    return data.data;

}

let deleteCart = async (id) => {

    let data = await axios.delete(`https://fakestoreapi.com/carts/${id}`);

    return data.data;

}

let addNewCart = async (cart) => {

    let data = await axios.post('https://fakestoreapi.com/carts', cart);

    return data.data;

}

export { getUserCarts, getCarts, updateCart, deleteCart, addNewCart };