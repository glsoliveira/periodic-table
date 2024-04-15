module.exports = { 
  parser: '@typescript-eslint/parser', 
  extends: [ 
    'plugin:@typescript-eslint/recommended', // Uses recommended rules from @typescript-eslint/eslint-plugin
    'prettier' // Add prettier for code formatting 
  ],
  parserOptions: {
    ecmaVersion: 2022, 
    sourceType: 'module', 
  },
};