<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Page',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
