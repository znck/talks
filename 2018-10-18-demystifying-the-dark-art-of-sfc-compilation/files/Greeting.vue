<template>
  <div class="greeting">
    Hello {{ name }}!
  </div>
</template>

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

<style scoped>
.greeting {
  color: rgba(0, 0, 0, 0.87);
}
</style>

<docs>
# Greeting

A component to greet users.

``` vue
<Greeting name="Jane Doe" />
```
</docs>

<i18n lang="json">
{ 
  "Hello {{ name }}!": {
    "es": "Hola {{ name }}!",
    "hi": "{{ name }} नमस्ते!"
  }
}
</i18n>


