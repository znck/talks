import {
  createFragment,
  createElementVNode,
  createComponentVNode,
  resolveComponent,
  createTextVNode,
} from 'vue'
import { forLoop } from '@vue/compiler-runtime-helpers'

const __vue_static_tree_0__ = function($event) {
  const vm = this
  vm.foo = $event.target.value
}
const __vue_static_tree_1__ = createElementVNode(
  /* tag = */ 'div',
  /* data = */ null,
  /* children = */ createTextVNode('second'),
  /* childrenFlag = */ 10,
  /* key = */ 'bar',
  /* ref = */ null
)

export default function render() {
  const vm = this
  return createFragment(
    /* children = */ [
      createElementVNode(
        /* tag = */ 'div',
        /* data = */ { '"bar"': '', '"foo"': 'bar' },
        /* children = */ [
          createComponentVNode(
            /* tag = */ resolveComponent(vm, 'test-component'),
            /* data = */ null,
            /* children = */ null,
            /* childrenFlag = */ 1,
            /* key = */ undefined,
            /* ref = */ undefined
          ),
          createTextVNode('\n      Some Text\n    '),
        ],
        /* childrenFlag = */ 12,
        /* key = */ null,
        /* ref = */ null
      ),
      createElementVNode(
        /* tag = */ 'div',
        /* data = */ {
          '"bar"': 'foo',
          ...{ foo: vm.foo, bar: vm.bar },
        },
        /* children = */ [
          createElementVNode(
            /* tag = */ 'div',
            /* data = */ { onKeypress: vm.foo },
            /* children = */ createTextVNode('first'),
            /* childrenFlag = */ 10,
            /* key = */ null,
            /* ref = */ null
          ),
          createComponentVNode(
            /* tag = */ resolveComponent(vm, 'TestComponent'),
            /* data = */ null,
            /* children = */ {
              default: ({ name }) =>
                createFragment(
                  /* children = */ [
                    createTextVNode('Bye '),
                    createTextVNode(name),
                  ],
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
              two: ({ props }) =>
                createFragment(
                  /* children = */ [
                    createTextVNode('Hello '),
                    createTextVNode(props.name),
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
          forLoop(vm.items, (value, key) =>
            createElementVNode(
              /* tag = */ 'div',
              /* data = */ { onClick: __vue_static_tree_0__ },
              /* children = */ createTextVNode(value),
              /* childrenFlag = */ 10,
              /* key = */ null,
              /* ref = */ null
            )
          ),
        ],
        /* childrenFlag = */ 12,
        /* key = */ null,
        /* ref = */ null
      ),
      __vue_static_tree_1__,
    ],
    /* childrenFlag = */ 12,
    /* key= */ null
  )
}
