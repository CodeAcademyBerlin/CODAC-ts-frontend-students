/* eslint-disable prettier/prettier */
import { LMS_CONTENT_PATH } from 'src/definitions/contentFilePaths';
import { filterInputs, getAllFrontmatters } from 'src/lib/lmsSearch';

export default async function searchInput(req: any, res: any) {
  const { input, filter } = req.body;
  // let input = ['html', 'css']
  // console.log(req.body)
  // const input2 = input.parse();
  console.log(input)
  const frontMatters = await getAllFrontmatters(LMS_CONTENT_PATH);
  const filteredMatters: Array<any> = [];
  for (let i = 0; i < frontMatters.items.length; i++){
    const inputs = filterInputs(frontMatters.items[i], input);
    if (inputs) {
      filteredMatters.push(inputs);
    };
  };
  res.status(200).json({ filteredMatters });
}
