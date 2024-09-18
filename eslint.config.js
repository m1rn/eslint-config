import { m1rn } from './dist/index.js'

export default [
  ...m1rn(),
  {
    files: ['src/**/*.ts'],
    rules: {
      'ts/no-explicit-any': 0,
      'ts/no-unsafe-assignment': 0,
      'ts/no-unsafe-argument': 0
    }
  },
  {
    files: ['src/rules.ts'],
    rules: {
      'sort/sort-objects': [2, { type: 'natural' }]
    }
  },
  {
    files: ['src/index.ts'],
    rules: {
      'sort/sort-exports': 0
    }
  },
  {
    files: ['README.md/**'],
    rules: {
      'sort/sort-named-imports': 0
    }
  }
]
