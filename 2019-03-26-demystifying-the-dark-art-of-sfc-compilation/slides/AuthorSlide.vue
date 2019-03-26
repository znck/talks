<template>
  <SectionSlide size="small" style="text-align: center">
    <span style="color: #999">github.com/</span>znck </br>
    <span style="color: #999">twitter.com/</span>znck0 </br>
    znck.dev
  </SectionSlide>
</template>

<script>
import SidebarSlide from './SidebarSlide.vue'

export default {
  components: {
    SidebarSlide
  }
}
</script>

<style scoped>
.author {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  margin: 0;
  font-size: 3rem;
  text-align: center;
}

.about {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
}

.position {
  flex: 1;
  margin: 1.5rem;
  text-align: center;
}

.position img {
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: -0.5rem;
  object-fit: contain;
}

a {
  text-decoration: none;
}

.links {
  text-align: center;
}
</style>


