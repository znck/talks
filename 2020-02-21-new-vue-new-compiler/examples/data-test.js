const template = `
<button data-test="button">
  🗣 Say Hi!
</button>
`

const { baseCompile } = require('@vue/compiler-core')

function removeDataTestAttrs(node) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */
        ? prop.name !== 'data-test'
        : true
    )
  }
}

const result = baseCompile(template, {
  mode: 'module',
  nodeTransforms: [removeDataTestAttrs],
})

console.log(result.code)

/*

import { openBlock, createBlock } from "vue"

export function render(_ctx, _cache) {
  return (openBlock(), createBlock("button", null, " 🗣 Say Hi! "))
}

*/
