<script lang="ts">
import LoginForm from './LoginForm.vue'
export default {
  components: { LoginForm },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      fetch('/login', {
        /* ... */
      })
    },
  },
}
</script>

<template>
  <LoginForm
    v-model:username="username"
    v-model:password="password"
    @login="login"
  />
</template>
