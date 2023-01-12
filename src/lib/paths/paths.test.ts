import { LMS_CONTENT_PATH } from 'src/definitions/contentFilePaths';

import { getPaths } from '.';
import fixtures from './fixtures.json';

const { paths, tree, links } = getPaths(LMS_CONTENT_PATH);

describe('generate LMS navigation correctly', () => {
  it('creates a flat array of markdown files in specified directory', async () => {
    expect(paths).toEqual(fixtures.paths);
  });
  it('creates a correct shape of navigation links', () => {
    expect(links).toEqual(fixtures.links);
  });
  it('creates a correct shape of dataTree', () => {
    expect(tree).toEqual(fixtures.tree);
  });
});
