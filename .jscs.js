module.exports = {
    excludeFiles: [
        'node_modules/**',
        'coverage/**',
        'bem-naming.min.js'
    ],
    requireCurlyBraces: ['if', 'else', 'for', 'while', 'do', 'try', 'catch', 'case', 'default'],
    requireSpaceAfterKeywords: ['if', 'else', 'for', 'while', 'do', 'switch', 'return', 'try', 'catch'],
    requireSpaceBeforeBinaryOperators: [
        '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
        '&=', '|=', '^=', '+=',

        '+', '-', '*', '/', '%', '<<', '>>', '>>>', '&',
        '|', '^', '&&', '||', '===', '==', '>=',
        '<=', '<', '>', '!=', '!=='
    ],
    requireSpacesInConditionalExpression: true,
    requireSpaceAfterBinaryOperators: true,
    disallowSpacesInsideParentheses: true,
    disallowSpaceBeforePostfixUnaryOperators: true,
    disallowSpaceAfterPrefixUnaryOperators: true,
    disallowSpaceBeforeBinaryOperators: [',', ':'],
    disallowKeywords: ['with'],
    disallowKeywordsOnNewLine: ['else', 'catch'],
    requireSpacesInFunctionExpression: {
        beforeOpeningCurlyBrace: true
    },
    requireSpacesInAnonymousFunctionExpression: {
        beforeOpeningRoundBrace: true
    },
    disallowSpacesInNamedFunctionExpression: {
        beforeOpeningRoundBrace: true
    },

    disallowYodaConditions: true,
    safeContextKeyword: '_this',
    requireCapitalizedConstructors: true,
    requireCommaBeforeLineBreak: true,

    disallowEmptyBlocks: true,
    disallowMultipleLineBreaks: true,
    disallowMixedSpacesAndTabs: true,
    disallowTrailingWhitespace: true,

    validateQuoteMarks: '\'',
    maximumLineLength: 120,
    requireLineFeedAtFileEnd: true,
    validateLineBreaks: 'LF'
};