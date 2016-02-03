// 御用 ESLint 配置共享包
// https://www.npmjs.com/package/eslint-config-pwn

/* eslint-env commonjs */
/* eslint no-magic-numbers: 0, max-len: 0 */

module.exports = {

  'env' : {
    'es6' : true
  },

  'ecmaFeatures' : {
    'arrowFunctions' : true,
    'blockBindings' : true,
    'classes' : true,
    'defaultParams' : true,
    'destructuring' : true,
    'forOf' : true,
    'generators' : true,
    'modules' : true,
    'objectLiteralComputedProperties' : true,
    'objectLiteralShorthandMethods' : true,
    'objectLiteralShorthandProperties' : true,
    'restParams' : true,
    'spread' : true,
    'superInFunctions' : true,
    'templateStrings' : true,
    'jsx' : true
  },

  'rules' : {

    // POSSIBLE ERRORS
    // http://bit.ly/20beTxt

    'comma-dangle' : [ 2, 'never' ],
    'no-cond-assign' : [ 2, 'always' ],
    'no-console' : 1,
    'no-constant-condition' : 1,
    'no-control-regex' : 2,
    'no-debugger' : 1,
    'no-dupe-args' : 2,
    'no-dupe-keys' : 2,
    'no-duplicate-case' : 2,
    'no-empty-character-class' : 2,
    'no-empty' : 2,
    'no-ex-assign' : 2,
    'no-extra-boolean-cast' : 2,
    'no-extra-parens' : [ 1, 'all' ],
    'no-extra-semi' : 1,
    'no-inner-declarations' : [ 2, 'both' ],
    'no-invalid-regexp' : 2,
    'no-irregular-whitespace' : 2,
    'no-negated-in-lhs' : 2,
    'no-obj-calls' : 2,
    'no-regex-spaces' : 2,
    'no-sparse-arrays' : 1,
    'no-unexpected-multiline' : 2,
    'no-unreachable' : 2,
    'use-isnan' : 2,
    'valid-typeof' : 2,


    // BEST PRACTISES
    // http://bit.ly/23bVQ8J

    'accessor-pairs' : [ 1, { 'getWithoutSet' : false, 'setWithoutGet' : true } ],
    'consistent-return' : 1,
    'curly' : [ 1, 'all' ],
    'dot-location' : [ 1, 'property' ],
    'dot-notation' : [ 1, { 'allowKeywords' : false } ],
    'eqeqeq' : 2,
    'guard-for-in' : 2,
    'no-alert' : 1,
    'no-caller' : 2,
    'no-case-declarations' : 1,
    'no-empty-pattern' : 2,
    'no-eq-null' : 2,
    'no-eval' : 2,
    'no-extend-native' : 2,
    'no-extra-bind' : 1,
    'no-fallthrough' : 1,
    'no-floating-decimal' : 1,
    'no-implicit-coercion' : [ 1, { 'number' : true, 'string' : true, 'boolean' : true } ],
    'no-implied-eval' : 2,
    'no-invalid-this' : 2,
    'no-iterator' : 2,
    'no-labels' : 2,
    'no-lone-blocks' : 1,
    'no-loop-func' : 2,
    'no-magic-numbers' : [ 1, { 'ignore' : [ -1, 0, 1 ], 'enforceConst' : true, 'detectObjects' : true } ],
    'no-multi-spaces' : 1,
    'no-multi-str' : 2,
    'no-native-reassign' : 2,
    'no-new-func' : 2,
    'no-new-wrappers' : 1,
    'no-new' : 1,
    'no-octal-escape' : 2,
    'no-octal' : 2,
    'no-param-reassign' : [ 1, { 'props' : true } ],
    'no-proto' : 2,
    'no-redeclare' : 2,
    'no-return-assign' : [ 2, 'always' ],
    'no-script-url' : 2,
    'no-self-compare' : 2,
    'no-sequences' : 2,
    'no-throw-literal' : 1,
    'no-unused-expressions' : 1,
    'no-useless-call' : 1,
    'no-useless-concat' : 1,
    'no-void' : 1,
    'no-with' : 2,
    'radix' : [ 1, 'as-needed' ],
    'vars-on-top' : 1,
    'wrap-iife' : [ 2, 'any' ],
    'yoda' : [ 1, 'never' ],


    // VARIABLES
    // http://bit.ly/1SttJOF

    'no-catch-shadow' : 1,
    'no-delete-var' : 2,
    'no-shadow-restricted-names' : 2,
    'no-undef-init' : 2,
    'no-undef' : [ 2, { 'typeof' : true } ],
    'no-unused-vars' : [ 2, { 'vars' : 'local', 'args' : 'all' } ],
    'no-use-before-define' : 2,


    // STYLISTIC ISSUES
    // http://bit.ly/1n99BEk

    'array-bracket-spacing' : [ 1, 'always' ],
    'block-spacing' : [ 1, 'always' ],
    'brace-style' : [ 1, '1tbs', { 'allowSingleLine' : false } ],
    'camelcase' : [ 1, { 'properties' : 'always' } ],
    'comma-spacing' : [ 1, { 'before' : false, 'after' : true } ],
    'comma-style' : [ 1, 'last' ],
    'computed-property-spacing' : [ 1, 'never' ],
    'consistent-this' : [ 1, 'self' ],
    'eol-last' : [ 1, 'unix' ],
    'func-names' : 1,
    'func-style' : [ 1, 'expression', { 'allowArrowFunctions' : true } ],
    'id-length' : 0,
    'id-match' : 0,
    'indent' : [ 1, 2, { 'SwitchCase' : 1, 'VariableDeclarator' : { 'var' : 2, 'let' : 2, 'const' : 3 } } ],
    'jsx-quotes' : [ 1, 'prefer-double' ],
    'key-spacing' : [ 1, { 'beforeColon' : true, 'afterColon' : true, 'mode' : 'strict' } ],
    'linebreak-style' : [ 1, 'unix' ],
    'lines-around-comment' : 0,
    'max-depth' : 0,
    'max-len' : [ 1, 80, 2 ],
    'max-nested-callbacks' : 0,
    'max-params' : 0,
    'max-statements' : 0,
    'new-cap' : [ 1, { 'newIsCap' : true, 'capIsNew' : true } ],
    'new-parens' : 1,
    'newline-after-var' : [ 1, 'always' ],
    'no-array-constructor' : 1,
    'no-bitwise' : 1,
    'no-continue' : 0,
    'no-inline-comments' : 0,
    'no-lonely-if' : 1,
    'no-mixed-spaces-and-tabs' : 1,
    'no-multiple-empty-lines' : 0,
    'no-negated-condition' : 1,
    'no-nested-ternary' : 1,
    'no-new-object' : 1,
    'no-plusplus' : [ 1, { 'allowForLoopAfterthoughts' : true } ],
    'no-restricted-syntax' : 0,
    'no-spaced-func' : 1,
    'no-ternary' : 0,
    'no-trailing-spaces' : 1,
    'no-underscore-dangle' : 0,
    'no-unneeded-ternary' : [ 1, { 'defaultAssignment' : true } ],
    'object-curly-spacing' : [ 1, 'always' ],
    'one-var' : [ 1, 'never' ],
    'operator-assignment' : 0,
    'operator-linebreak' : [ 1, 'before' ],
    'padded-blocks' : 0,
    'quote-props' : [ 1, 'always', { 'keywords' : false } ],
    'quotes' : [ 1, 'single', 'avoid-escape' ],
    'require-jsdoc' : 0,
    'semi-spacing' : [ 1, { 'before' : false, 'after' : true } ],
    'semi' : [ 1, 'never' ],
    'sort-vars' : 0,
    'space-after-keywords' : 1,
    'space-before-blocks' : 1,
    'space-before-function-paren' : [ 1, { 'named' : 'never', 'anonymous' : 'never' } ],
    'space-before-keywords' : [ 1, 'always' ],
    'space-in-parens' : 0,
    'space-infix-ops' : 1,
    'space-return-throw-case' : 1,
    'space-unary-ops' : [ 1, { 'words' : true, 'nonwords' : false } ],
    'spaced-comment' : [ 1, 'always', { 'exceptions' : [ '-', '+' ], 'markers' : [ '/' ] } ],
    'wrap-regex' : 0,


    // ES6
    // http://bit.ly/23bWbbE

    'arrow-body-style' : [ 1, 'as-needed' ],
    'arrow-parens' : [ 1, 'always' ],
    'arrow-spacing' : [ 1, { 'before' : true, 'after' : true } ],
    'constructor-super' : 2,
    'generator-star-spacing' : [ 1, 'after' ],
    'no-arrow-condition' : 2,
    'no-class-assign' : 1,
    'no-const-assign' : 2,
    'no-dupe-class-members' : 2,
    'no-this-before-super' : 2,
    'no-var' : 1,
    'object-shorthand' : [ 1, 'always' ],
    'prefer-arrow-callback' : 1,
    'prefer-const' : 1,
    'prefer-reflect ' : 0,
    'prefer-spread' : 1,
    'prefer-template' : 1,
    'require-yield' : 2

  }

}
