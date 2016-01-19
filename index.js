// 御用 ESLint 配置共享包
// http://bit.ly/1PCQY2H

module.exports = {

  'env': {
    'es6': true
  },

  'ecmaFeatures': {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'defaultParams': true,
    'destructuring': true,
    'forOf': true,
    'generators': true,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'restParams': true,
    'spread': true,
    'superInFunctions': true,
    'templateStrings': true,
    'jsx': true
  },

  'rules': {

    // POSSIBLE ERRORS
    // http://bit.ly/20beTxt

    'comma-dangle': [ 2, 'never' ],
    'no-cond-assign': [ 2, 'always' ],
    'no-console': 1,
    'no-constant-condition': 1,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [ 1, 'all' ],
    'no-extra-semi': 1,
    'no-inner-declarations': [ 2, 'both' ],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 1,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,


    // BEST PRACTISES
    // http://bit.ly/23bVQ8J

    'accessor-pairs': [ 1, { getWithoutSet: false, setWithoutGet: true } ],
    'consistent-return': 1,
    'curly': [ 1, 'all' ],
    'dot-location': [ 1, 'property' ],
    'dot-notation': [ 1, { allowKeywords: false } ],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 1,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-implicit-coercion': [ 1, { number: true, string: true, boolean: true } ],
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 1,
    'no-loop-func': 2,
    'no-magic-numbers': [ 1, { ignore: [ -1, 0, 1 ], enforceConst: true, detectObjects: true } ],
    'no-multi-spaces': 1,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 1,
    'no-new': 1,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': [ 1, { props: true } ],
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': [ 2, 'always' ],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 1,
    'no-unused-expressions': 1,
    'no-useless-call': 1,
    'no-useless-concat': 1,
    'no-void': 1,
    'no-with': 2,
    'radix': [ 1, 'as-needed' ],
    'vars-on-top': 1,
    'wrap-iife': [ 2, 'any' ],
    'yoda': [ 1, 'never' ],


    // VARIABLES
    // http://bit.ly/1SttJOF

    'no-catch-shadow': 1,
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undef': [ 2, { typeof: true } ],
    'no-unused-vars': [ 2, { vars: 'all', args: 'all' } ],
    'no-use-before-define': 2,


    // ES6
    // http://bit.ly/23bWbbE

    'arrow-body-style': [ 1, 'as-needed' ],
    'arrow-parens': [ 1, 'always' ],
    'arrow-spacing': [ 1, { before: true, after: true } ],
    'constructor-super': 2,
    'generator-star-spacing': [ 1, 'after' ],
    'no-arrow-condition': 2,
    'no-class-assign': 1,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 1,
    'object-shorthand': [ 1, 'always' ],
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-reflect': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'require-yield': 2

  }

}
