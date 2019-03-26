const script = {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}

const style = document.createElement('style')

style.innerText = `
.greeting[data-v-ae42sf] {
  color: rgba(0, 0, 0, 0.87);
}
`

document.head.appendChild(style)

const render = function render(h) {
  return h(
    'div', 
    { staticClass: 'greeting' }, 
    [`\n  Hello ${this.name}!\n`]
  )
}

script.render = render

export default script
