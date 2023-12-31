import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Routes from "./routes";

const client = new ApolloClient({
    uri: "http://192.168.1.84:4000/graphql",
    credentials: "include",
    cache: new InMemoryCache(),
});

export default function Index() {
    return (
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    );
}
