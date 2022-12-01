import { GetMeDocument } from "../../graphql/_generated_";
import { NextApiHandler } from "next";
import { initializeApollo } from "../../configs/apollo";


const userRoute: NextApiHandler = async (req, res) => {
  console.log('req', req.cookies)
  const client = initializeApollo(null, req)
  const { data } = await client.query({ query: GetMeDocument })
  console.log("data in userRoute", data)
  res.send({ user: data.me })
};

export default userRoute;

