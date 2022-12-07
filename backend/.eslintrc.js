module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  ignorePatterns: ['node_modules/', '.eslintrc.js'],
};
