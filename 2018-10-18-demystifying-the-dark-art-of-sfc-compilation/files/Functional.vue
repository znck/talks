<template functional>
  <div class="greeting" data-test="wrapper">
    Hello {{ props.name }}!
  </div>
</template>


















<script>
export default {
  props: ['name']
}
</script>