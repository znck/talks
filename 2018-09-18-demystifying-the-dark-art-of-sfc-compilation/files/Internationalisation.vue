<template>
  <div class="greeting">
    Hello {{ name }}!
  </div>
</template>

<i18n lang="json">
{ 
  "Hello {{ name }}!": {
    "es": "Hola {{ name }}!",
    "hi": "{{ name }} नमस्ते!"
  }
}
</i18n>

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
