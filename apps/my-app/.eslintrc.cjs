module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
};
