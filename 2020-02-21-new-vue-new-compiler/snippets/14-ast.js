const AST = {
  type: 'element',
  name: 'p',
  children: [
    {
      type: 'expression',
      content: 'Hello ',
      isStatic: true,
    },
    {
      type: 'expression',
      content: ' name ',
      isStatic: false,
    },
    {
      type: 'expression',
      content: '!',
      isStatic: true,
    },
  ],
}
