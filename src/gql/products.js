import { gql } from '@apollo/client/core';
import { PRODUCT_DATA } from './fragments';

const GET_PRODUCTS = gql`
    ${PRODUCT_DATA}
    query getProducts {
        products @rest(type: "product", path: "products/") {
            ...ProductsData
        }
    }
`;


let GET_PRODUCT = gql`
    ${PRODUCT_DATA}
    query getProduct ($id : Int) {
        product(id : $id) @rest(type : "product", path : "products/{args.id}") {
            ...ProductsData
        }
    }
`;

let GET_CART_PRODUCT = gql`
    query getProduct ($id : Int) {
        product(id : $id) @rest(type : "product", path : "products/{args.id}") {
            title
            image
            price
        }
    }
`;

let DELETE_PRODUCT = gql`
    mutation deleteProduct ($id : Int) {
        product(id : $id) @rest(type : "product", path : "products/{args.id}") {
            id
        }
    }
`

let ADD_PRODUCT = gql`
    ${PRODUCT_DATA}
    mutation addProduct ($input : input) {
        product(input : $input) @rest(type : "product", path:"products/", method : "POST") {
            ...ProductsData
        }
    }
`

let UPDATE_PRODUCT = gql`
    ${PRODUCT_DATA}
    mutation updateProduct ($input : input, $id : Int) {
        product(input : $input, id : $id) @rest(type : "product", path:"products/{args.id}", method : "PUT") {
         ...ProductsData
        }
    }
`


export { GET_PRODUCTS, GET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, GET_CART_PRODUCT };