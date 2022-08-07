import axios from "axios";

let defaultCart = [{
    id:0,
    userId:0,
    date: '...',
    products:[]
}]

let cartsFilter = async (setCarts) => {

    let searchBy = document.getElementsByTagName('input')[1].value; 
    let search = document.getElementsByTagName('input')[2].value;
    let limit = document.getElementsByTagName('input')[3].value;
    let desc = document.getElementsByTagName('input')[6].checked;
    let startDate = document.getElementsByTagName('input')[4].value;
    let endDate = document.getElementsByTagName('input')[5].value;
    let data = await axios.get(`https://fakestoreapi.com/carts/?${( desc ? 'sort=desc' : 'sort=asc')}${(startDate && endDate) && `&startdate=${startDate}&enddate=${endDate}`}&limit=${limit}`);

    let searchedCarts = [];

    if (search) 
        for (let i = 0; i < data.data.length; i++) {
            if (searchBy !== 'productId' && searchBy !== 'quantity' && search !== 'id') {
                if (data.data[i][searchBy].toString().indexOf(search) > -1) searchedCarts.push(data.data[i]);
            } else {
                for (let j = 0; j < data.data[i].products.length; j++) {
                    if (search === data.data[i].products[j][searchBy].toString()) searchedCarts.push(data.data[i]);
                }
            }
        }


    setCarts(searchedCarts[0] ? searchedCarts : (data.data[0] ? data.data : defaultCart));

}

export default cartsFilter;