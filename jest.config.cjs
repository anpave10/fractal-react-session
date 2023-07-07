require('dotenv').config()

module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFiles: ['<rootDir>/.env'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
}