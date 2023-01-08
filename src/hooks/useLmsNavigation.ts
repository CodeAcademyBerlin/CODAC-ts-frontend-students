import { useEffect, useState } from 'react';
import { LMS_CONTENT_PATH } from 'src/definitions/contentFilePaths';

import lmsLinks from '../pages/api/lms-links';
import { LinkSingle } from '../pages/lms/lms';

const getLinks = async () => {
  const response = await fetch('/api/lms-links');
  const result = await response.json();
  console.log('result', result);
  return result;
};

export default function useLmsNavigation() {
  const [lmsArray, setLmsArray] = useState<LinkSingle[]>([]);
  const [lms, setLms] = useState<LinkSingle>();

  async function callLinks() {
    const links = await getLinks();
    const lms: LinkSingle = {
      page: ['welcome'],
      path: 'welcome',
      title: 'LMS',
      index: LMS_CONTENT_PATH,
      children: links,
    };
    lms && setLms(lms);
    setLmsArray(links);
  }

  useEffect(() => {
    callLinks();
  }, []);
  return { lmsArray, lms };
}
