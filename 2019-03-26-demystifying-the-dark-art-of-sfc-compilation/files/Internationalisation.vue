<template>
  <div class="greeting">
    Hello {{ name }}! How are you?
  </div>
</template>

<i18n lang="json">
{ 
  "Hello {{ name }}! How are you?": {
    "es": "Hola {{ name }}! ¿Cómo estás?",
    "hi": "{{ name }} नमस्ते! क्या हाल है?"
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
