import { LMS_CONTENT_PATH } from 'src/definitions/contentFilePaths';
import { getFrontmatters } from 'src/lib/markdown';
import { getPaths } from 'src/lib/paths';
export default async function searchInput(req: any, res: any) {
  // const { input } = req.body;
  const frontMatters = await getFrontmatters(LMS_CONTENT_PATH);
  const { paths } = getPaths(LMS_CONTENT_PATH);

  // const filteredMatters =  (): Array<string> => {
  //   const matters: Array<string> = [];
  //   for (let i = 0; i < frontMatters.length; i++) {
  //     // compare frontMatters[i].tags and input[]
  //     // if there is a match save frontMatters[i].id and which tags matched
  //     // matters.push(frontMatters[i]);
  //   }
  //   return matters;
  // }
  res.status(200).json({ frontMatters, paths });
}
