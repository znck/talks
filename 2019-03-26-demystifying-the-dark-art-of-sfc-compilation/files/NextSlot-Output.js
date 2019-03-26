import {
  createFragment,
  createComponentVNode,
  resolveComponent,
  createTextVNode,
  createElementVNode,
} from 'vue'

const __vue_static_tree_0__ = createElementVNode(
  /* tag = */ 'div',
  /* data = */ null,
  /* children = */ createTextVNode("I'm just here."),
  /* childrenFlag = */ 10,
  /* key = */ null,
  /* ref = */ null
)

export default function render() {
  const vm = this
  return createFragment(
    /* children = */ [
      createComponentVNode(
        /* tag = */ resolveComponent(vm, 'TestComponent'),
        /* data = */ null,
        /* children = */ {
          default: ({ name }) =>
            createFragment(
              /* children = */ [createTextVNode('Bye '), createTextVNode(name)],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
        },
        /* childrenFlag = */ 48,
        /* key = */ undefined,
        /* ref = */ undefined
      ),
      createComponentVNode(
        /* tag = */ resolveComponent(vm, 'TestComponent'),
        /* data = */ null,
        /* children = */ {
          default: ({ name }) =>
            createFragment(
              /* children = */ [createTextVNode('Bye '), createTextVNode(name)],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
          one: props =>
            createFragment(
              /* children = */ [
                createTextVNode('Hello '),
                createTextVNode(props.name),
              ],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
          two: ({ name }) =>
            createFragment(
              /* children = */ [
                createTextVNode('Hello '),
                createTextVNode(name),
              ],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
          [vm.dynamicSlot1]: props =>
            createFragment(
              /* children = */ [
                createTextVNode('Hello '),
                createTextVNode(props.name),
              ],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
        },
        /* childrenFlag = */ 48,
        /* key = */ undefined,
        /* ref = */ undefined
      ),
      createComponentVNode(
        /* tag = */ resolveComponent(vm, 'TestComponent'),
        /* data = */ null,
        /* children = */ {
          default: ({ name }) =>
            createFragment(
              /* children = */ [createTextVNode('Bye '), createTextVNode(name)],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
        },
        /* childrenFlag = */ 48,
        /* key = */ undefined,
        /* ref = */ undefined
      ),
      createComponentVNode(
        /* tag = */ resolveComponent(vm, 'TestComponent'),
        /* data = */ null,
        /* children = */ {
          default: ({ name }) =>
            createFragment(
              /* children = */ [createTextVNode('Bye '), createTextVNode(name)],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
          one: props =>
            createFragment(
              /* children = */ [
                createTextVNode('Hello '),
                createTextVNode(props.name),
              ],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
          two: ({ name }) =>
            createFragment(
              /* children = */ [
                createTextVNode('Hello '),
                createTextVNode(name),
              ],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
          [vm.dynamicSlot1]: props =>
            createFragment(
              /* children = */ [
                createTextVNode('Hello '),
                createTextVNode(props.name),
              ],
              /* childrenFlag = */ 12,
              /* key= */ null
            ),
        },
        /* childrenFlag = */ 48,
        /* key = */ undefined,
        /* ref = */ undefined
      ),
    ],
    /* childrenFlag = */ 12,
    /* key= */ null
  )
}
