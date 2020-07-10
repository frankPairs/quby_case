module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  resetMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
};
