import {
  createVNode,
  Fragment,
  openBlock,
  createBlock,
} from 'vue'

export function render(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      Fragment,
      null,
      [
        createVNode('h1', null, 'Hello 👋'),
        createVNode('p', null, 'Welcome to VueAmsterdam'),
      ],
      64 /* STABLE_FRAGMENT */
    )
  )
}
