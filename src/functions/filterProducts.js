import { gql } from '@apollo/client';
import client from '../config/apolloClient';

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

let filterProducts = async (filters, data) => {

    let {
        searchBy,
        limit,
        search,
        priceValue,
        rateValue,
        countValue,
    } = filters;

    let { sortedProducts } = data;
    let products = sortedProducts;
    let filterdproducts = [];

    for (let i = 0; i < products.length; i++) {
        if (
            priceValue[0] <=  products[i].price 
            && priceValue[1] >= products[i].price 
            && rateValue[0] <=  products[i].rating.rate 
            && rateValue[1] >= products[i].rating.rate 
            && countValue[0] <=  products[i].rating.count 
            && countValue[1] >= products[i].rating.count
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

        client.writeQuery({
            data : { products : returnableProducts },
            query : gql`
                mutation filterProducts {
                    products {
                        price
                        title
                        rating {
                            rate
                            count
                        }
                        category
                    }
                }
            `
        })

        return;
    } 


    for (let i = 0;
        i < ((limit > filterdproducts.length) ? filterdproducts.length : limit);
        i++
        ) {
        returnableProducts[i] = filterdproducts[i];
    }

    
    client.writeQuery({
        data : { products : returnableProducts },
        query : gql`
            mutation filterProducts {
                products {
                    price
                    title
                    rating {
                        rate
                        count
                    }
                    category
                }
            }
        `
    })

   
}

export default filterProducts;

