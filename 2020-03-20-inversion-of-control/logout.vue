<script>
import { inject } from 'vue'
import { CURRENT_USER } from './constants'

export default {
  setup() {
    const user = inject(CURRENT_USER)

    return { user }
  },
}
</script>

<template>
  <RouterLink v-if="user" :to="{ name: 'profile', params: { id: user.id } }">
    {{ user.name }}
  </RouterLink>
  <RouterLink v-else :to="{ name: 'login' }">Login</RouterLink>
</template>
