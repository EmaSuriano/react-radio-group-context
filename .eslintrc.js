module.exports = {
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'no-confusing-arrow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'function-paren-newline': 'off',
    indent: 'off',
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    'react/no-typos': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/label-has-for': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
  },
};