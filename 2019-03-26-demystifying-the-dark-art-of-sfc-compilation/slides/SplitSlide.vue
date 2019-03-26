<template>
  <Slide :class="title && 'has-title'" v-bind="$attrs">
    <SplitPane :vertical="vertical">
      <slot/>
    </SplitPane>
    <h2 class="title" v-if="title">
      <slot name="title">
        {{ title }}
      </slot>
    </h2>
  </Slide>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    vertical: Boolean,
    title: [Boolean, String],
  },
}
</script>

<style>
.has-title > .split-pane {
  height: 92%;
}
</style>

<style scoped>
.title {
  position: absolute;
  bottom: 0;
  left: 1em;
}

.title::before {
  content: '🌟';
  font-size: 1.2em;
  line-height: .75;
}
</style>