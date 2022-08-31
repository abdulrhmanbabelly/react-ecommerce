import { gql } from "@apollo/client";

let USERS_DATA = gql`
  fragment UsersData on user {
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
`;

let PRODUCT_DATA = gql`
  fragment ProductsData on product {
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
`;
let CARTS_DATA = gql`
  fragment CartsData on cart {
    id
    userId
    products
    date
  }
`;

export { USERS_DATA, PRODUCT_DATA, CARTS_DATA };
