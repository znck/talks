<template>
  <div class="greeting">
    Hello {{ name }}!
  </div>
</template>

<i18n lang="json">
{ 
  "Hello {{ name }}!": {
    "es": "Hola {{ name }}!",
    "hi": "{{ name }} नमस्ते!",
    "ja": "こんにちは、{{name}}!"
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
