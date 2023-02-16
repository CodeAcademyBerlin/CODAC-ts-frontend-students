/* eslint-disable prettier/prettier */
import lms from 'public/lms/assets/lmsindex.json';
import { filteredIndex } from 'src/lib/lms-index';
import { filterIndex } from 'src/lib/lms-search';

export default async function searchInput(req: any, res: any) {
  const { input } = req.body;
  const inputArray = input.split(',');
  try {
    const filteredIndex: Array<filteredIndex> = [];
    for (let i = 0; i < lms.length; i++){
      const inputs = filterIndex(lms[i], inputArray);
      if (inputs) {
        filteredIndex.push(inputs);
      };
    };
    res.status(200).json({ filteredIndex });
  } catch (error) {
    console.log('error', error);
  };
}