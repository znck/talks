<template>
  <section>
    <div>Lorem Ipsum Dolor</div>
    <div v-if="foo == true">Lorem Ipsum Dolor</div>
  </section>  
</template>

<script>
export default {
  props: {
    foo: String
  }
}
</script>
 