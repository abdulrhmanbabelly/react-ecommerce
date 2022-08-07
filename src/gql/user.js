import { gql } from "@apollo/client";
import axios from "axios"

let GET_USERS = gql(`
    query Users {
        users @rest(type: "user", path : "users/") {
            id
            email
            username
            password
            name {
                firstname
                lastname
            }
            address {
                city
                street
                number
                zipcode
                geolocation {
                    lat
                    long
                }
            }
            phone
        }
    }
`)

let GET_USER = gql(`
    query User($id : Int) {
        user(id : $id) @rest(type: "user", path:"users/{args.id}") {
            id
            email
            username
            password
            name {
                firstname
                lastname
            }
            address {
                city
                street
                number
                zipcode
                geolocation {
                    lat
                    long
                }
            }
            phone
        }
    }
`)

let ADD_USER =  gql(`
mutation User($input : input) {
    user(input : $input) @rest(type: "user", path:"users/", method : "POST") {
        id
        email
        username
        password
        name {
            firstname
            lastname
        }
        address {
            city
            street
            number
            zipcode
            geolocation {
                lat
                long
            }
        }
        phone
    }
}
`)

let UPDATE_USER = gql(`
    mutation User($input : input, $id : Int) {
        user(input : $input, id : $id) @rest(type: "user", path:"users/{args.id}", method : "PUT") {
            id
            email
            username
            password
            name {
                firstname
                lastname
            }
            address {
                city
                street
                number
                zipcode
                geolocation {
                    lat
                    long
                }
            }
            phone
        }
    }
`)


let SIGN_IN = gql(`
    mutation SignIn($input : input) {
        signIn(input : $input) @rest(type: "token", path:"auth/login", method : "POST") {
          token
        }
    }
`)

let DELETE_USER = gql(`
    mutation User($id : Int) {
        user(id : $id) @rest(type : "user", path : "users/{args.id}", method : "DELETE") {
            id
            email
            username
            password
            name {
                firstname
                lastname
            }
            address {
                city
                street
                number
                zipcode
                geolocation {
                    lat
                    long
                }
            }
            phone
        } 
    }
`)

export { GET_USERS, GET_USER, UPDATE_USER, DELETE_USER, SIGN_IN, ADD_USER  };