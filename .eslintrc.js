module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier', // Make sure this is always the last element in the array.
  ],
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': ['error', {}, {usePrettierrc: true}],
    'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['state']}],
    'no-unused-expressions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'no-restricted-exports': 'off',
    'no-unused-vars': ['off'],
    'react/function-component-definition': 'off',
    semi: ['error', 'always'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
