import axios from "axios";

let defualtProduct = [{
    id : 0,
    catagory : '...',
    title : '...',
    rating : {
        count : 0,
        rate : 0,
    },
    price : 0,
    description : '...'
}];

let productsFilter = async (setProducts) => {

    console.log(document.getElementsByTagName('input'))

    let searchBy = document.getElementsByTagName('input')[1].value; 
    let limit = document.getElementsByTagName('input')[3].value;
    let catagory = document.getElementsByTagName('input')[10].value;
    let desc = document.getElementById('desc').checked;
    let search = document.getElementById('search').value;
    let priceValueMax = document.getElementsByTagName('input')[5].value;
    let priceValueMin = document.getElementsByTagName('input')[4].value;
    let rateValueMax = document.getElementsByTagName('input')[7].value;
    let rateValueMin = document.getElementsByTagName('input')[6].value;
    let countValueMax = document.getElementsByTagName('input')[9].value;
    let countValueMin = document.getElementsByTagName('input')[8].value;


    let data = await axios.get(`https://fakestoreapi.com/products${catagory === 'all' ? '' : `/category/${catagory}`}/?${( desc ? 'sort=desc' : 'sort=asc')}`);

    let products = data.data;


    let filterdproducts = [];

    for (let i = 0; i < products.length; i++) {
        if (
            priceValueMin <=  products[i].price 
            && priceValueMax >= products[i].price 
            && rateValueMin <=  products[i].rating.rate 
            && rateValueMax >= products[i].rating.rate 
            && countValueMin <=  products[i].rating.count 
            && countValueMax >= products[i].rating.count
            ) filterdproducts.push(products[i]);
            
        }


    let searchedproducts = [];

    if (search) 
        for (let i = 0; i < filterdproducts.length; i++) {
            if (
            searchBy !== 'id' &&
            searchBy !== 'price'
            ) {
                if (filterdproducts[i][searchBy].toString().indexOf(search) > -1) searchedproducts.push(filterdproducts[i]);
            } else {
                if (filterdproducts[i][searchBy] === Number(search)) searchedproducts.push(filterdproducts[i]);
            }
        }

    let returnableProducts = [];

    if (search) { 

        for (
            let i = 0;
            i < ((limit > searchedproducts.length) ? searchedproducts.length : limit);
            i++
            ) {
            returnableProducts[i] = searchedproducts[i];
        }
        setProducts(returnableProducts[0] ? returnableProducts : defualtProduct);
        return;
    } 

    for (let i = 0;
        i < ((limit > filterdproducts.length) ? filterdproducts.length : limit);
        i++
        ) {
        returnableProducts[i] = filterdproducts[i];
    }

    setProducts(returnableProducts[0] ? returnableProducts : defualtProduct);

}

export default productsFilter;

