import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  // schema: `https://codac-administration.up.railway.app/graphql`,
  schema: `${process.env.NEXT_PUBLIC_CAB_SERVER_API_URL_PROD}/graphql`,
  documents: 'cabServer/**/*.graphql',
  generates: {
    'cabServer/global/__generated__/types.ts': {
      plugins: ['typescript'],
      // config: {
      //   avoidOptionals: true,
      //   maybeValue: 'T',
      //   hooks: { afterOneFileWrite: ['eslint --fix'] },
      // },
    },
    'cabServer/global/__generated__': {
      preset: 'near-operation-file',
      plugins: ['typescript-react-apollo', 'typescript-operations'],
      presetConfig: {
        folder: '__generated__',
        baseTypesPath: 'types.ts',
        extension: '.ts',
      },
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        // hooks: { afterOneFileWrite: ['eslint --fix'] },
      },
    },
  },
  // hooks: {
  //   afterOneFileWrite: ['eslint --fix', 'prettier --write'],
  // },
};
export default config;
