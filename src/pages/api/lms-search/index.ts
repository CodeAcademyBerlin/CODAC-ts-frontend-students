/* eslint-disable prettier/prettier */
import { readFileSync } from 'fs';
import path from 'path';
import { filteredIndex, searchInput } from 'src/lib/lms-index';
import { filterIndex } from 'src/lib/lms-search';

export default async function API(req: any, res: any) {

  const { input } = req.body;
  try {
    const filteredIndex = searchInput(input);
    res.status(200).json({ filteredIndex });
  } catch (error) {
    console.log('error', error);
  };
}

// export default async function searchInput(req: any, res: any) {
//   const file = path.join(process.cwd(), 'index.json')
//   const lms = JSON.parse(readFileSync(file, 'utf8'));
//   const { input } = req.body;
//   const inputArray = input.split(',');
//   try {
//     const filteredIndex: Array<filteredIndex> = [];
//     for (let i = 0; i < lms.length; i++){
//       const inputs = filterIndex(lms[i], inputArray);
//       if (inputs) {
//         filteredIndex.push(inputs);
//       };
//     };
//     res.status(200).json({ filteredIndex });
//   } catch (error) {
//     console.log('error', error);
//   };
// }