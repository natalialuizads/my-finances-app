import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  preset: 'jest-preset-angular',
};

export default config;
