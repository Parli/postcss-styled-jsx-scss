"use strict"

const OPEN = "css`"
const CLOSE = "`"

function* extract(source, opts) {
  let searchStart = 0

  for (;;) {
    let startIndex = source.indexOf(OPEN, searchStart)
    if (startIndex === -1) {
      break
    }

    startIndex += OPEN.length

    let endIndex = source.indexOf(CLOSE, startIndex)
    if (endIndex === -1) {
      throw new Error(`${OPEN} with no closing ${CLOSE}`)
    }

    yield {
      lang: "scss",
      content: source.substring(startIndex, endIndex),
      startIndex,
    }

    searchStart = endIndex + CLOSE.length
  }
}

module.exports = (source, opts) =>
  [...extract(source, opts)]
