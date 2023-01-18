import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://codac-364707.ey.r.appspot.com/graphql',
  documents: 'cabServer/**/*.graphql',
  generates: {
    'cabServer/global/__generated__/types.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
        maybeValue: 'T',
        hooks: { afterOneFileWrite: ['eslint --fix'] },
      },
    },
    'cabServer/global/__generated__': {
      plugins: ['typescript-react-apollo', 'typescript-operations'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        // withComponent: false,
        // hooks: { afterOneFileWrite: ['eslint --fix'] },
      },
    },
  },
};
export default config;
