module.exports = {
  parser: 'vue-eslint-parser',
  ignorePatterns: '.eslintrc.cjs',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
  ],
  overrides: [
    {
      files: ['*.vue', 'main.ts'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};
