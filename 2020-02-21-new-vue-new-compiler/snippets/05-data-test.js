import { openBlock, createBlock } from 'vue'

export function render(_ctx, _cache) {
  return (
    openBlock(), 
    createBlock('button', null, ' 🗣 Say Hi! ')
  )
}
