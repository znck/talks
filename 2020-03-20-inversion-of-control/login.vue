<script>
export default {
  props: {
    username: String,
    password: String,
  },
}
</script>

<template>
  <form @submit.prevent="$emit('login', { username, password })">
    <fieldset>
      <label for="username">Username</label>
      <input
        id="username"
        type="text"
        autocomplete="username"
        v-model="username"
      />
    </fieldset>

    <fieldset>
      <label for="username">Password</label>
      <input
        id="password"
        type="password"
        autocomplete="current-password"
        v-model="password"
      />
    </fieldset>

    <button type="submit">Login</button>
  </form>
</template>
