"use strict"

const syntax = require("postcss-syntax/syntax")
const extract = require("./extract")

module.exports = syntax(extract, "jsx")
