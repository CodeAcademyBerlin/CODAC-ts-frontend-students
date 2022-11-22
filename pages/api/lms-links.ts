import { buildNestedPages } from '../../lib/content'
import { NextApiHandler } from "next";


const lmsLinks: NextApiHandler = async (req, res) => {
  const links = await buildNestedPages();
  res.json(links);
}

export default lmsLinks