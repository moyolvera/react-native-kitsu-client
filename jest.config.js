module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation|native-base|@react-native-community)'],
  setupFiles: ['<rootDir>/src/setupJestMocks.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js}'],
  coverageReporters: ['json', 'lcov', 'clover', 'text'],
};
