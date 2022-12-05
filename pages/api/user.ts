import { NextApiHandler } from "next";
import { GetMeDocument } from "../../graphql/queries/__generated__/user";
import { initializeApollo } from "../../lib/apolloClient";


const userRoute: NextApiHandler = async (req, res) => {
  console.log('req', req.cookies)
  const client = initializeApollo(null, req)
  const { data } = await client.query({ query: GetMeDocument })
  console.log("data in userRoute", data)
  res.send({ user: data.me })
};

export default userRoute;

