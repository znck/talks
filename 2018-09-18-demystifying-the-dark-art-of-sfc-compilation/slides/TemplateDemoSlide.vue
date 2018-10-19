<template>
  <SplitSlide>
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
export default {
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

<style>

</style>
