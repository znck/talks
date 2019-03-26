import { normalizeEventName } from '@vue/compiler-runtime-helpers'
import { createFragment, createElementVNode } from 'vue'

export default function render() {
  const vm = this
  return createFragment(
    /* children = */ [
      createElementVNode(
        /* tag = */ 'div',
        /* data = */ {
          ...normalizeEventName(vm.someObject),
          [normalizeEventName(vm.foo)]: vm.bar,
          onFoo: vm.bar,
        },
        /* children = */ null,
        /* childrenFlag = */ 1,
        /* key = */ null,
        /* ref = */ null
      ),
      createElementVNode(
        /* tag = */ 'div',
        /* data = */ {
          ...normalizeEventName(vm.someObject),
          [normalizeEventName(vm.foo)]: vm.bar,
          onFoo: vm.bar,
        },
        /* children = */ null,
        /* childrenFlag = */ 1,
        /* key = */ null,
        /* ref = */ null
      ),
    ],
    /* childrenFlag = */ 12,
    /* key= */ null
  )
}
