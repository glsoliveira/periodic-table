import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Using jsdom environment
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/*.test.ts", // Make sure this matches your file naming convention
    "**/?(*.)+(spec|test).[tj]s?(x)" // This will pick up both ts and js files
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Ensure this points to your setup file
};

export default config;
