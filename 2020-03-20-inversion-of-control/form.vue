<script>
export default {
  props: ['errors'],
  provide() {
    return {
      errors: this.errors,
      // see provide/inject
      // reactivity.
    }
  },
}
</script>

<template>
  <form>
    <slot />
  </form>
</template>
