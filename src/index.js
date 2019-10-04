import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { RepositoriesPage } from './pages';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql'
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <RepositoriesPage/>
    </ApolloProvider>
    , document.getElementById('root'));
