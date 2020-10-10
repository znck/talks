<script>
import { provide } from 'vue'
import { CURRENT_USER } from './constants'

export default {
  setup() {
    provide(CURRENT_USER, {
      id: 1,
      name: 'Jane Doe',
      photo: '/user/photo/1.jpg',
    })
  },
}
</script>

<template>
  <RouterView />
</template>
