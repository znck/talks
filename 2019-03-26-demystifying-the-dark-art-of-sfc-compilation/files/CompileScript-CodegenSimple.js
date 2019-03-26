export function render(h) {
  return h(
    'div', 
    { staticClass: 'greeting' }, 
    [`\n  Hello ${this.name}!\n`]
  )
}
