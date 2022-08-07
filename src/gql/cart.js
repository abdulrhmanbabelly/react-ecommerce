import { gql } from "@apollo/client";
import axios from "axios"

const GET_USER_CART = gql(`
        query Carts($userId : Int) {
            carts(userId : $userId) @rest(type: "cart", path: "carts/") {
                products
                date
                userId
                id
            }
        }
    `);

const GET_CARTS = gql(`
    query Carts {
        carts @rest(type: "cart", path: "carts/") {
            products
            date
            userId
            id
        }
    }
`);


let UPDATE_CART = gql(`
mutation Carts($id : Int, $input : input) {
    cart(id : $id, input : $input) @rest(type: "cart", path: "carts/{args.id}" , method : "PUT") {
            products
            date
            userId
            id
        }
    }
`);

let ADD_NEW_CART = gql(`
    mutation Carts($input : input) {
        cart(input : $input) @rest(type: "cart", path: "carts/" , method : "POST") {
            products
            date
            userId
            id
        }
    }
`);

let DELETE_CART = gql(`
    mutation Carts($id : Int) {
        carts(id : $id) @rest(type: "cart", path: "carts/{args.id}" method : "DELETE") {
            products
            date
            userId
            id
        }
    }
`);



export { GET_USER_CART, GET_CARTS, UPDATE_CART, DELETE_CART, ADD_NEW_CART };