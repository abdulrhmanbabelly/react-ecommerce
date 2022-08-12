import { gql } from "@apollo/client";
import client from "../config/apolloClient";

let defaultCart = [{
    id:0,
    userId:0,
    date: '...',
    products:[]
}]

let filterCarts = async (filters, data) => {

    let carts = data.sortedCarts;
    let { search, searchBy } = filters;

    let searchedCarts = [];

    if (search) 
        for (let i = 0; i < carts.length; i++) {
            if (searchBy !== 'productId' && searchBy !== 'quantity' && search !== 'id') {
                if (carts[i][searchBy].toString().indexOf(search) > -1) searchedCarts.push(carts[i]);
            } else {
                for (let j = 0; j < carts[i].products.length; j++) {
                    if (search === carts[i].products[j][searchBy].toString()) searchedCarts.push(carts[i]);
                }
            }
        }

        client.writeQuery({
            data : { carts : searchedCarts[0] ? searchedCarts : carts },
            query : gql`
                mutation filterCarts {
                    carts {
                        products
                        date
                        id
                        userId
                    }
                }
            `
        })

}

export default filterCarts;