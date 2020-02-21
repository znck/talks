const AST = {
  type: 'component',
  name: 'HelloWorld',
  props: [
    {
      type: 'directive',
      name: 'directive',
      arg: {
        type: 'expression',
        content: 'prop',
        isStatic: true,
      },
      exp: {
        type: 'expression',
        content: 'value',
      },
      modifiers: ['modifier'],
    },
  ],
}
