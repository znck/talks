```vue
<template>
  <p v-t="'hello'" />
</template>
```

```ts
import { h } from 'vue'
export function render(_ctx) {
  return h('p', null, ['hello'])
}
```

```ts
import { h } from 'vue'
export function render(_ctx) {
  return h('p', null, ['こんにちは'])
}
```

```ts
// messages.js
export default {
  en: {
    hello: 'hello'
  },
  ja: {
    hello: 'こんにちは'
  }
}
```

```vue
// component.vue
<template>
  <p>Hello, {{ name }}</p>
</template>
```

```ts
import { h } from 'vue'
export function render(_ctx) {
  return h('p', null, ['Hello, ', _ctx.name])
}
```

```tsx
import Component from './component.vue?internal'
export function render({ name }: typeof Component) {
  return <p>Hello, { name }</p>
}
```
