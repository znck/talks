<template>
  <Slide class="clear-padding">
    <div class="container">
      <div class="sidebar" :class="{ 'clear-padding': sidebarNoPadding }">
        <slot name="aside" />
      </div>
      <div class="content" :class="{ 'clear-padding': contentNoPadding }">
        <slot />
      </div>
    </div>
  </Slide>
</template>

<script>
export default {
  props: {
    sidebarNoPadding: Boolean,
    contentNoPadding: Boolean
  }
}
</script>

<style scoped>
.clear-padding {
  padding: 0 !important;
}

.container {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 30%;
  background: black;
  padding: 2rem;
}

.content {
  flex: 1;
  padding: 2rem 3rem;
}
</style>
