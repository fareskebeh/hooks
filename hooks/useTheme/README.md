# useTheme()

## Description
`useTheme()` is a custom React hook with an accompanying `ThemeProvider` that manages light/dark mode in your application.  
It integrates smoothly with TailwindCSS (or any CSS framework) by applying a `data-theme` attribute on the `<html>` element, so you can style your app conditionally.

- ✅ Detects system preference (`prefers-color-scheme`)  
- ✅ Persists user choice in `localStorage`  
- ✅ Provides a simple API: `theme` and `changeTheme()`  
- ✅ Works with Tailwind’s dark mode (`[data-theme="dark"]`)  

---

## Installation
Clone or copy the `useTheme` hook and provider into your project.  
For Tailwind users, make sure your `tailwind.config.js` is set to class or attribute strategy.

Example (`tailwind.config.js`):

```js
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'], // support for both class and data-theme
  // ...
};
