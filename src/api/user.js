import axios from "axios"

let getUsers = async () => {

    let data = await axios.get('https://fakestoreapi.com/users');

    return data.data;

}

let getUser = async (id) => {

    let data = await axios.get(`https://fakestoreapi.com/users/${id}`);

    return data.data;

}

let addUser = async (email, username, password, firstname, lastname, city, street, number, zipcode, lat, long, phone) => {

    let data = await axios.post('https://fakestoreapi.com/users' ,{
        email : email,
        username : username,
        password : password,
        name : {
            firstname: firstname,
            lastname: lastname
        },
        address : {
            city : city,
            street : street,
            number : number,
            zipcode : zipcode,
            geolocation :{
                lat : lat,
                long : long
            }
        },
        phone : phone
    });

    return data.data;

}

let updateUser = async (email, username, password, firstname, lastname, city, street, number, zipcode, lat, long, phone, id) => {

    let data = await axios.put(`https://fakestoreapi.com/users/${id}` ,{
        email : email,
        username : username,
        password : password,
        name : {
            firstname: firstname,
            lastname: lastname
        },
        address : {
            city : city,
            street : street,
            number : number,
            zipcode : zipcode,
            geolocation :{
                lat : lat,
                long : long
            }
        },
        phone : phone
    });

    return data.data;

}

let signIn = async (username, password) => {
    
    let data = await axios.post('https://fakestoreapi.com/auth/login', {
        username : username,
        password : password
    });

    return data.data;

}

let deleteUser = async (id) => {

    let data = await axios.delete(`https://fakestoreapi.com/users/${id}`);

    return data.data;

}

export { getUsers, addUser, updateUser, deleteUser, signIn, getUser,  };