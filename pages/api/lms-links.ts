import { buildNestedPages } from '../../lib/content'
import { NextApiHandler } from "next";


const lmsLinks: NextApiHandler = async (req, res) => {
  try {
    const links = await buildNestedPages();
    res.json(links);
  } catch (err) {
    console.log("error: ", err);
  }

}

export default lmsLinks