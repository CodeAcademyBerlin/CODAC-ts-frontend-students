import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD}/graphql`,
})





const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: from([errorLink, authLink.concat(httpLink)]),
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

});

export default client;

