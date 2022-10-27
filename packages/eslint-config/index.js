module.exports = {
  extends: ['@antfu/eslint-config'],
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'time', 'timeEnd'] }],
  },
}
