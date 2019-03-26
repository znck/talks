<template>
  <Slide class="section-slide" :class="size" v-bind="$attrs">
    <h2>
      <slot>{{ title }}</slot>
    </h2>
  </Slide>
</template>

<script>
import SidebarSlide from './SidebarSlide.vue'

export default {
  inheritAttrs: false,
  components: {
    SidebarSlide,
  },
  props: ['title', 'size'],
}
</script>

<style scoped>
.section-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8kem;
}

.small {
  font-size: 4kem;
}

.small > h2 {
  padding-bottom: 2em;
}
</style>
