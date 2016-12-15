"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text"
    ],
    invalid: [
        // single match
        {
            text: "ばらで叩く",
            errors: [
                {
                    message: "「叩」は常用漢字ではありません。",
                    line: 1,
                    column: 4
                }
            ]
        },
        // multiple match
        {
            text: `薔薇で叩く`,
            errors: [
                {
                    message: "「薔」は常用漢字ではありません。",
                    line: 1,
                    column: 1
                },
                {
                    message: "「薇」は常用漢字ではありません。",
                    line: 1,
                    column: 2
                },
                {
                    message: "「叩」は常用漢字ではありません。",
                    line: 1,
                    column: 4
                }

            ]
        },

    ]
});