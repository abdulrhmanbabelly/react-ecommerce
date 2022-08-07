import axios from 'axios';
import { gql } from '@apollo/client/core';

const GET_PRODUCTS = gql(`
    query Products {
        products @rest(type: "product", path: "products/") {
            id
            title
            price
            category
            description
            image
            rating {
                rate
                count
            }
        }
    }
`);

let GET_PRODUCT = gql(`
    query Product($id : Int) {
        product(id : $id) @rest(type : "product", path : "products/{args.id}") {
            title
            description
            price
            rating {
                rate
                count
            }
            image
            category
        }
    }
`)

let DELETE_PRODUCT = gql(`
    mutation Product($id : Int) {
        product(id : $id) @rest(type : "product", path : "products/{args.id}") {
            id
            title
            price
            category
            description
            image
            rating {
                rate
                count
            }
        }
    }
`)

let ADD_PRODUCT = gql(`
    mutation Product($input : input) {
        product(input : $input) @rest(type : "product", path:"products/", method : "POST") {
            id
            title
            price
            category
            description
            image
            rating {
                rate
                count
            }
        }
    }
`)

let UPDATE_PRODUCT = gql(`
mutation Product($input : input, $id : Int) {
    product(input : $input, id : $id) @rest(type : "product", path:"products/{args.id}", method : "PUT") {
        id
        title
        price
        category
        description
        image
        rating {
            rate
            count
        }
    }
}
`)


export { GET_PRODUCTS, GET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT };