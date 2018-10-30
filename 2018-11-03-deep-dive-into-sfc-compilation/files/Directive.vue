<template>
  <div class="greeting" v-console:warn="'Name is ' + name">
    <h1>Hello {{ name }}!</h1>

    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jane Doe'
    }
  }
}
</script>
