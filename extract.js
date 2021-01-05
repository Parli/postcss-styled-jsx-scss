"use strict"

const STYLE_LITERAL = /(?<open>css`)(?<content>[^`]*)/g

const toStyle = (match) => {
  const { open, content } = match.groups
  const startIndex = match.index + open.length

  return {
    lang: "scss",
    content,
    startIndex,
  }
}

const extract = (source, opts) =>
  Array.from(source.matchAll(STYLE_LITERAL), toStyle)

module.exports = extract
