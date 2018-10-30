import { compile, parseComponent } from 'vue-template-compiler'
import stripWith from 'vue-template-es2015-compiler'
import * as prettier from 'prettier/standalone'
import * as babylon from 'prettier/parser-babylon'

function toFunction(strip, code, name = '()', stripWithFunctional) {
  code = `function ${name} { ${code} }`

  return strip ? stripWith(code, { transforms: { stripWithFunctional } }) : code
}

export function createInternationalisationPlugin(lang, translations = {}) {
  const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
  const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
  
  const buildRegex = delimiters => {
    const open = delimiters[0].replace(regexEscapeRE, '\\$&')
    const close = delimiters[1].replace(regexEscapeRE, '\\$&')
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  }
  
  function parseText (text, delimiters = ['{{', '}}']){
    const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
    if (!tagRE.test(text)) {
      return
    }
    const tokens = []
    const rawTokens = []
    let lastIndex = tagRE.lastIndex = 0
    let match, index, tokenValue
    while ((match = tagRE.exec(text))) {
      index = match.index
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index))
        tokens.push(JSON.stringify(tokenValue))
      }
      // tag token
      const exp = match[1].trim()
      tokens.push(`_s(${exp})`)
      rawTokens.push({ '@binding': exp })
      lastIndex = index + match[0].length
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex))
      tokens.push(JSON.stringify(tokenValue))
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }
  
  function findTranslation(text) {
    const query = text.trim()
    const matches = translations[query]
    if (matches) {
      const match = matches[lang] || query
  
      return text.replace(query, match)
    }
  
    return text
  }

  return function postTransformNode(el) {
    if (el.type === 2) {
      el.text = findTranslation(el.text)
      const { expression, tokens } = parseText(el.text)
      el.expression = expression
      el.tokens = tokens
    }
    if (Array.isArray(el.children)) {
      el.children.map(postTransformNode)
    }
  }
}

export function createTestPlugin(attrName = 'data-test') {
  return function postTransformNode(el){
    if (el.attrs) {
      const attrs = el.attrs.filter(({ name }) => name !== attrName)

      if (attrs.length) el.attrs = attrs
      else delete el.attrs
    }

    if (Array.isArray(el.children)) {
      el.children.map(postTransformNode)
    }
  }
}

export function compileTemplate(template, options = {}) {
  options = { optimize: true, stripWith: true, ...options }

  const { render, staticRenderFns } = compile(template.content, options)
  const code = `export ${toFunction(
    options.stripWith, 
    render, 
    `render(${template.attrs.functional ? '_h,_vm' : ''})`, 
    template.attrs.functional || false
  )}\n` + 
  `export const staticRenderFns = [${staticRenderFns.map((fn, i)=> toFunction(options.stripWith, fn, `_${i} ()`)).join(', ')}]`

  return prettier.format(code, { parser: 'babylon', plugins: [ babylon ], printWidth: 40 })
}
