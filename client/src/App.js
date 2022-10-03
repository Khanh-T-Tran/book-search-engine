import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route path='/' element={<SearchBooks />} />
            {/* <Route path='/saved' element={<SavedBooks />} /> */}
            <Route 
              path="*"
              element={<NotFound />}
            />
           
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
