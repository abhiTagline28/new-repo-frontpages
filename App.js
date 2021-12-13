/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloLink } from 'apollo-link';
import {createUploadLink} from "apollo-upload-client"
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import AOS from 'aos';

import theme from './theme';
import Routes from './Routes';


import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

//import { CreateGlobalStyle } from './components'
const uri = 'http://localhost:4000/'
//const uri = 'https://cryptic-mountain-95495.herokuapp.com/'
//const uri = process.env.API_URI
// console.log(uri)
//const httpLink = createHttpLink({ uri })
const httpLink = new HttpLink({
  //uri: 'https://cryptic-mountain-95495.herokuapp.com/graphql',
  uri:'http://localhost:4000/graphql'

});
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  console.log('HEADERS',headers)
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  }
})

const wsLink = new WebSocketLink({
  //uri:  'ws://cryptic-mountain-95495.herokuapp.com/graphql',
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});

const uploadLink = createUploadLink({
  //uri: 'https://cryptic-mountain-95495.herokuapp.com/graphql'
  uri:"http://localhost:4000/graphql",
  })

  const splitLink = split(  
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    ApolloLink.from([authLink,uploadLink,errorLink]),
    
  );

export const client = new ApolloClient({
  link: splitLink,                             //authLink.concat(httpLink),uploadlink(this is the version set up with Ike)
  cache,
  resolvers: {},
  connectToDevTools: true,
  name:'web'
  
})

const data = {
  isLoggedIn: !!localStorage.getItem('token')
}

// cache.writeData({ data })

//client.onResetStore(() => cache.writeData({ data }))


const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

const App = () => {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });
  

  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Paper>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </Paper>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;