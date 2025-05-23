import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint,
      prettier
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      curly: 'warn',
      'dot-notation': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-else-return': 'warn',
      'no-lonely-if': 'warn',
      'no-restricted-globals': 'off',
      'no-restricted-syntax': [
        'warn',
        {
          message: 'Use "t(...)" instead of literal text in JSX',
          selector: 'JSXText[value=/\\w/]'
        }
      ],
      'no-unneeded-ternary': 'warn',
      'no-unused-expressions': 'warn',
      'no-unused-vars': 'off',
      'no-useless-return': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'warn',
      'one-var': ['warn', 'never'],
      'prefer-arrow-callback': 'warn',
      'prefer-const': ['warn', { destructuring: 'all' }],
      'prefer-template': 'warn',
    }
  }
];
