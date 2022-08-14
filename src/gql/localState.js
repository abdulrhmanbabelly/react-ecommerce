import { gql } from '@apollo/client';

let DARK_MODE = gql`
    query Darkmode{
        on @client
    }
`;


let LOGGED_IN = gql`
    query LoggedIn{
        loggedIn @client
    }
`
export { LOGGED_IN, DARK_MODE };
