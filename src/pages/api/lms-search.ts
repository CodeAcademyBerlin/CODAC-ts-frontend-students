/* eslint-disable prettier/prettier */
import { LMS_CONTENT_PATH } from 'src/definitions/contentFilePaths';
import { filterInputs, getAllFrontmatters } from 'src/lib/lmsSearch';

export default async function searchInput(req: any, res: any) {
  const { input, filter } = req.body;
  const inputArray = input.split('_');
  let filterSet = ""
  if (filter !== "general") {
    filterSet = filter;
  };
  const frontMatters = await getAllFrontmatters(LMS_CONTENT_PATH, filterSet);
  const filteredMatters: Array<any> = [];
  for (let i = 0; i < frontMatters.items.length; i++){
    const inputs = filterInputs(frontMatters.items[i], inputArray);
    if (inputs) {
      filteredMatters.push(inputs);
    };
  };
  res.status(200).json({ filteredMatters });
}
