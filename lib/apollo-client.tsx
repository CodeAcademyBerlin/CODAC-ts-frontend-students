import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD}/graphql`,
})




const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


export default client;
// const withApollo = nextWithApollo(
//   ({ initialState, headers }) => {
//     return new ApolloClient({
//       ssrMode: typeof window === "undefined",
//       link: new HttpLink({
//         uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL_DEV}/graphql`,
//       }),
//       headers: {
//         ...(headers as Record<string, string>),
//       },
//       cache: new InMemoryCache().restore(initialState || {}),
//     });
//   },
//   {
//     render: ({ Page, props }) => {
//       const router = useRouter();
//       return (
//         <ApolloProvider client={props.apollo}>
//           <Page {...props} {...router} />
//         </ApolloProvider>
//       );
//     },
//   }
// );

// export default withApollo;
