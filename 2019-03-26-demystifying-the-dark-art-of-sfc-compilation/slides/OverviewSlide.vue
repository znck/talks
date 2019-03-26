<template>
  <SidebarSlide>
    <!-- <Overview :current="step" :track="track" slot="aside" /> -->

    <div class="container">
      <Title class="title">{{ title }}</Title>

      <slot />
    </div>
  </SidebarSlide>
</template>

<script>
import SidebarSlide from './SidebarSlide.vue'

export default {
  components: {
    SidebarSlide
  },
  props: {
    title: String,
    step: Number,
    track: String
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2.5rem;
}

.title {
  margin-bottom: 0;
  font-size: 5rem;
}

.container >>> p {
  margin-block-end: 0;
}
</style>

