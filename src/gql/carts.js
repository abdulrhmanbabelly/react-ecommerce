import { gql } from "@apollo/client";
import { CARTS_DATA } from "./fragments";

const GET_USER_CART = gql`
    ${CARTS_DATA}
    query getUserCarts($userId : Int) {
        carts(userId : $userId) @rest(type: "cart", path: "carts/user/{args.userId}") {
            ...CartsData
        }
    }
`;

const GET_CARTS = gql`
    ${CARTS_DATA}
    query getCarts {
        carts @rest(type: "cart", path: "carts/") {
            ...CartsData
        }
    }
`;

let UPDATE_CART = gql`
mutation updateCart ($id : Int, $input : input) {
    cart(id : $id, input : $input) @rest(type: "cart", path: "carts/{args.id}" , method : "PUT") {
            products
            id
            price @client
        }
    }
`;

let ADD_NEW_CART = gql`
    mutation addNewCart ($input : input) {
        cart(input : $input) @rest(type: "cart", path: "carts/" , method : "POST") {
            date
            id
            userId
        }
    }
`;

let DELETE_CART = gql`
    mutation deleteCart ($id : Int) {
        carts(id : $id) @rest(type: "cart", path: "carts/{args.id}" method : "DELETE") {
            id
        }
    }
`;

export { GET_USER_CART, GET_CARTS, UPDATE_CART, DELETE_CART, ADD_NEW_CART };
