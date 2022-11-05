import { NextApiHandlerWithSession } from "../../lib/session";
import { withSessionRoute } from "../../lib/withSession";


const loginRoute: NextApiHandlerWithSession = async (request, response) => {
  console.log(request.session);
  const { jwt } = request.body;
  request.session.userSession = {
    createdAt: new Date(),
    jwt
  };
  await request.session.save();
  response.send({ ok: true });

};

export default withSessionRoute(loginRoute);