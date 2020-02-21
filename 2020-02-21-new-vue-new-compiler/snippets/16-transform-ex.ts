const node = {
  type: 'element',
  name: 'h1',
  attributes: [],
  children: [
    {
      type: 'text',
      content: 'Hello 👋',
    },
  ],
}

// <h1>Hello 👋</h1>

const code = {
  type: 'call expression',
  callee: 'createVNode',
  arguments: [
    'h1',
    { type: 'object', properties: [] },
    {
      type: 'array',
      items: [
        {
          type: 'text',
          content: 'Hello 👋',
        },
      ],
    },
  ],
}

// createVNode('h1', null, ['Hello 👋'])

function transformElement(
  node: Node,
  context: TransformContext
) {
  if (node.type !== 'element') return

  return () => {
    context.replace({
      type: 'call expression',
      callee: 'createVNode',
      arguments: [
        node.name,
        { type: 'object', properties: node.attributes },
        { type: 'array', items: node.children },
      ],
    })
  }
}

// Compiler

function compile(template) {
  const ast = parse(template)

  transform(ast, {
    nodeTransforms: [transformElement, transformVIf],
    directiveTransforms: {
      model: transformVModel,
    },
  })

  return codegen(ast)
}
