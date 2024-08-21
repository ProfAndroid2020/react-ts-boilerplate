# React + TypeScript + Vite + Chakra

Проект коробка для быстрого развертывания приложения

## Оглавление

- [Архитектура](#архитектура)
- [css modules](#css-modules)
- [Chakra](#chakra)

## Архитектура

За основу архитектуры была взята концепция [Feature-Sliced Design](https://feature-sliced.design/ru/)

## css modules

Для того, чтобы стили css были изолированными используется принцип модулей. К каждому объявленному классу при запуске добавляется хэш, который делает стиля модуля уникальными. Таким образом стили не будут перемешиваться и затирать друг друга.

Для того, чтобы стили можно было импортировать из css-файла в разметку файлов tsx требуется добавить в настройках VSC (Plugin path) плагин `typescript-plugin-css-modules`.

## Chakra

Для упрощения стилизации страниц используется библиотека `Chakra`. Это библиотека хорошо интегрирована с `React`, позволяя добавлять на разметку готовые компоненты. Используя эту библиотеку следует использовать компоненты, предоставляемые `Chakra` вместо привычных html-тегов.

В случае, если требуется (хочется) написать свой компонент используя классические html-теги и css стилизацию, то рекомендуется реализацию компонента класть в отдельный файл и использовать на странице как компонент `Chakra`. При импорте стилей не забывать о [css-modules](#css-modules)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
