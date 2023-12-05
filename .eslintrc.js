module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
<<<<<<< HEAD
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended"
],
=======
  extends: ["airbnb-base", "plugin:prettier/recommended"],
>>>>>>> c40773c3ff708793a3774373f4b307ea79e766e6
  overrides: [
    {
      env: {
        node: true,
      },
<<<<<<< HEAD
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
=======
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
>>>>>>> c40773c3ff708793a3774373f4b307ea79e766e6
      },
    },
  ],
  parserOptions: {
<<<<<<< HEAD
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
=======
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
>>>>>>> c40773c3ff708793a3774373f4b307ea79e766e6
};
