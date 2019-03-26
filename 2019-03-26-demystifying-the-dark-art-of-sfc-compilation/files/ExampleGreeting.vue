<script>
export default {
  props: ['name']
}
</script>

<template>
  <div class="greeting">
    Hello {{ name }}!
  </div>
</template>

<style scoped>
.greeting {
  color: green;
}
</style>
