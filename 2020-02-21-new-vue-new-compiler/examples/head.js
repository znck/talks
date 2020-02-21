const SFC = `
<template>
  <h1>{{ title }}</h1>
</template>

<head>
  <title>{{ title }}</title>
</head>

<script>
export default {
  data() {
    return {
      title: 'My Page',
    }
  },
}
</script>
`

const {
  baseParse,
  transform,
  generate,
  transformExpression,
  createObjectExpression,
  createObjectProperty,
} = require('@vue/compiler-core')

const { parse } = require('@vue/compiler-sfc')

function headTransform(node, context) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    return () => {
      if (!context.parent.codegenNode) {
        context.parent.codegenNode = createObjectExpression([])
      }

      const options = context.parent.codegenNode
      const option = createObjectProperty(
        node.tag,
        node.children.length === 1 ? node.children[0] : 'null'
      )

      options.properties.push(option)
    }
  }
}

const { descriptor } = parse(SFC)
const head = descriptor.customBlocks[0]

const ast = baseParse(head.content)
transform(ast, {
  prefixIdentifiers: true,
  nodeTransforms: [transformExpression, headTransform],
})
const result = generate(ast, { mode: 'module' })

console.log(result.code)

/*
import { toDisplayString } from "vue"

export function render(_ctx, _cache) {
  return {
    title: toDisplayString(_ctx.title)
  }
}
*/
