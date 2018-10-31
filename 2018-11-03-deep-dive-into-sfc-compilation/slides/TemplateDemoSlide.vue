<template>
  <Slide>
    <p class="bottom-title">
      Current Topic: <b>{{ title }}</b>
    </p>
    <SplitPane>
      <SplitPane vertical>
        <FileBrowserWindow :files="files" :active="active" @pick="file = $event" />
        <ComponentPreview :component="component" />
      </SplitPane>
      <component :is="explorer" v-if="file" :code="file.content" :component.sync="component">
        {{ title }}
      </component>
    </SplitPane>
  </Slide>
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
