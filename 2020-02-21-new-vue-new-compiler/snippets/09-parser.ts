function parse(template) {
  parseFragment(template)
}

function parseFragment(template) {
  while (template.length) {
    pareElement(template)
    parseText(template)
  }
}

function parseElement(template) {
  parseStartTag(template)
  parseFragment(template)
  parseEndTag(template)
}
