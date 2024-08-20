import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // project: ['./tsconfig.node.json', './tsconfig.app.json'],
      // tsconfigRootDir: import.meta.dirname,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      /** Правило приводит к удалению ненужного возврата
       * ```
       * // Неверно
       * let foo = () => {
       * return 0;
       * };
       *
       * // Верно
       * let foo = () => 0
       * ```
       */
      'arrow-body-style': ['error', 'as-needed'],

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  }
)
