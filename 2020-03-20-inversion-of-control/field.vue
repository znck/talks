<script>
export default {
  props: ['name'],
  inject: ['errors'],
}
</script>

<template>
  <fieldset>
    <slot />

    <div v-if="errors[name]" role="alert">
      {{ errors[name] }}
    </div>
  </fieldset>
</template>
