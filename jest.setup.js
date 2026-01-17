/** @type {import('jest').Config} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // run setup file after env is ready
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // use ts-jest for TypeScript
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

