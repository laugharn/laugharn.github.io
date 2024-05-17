const config = {
  extends: ['next', 'prettier'],
  root: true,
  rules: {
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
  },
}

module.exports = config
