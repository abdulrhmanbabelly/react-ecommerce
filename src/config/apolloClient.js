import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const fakestoreapi = new RestLink({ uri : "https://fakestoreapi.com/" })
const client = new ApolloClient({
    link: fakestoreapi,
    cache: new InMemoryCache()
});

export default client;
