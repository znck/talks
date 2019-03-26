<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="greeting">
    Hello {{ name }}!
  </div>
</template>

<style>
.greeting {
  color: rgba(0, 0, 0, 0.87);
}
</style>
