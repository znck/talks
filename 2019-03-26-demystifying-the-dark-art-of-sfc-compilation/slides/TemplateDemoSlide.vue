<template>
  <SplitSlide title>
    <template #title>
      {{ title }}
      <img src="../assets/live.gif" class="live" />
    </template>
    <SplitPane vertical>
      <FileBrowserWindow :files="files" :active="active" @pick="file = $event" />
      <ComponentPreview :component="component" />
    </SplitPane>
    <component :is="explorer" v-if="file" :code="file.content" :component.sync="component">
      {{ title }}
    </component>
  </SplitSlide>
</template>
<script>
import SplitSlide from './SplitSlide.vue'

export default {
  components: {
    SplitSlide
  },
  props: {
    title: String,
    files: Array,
    active: String,
    explorer: {
      type: String,
      default: 'RenderFunctionExplorer'
    }
  },

  data() {
    return {
      component: null,
      file: null
    }
  }
}
</script>

<style scoped>
.live {
  width: 8kem;
  position: absolute;
  left: 24kem;
  bottom: -2kem;
}
</style>
