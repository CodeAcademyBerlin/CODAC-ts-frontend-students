/* eslint-disable prettier/prettier */
import { filteredIndexField, searchInput } from 'src/lib/lms-search';

export default async function API(req: any, res: any) {

  const { input, filter } = req.body;
  const inputArray = input.split(',');
  try {
    const filteredIndex: Array<filteredIndexField> = await searchInput(inputArray, filter);
    res.status(200).json({ filteredIndex });
  } catch (error) {
    console.log('error', error);
  };
}