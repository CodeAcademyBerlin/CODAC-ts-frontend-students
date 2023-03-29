import { NextApiHandler } from 'next/types';
import {
  LMS_CONTENT_PATH,
  PROJECTS_PATH,
} from 'src/definitions/contentFilePaths';
import { getPaths } from 'src/lib/paths';

import lmslinks from '../../../public/assets/lmslinks.json';
import lmslinksdata from '../../../public/assets/lmslinksdata.json';

const lmsLinks: NextApiHandler = async (req, res) => {
  try {
    // const { tree } = getPaths(LMS_CONTENT_PATH);

    res.json(lmslinksdata);
  } catch (err) {
    console.log('error: ', err);
  }
};

export default lmsLinks;
