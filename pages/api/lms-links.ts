import { buildNestedPages } from '../../lib/content'
import { NextApiHandler } from "next";
import localLinks from '../../lmslinks.json'


const lmsLinks: NextApiHandler = async (req, res) => {
  try {
    // const links = await buildNestedPages();
    res.json(localLinks);
  } catch (err) {
    console.log("error: ", err);
  }

}

export default lmsLinks