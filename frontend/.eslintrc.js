module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    env: {
      browser: true,
      es2020: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // General ESLint rules
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'off', // Turn off in favor of @typescript-eslint rules
      '@typescript-eslint/no-unused-vars': ['warn'],
  
      // React specific rules
      'react/prop-types': 'off', // TypeScript handles prop types
      'react/react-in-jsx-scope': 'off', // Next.js specific rule
  
      // Prettier integration
      'prettier/prettier': ['error', {
        endOfLine: 'auto',
      }],
  
      // Add custom rules here
    },
  };
  