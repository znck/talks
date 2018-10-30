<template>
  <div>
    <p>Hello {{ name }}!</p>

    <p>
      This is a <em>static sub tree</em>.
    </p>
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
