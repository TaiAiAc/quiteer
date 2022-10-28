module.exports = {
  extends: ['@antfu/eslint-config'],
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'time', 'timeEnd'] }],
    'comma-dangle': ['error', 'never'],
    'vue/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'never']
  }
}
