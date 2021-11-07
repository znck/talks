<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <p>Hello {{ name }}!</p>
</template>

<style>
p {
  color: blue;
}
</style>
