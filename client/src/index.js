import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost3000/graphql', cache: new InMemoryCache()
});

ReactDOM.render(
  
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  
  document.getElementById('root')
);
