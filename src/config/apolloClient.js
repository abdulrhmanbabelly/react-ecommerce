import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const fakestoreapi = new RestLink({ uri : "https://fakestoreapi.com/" })
const client = new ApolloClient({
    link: fakestoreapi,
    cache: new InMemoryCache({
        typePolicies : {
            Query :{
                fields : {
                    products : {
                        merge(exits = [], incoming = []) {
                            return [...incoming]
                        }
                    },
                    users : {
                        merge(exits = [], incoming = []) {
                            return [...incoming]
                        }
                    },
                    carts : {
                        merge(exits = [], incoming = []) {
                            return [...incoming]
                        }
                    },
                    cart : {
                        merge(exits = [], incoming) {
                            return incoming
                        }
                    }
                }
            }
        }
    })
});

export default client;
