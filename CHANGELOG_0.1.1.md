# Changelog

### 0.1.1 (2023-01-12)

### What's new in 0.1.1

[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

- The basic Next.js template with [TypeScript](https://www.typescriptlang.org/) support
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (provided by [@swc/jest](https://swc.rs/docs/usage/jest) for better performance)
- [Storybook](https://storybook.js.org/) configured and integrated with Next.js
- [Cypress](https://www.cypress.io/) is already configured for Next.js and integrated with GitHub actions
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- prettier integration
- [automatic import sorting](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [Testing library integration](https://github.com/testing-library/eslint-plugin-testing-library)
- [conventional commits](https://www.conventionalcommits.org/) integration:
- [linting](https://github.com/conventional-changelog/commitlint)
- [changelog generation](https://github.com/absolute-version/commit-and-tag-version)
- runs linting for code and commit message [on each commit](https://github.com/typicode/husky)
- recommended extensions
- [GitHub actions](https://github.com/features/actions):

  - linting
  - testing & building
  - package.json & tag version bumping (based on semantic commits)

  ## Directories organization

### src

For a better organization, the code is organized inside the `src` folder, while the configuration files and the `public` directory are located at the root level.

[This is supported by Next.js by default](https://nextjs.org/docs/advanced-features/src-directory).

### lmsDevSample

This folder contains extract from the LMS content for testing.
Actual content is cloned from github in production

### **test**

You can use this directory for your integration tests with Jest

### cypress

e2e (and/or integration) tests and fixtures for Cypress

### .storybook

Configuration files for Storybook

### .github/workflows

CI/CD and bumping workflows for GitHub Actions

## 🎛️ Scripts

- `lint`: Lint code
- `test`: Run Jest
- `test:watch`: Run Jest on watch mode for the file provided as argument
- `test:watchAll`: Run Jest on watch mode for all the files
- `test:coverage`: Run Jest on coverage mode
- `prepare`: Install husky hooks
- `commit`: Run commitizen
- `release`: Run changelog generation and version bumping
- `storybook`: Run Storybook in development mode
- `build-storybook`: Run Storybook in build mode
