import { ApolloClient, createHttpLink, from, InMemoryCache } from "@apollo/client";
import { GetMeDocument } from "../../graphql/_generated_";
import { NextApiHandlerWithSession } from "../../lib/session";
import { withSessionRoute } from "../../lib/withSession";
import { setContext } from '@apollo/client/link/context';


const getUser: NextApiHandlerWithSession = async (request, response) => {
  if (request.session.userSession) {
    const httpLink = createHttpLink({
      uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD}/graphql`,
    })
    const authLink = setContext((_, { headers }) => {

      const token = request.session.userSession.jwt
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });
    const client = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: from([authLink.concat(httpLink)]),
      // link: authLink.concat(httpLink),
      cache: new InMemoryCache(),

    });
    const { data } = await client.query({ query: GetMeDocument })

    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed

    response.json({
      user: data.me
    });
  } else {
    response.json({
      user: null
    });
  }

};

export default withSessionRoute(getUser);

