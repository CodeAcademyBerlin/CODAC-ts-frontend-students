
import { NextApiHandlerWithSession } from "../../lib/session";
import { withSessionRoute } from "../../lib/withSession";


const logoutRoute: NextApiHandlerWithSession = async (request, response) => {
  console.log(request.session);
  request.session.destroy();
  response.json({ user: null });

};

export default withSessionRoute(logoutRoute);