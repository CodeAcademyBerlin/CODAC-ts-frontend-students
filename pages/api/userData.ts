import { NextApiHandler } from "next";
import { GetMeDocument } from "../../graphql/queries/__generated__/user";
import { getToken, initializeApollo } from "../../lib/apolloClient";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { FilterStudentByUserIdDocument } from "../../graphql/queries/__generated__/students";
import userRoute from "./user";
import { JwtPayloadWithID } from "../../@types";


const userData: NextApiHandler = async (req, res) => {
  try {
    const client = initializeApollo(null, req);
    const token = getToken(req);
    const decodedToken: JwtPayloadWithID = await jwt_decode(token);
    console.log("token in getServerSideProps:", decodedToken);
    const { data } = await client.query({
      query: FilterStudentByUserIdDocument,
      variables: { userId: decodedToken.id },
    });
    if (data) {
      if (data.role.name === "Student")
        console.log("data in userRoute", data)
      res.send({ user: data.me })
    }

  } catch (error) {
    console.log('error', error)
    res.send({ user: null })
  }

};

export default userData;
