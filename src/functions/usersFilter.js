import axios from "axios";

let usersFilter = async (setUsers) => {

    console.log(document.getElementsByTagName('input'));

    let limit = document.getElementsByTagName('input')[3].value;
    let desc = document.getElementsByTagName('input')[4].checked;
    let search = document.getElementsByTagName('input')[2].value;
    let searchBy = document.getElementsByTagName('input')[1].value; 

    let data = await axios.get(`https://fakestoreapi.com/users/?${( desc ? 'sort=desc' : 'sort=asc')}&limit=${limit}`);

    let filterdUsers = [];

    if (search) 
        for (let i = 0; i < data.data.length; i++) {
            if (searchBy == 'id') if (search == data.data[i][searchBy].toString()) { filterdUsers.push(data.data[i]); break; }
            if (searchBy !== 'firstname' && searchBy !== 'lastname') {
                if (searchBy !== 'city' && searchBy !== 'street' && searchBy !== 'zipcode' && searchBy !== 'street' && searchBy !== 'number'  && searchBy !== 'lat' && searchBy !== 'long') {
                    if (data.data[i][searchBy].toString().indexOf(search) > -1) filterdUsers.push(data.data[i]);
                } else {
                    if (data.data[i].geolocation[searchBy].toString().indexOf(search) > -1) filterdUsers.push(data.data[i]);
                }
            } else {
                if (data.data[i].name[searchBy].toString().indexOf(search) > -1) filterdUsers.push(data.data[i]);
            }
        }

    setUsers(filterdUsers[0] ? filterdUsers : data.data);
    
}

export default usersFilter;