export function render(h) {
  with(this) {
    return h(
      'div', 
      { staticClass: 'greeting' }, 
      [`\n  Hello ${name}!\n`]
    )
  }
}
