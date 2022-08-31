import { gql } from "@apollo/client";
import { USERS_DATA } from "./fragments";

let GET_USERS = gql`
  ${USERS_DATA}
  query getUsers {
    users @rest(type: "user", path: "users/") {
      ...UsersData
    }
  }
`;

let GET_USER = gql`
  ${USERS_DATA}
  query getUser($id: Int) {
    user(id: $id) @rest(type: "user", path: "users/{args.id}") {
      ...UsersData
    }
  }
`;

let ADD_USER = gql`
  mutation addUser($input: input) {
    user(input: $input) @rest(type: "user", path: "users/", method: "POST") {
      id
    }
  }
`;

let UPDATE_USER = gql`
  ${USERS_DATA}
  mutation updateUser($input: input, $id: Int) {
    user(input: $input, id: $id)
      @rest(type: "user", path: "users/{args.id}", method: "PUT") {
      ...UsersData
    }
  }
`;

let SIGN_IN = gql`
  mutation SignIn($input: input) {
    signIn(input: $input)
      @rest(type: "token", path: "auth/login", method: "POST") {
      token
    }
  }
`;

let DELETE_USER = gql`
  mutation deleteUser($id: Int) {
    user(id: $id)
      @rest(type: "user", path: "users/{args.id}", method: "DELETE") {
      id
    }
  }
`;

export { GET_USERS, GET_USER, UPDATE_USER, DELETE_USER, SIGN_IN, ADD_USER };
