<template>
  <Slide>
    <SplitPane :vertical="vertical">
      <slot />
    </SplitPane>
  </Slide>
</template>

<script>
export default {
  props: {
    vertical: Boolean
  }
}
</script>
