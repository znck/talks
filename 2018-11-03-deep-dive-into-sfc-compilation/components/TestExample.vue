<template>
  <Window>
    <template slot="title">
      Demo: Test IDs

      <select v-model="enable">
        <option :value="true">(Remove)</option>
        <option :value="false">(Keep)</option>
      </select>
    </template>
    <CodePreview language="javascript">{{ output }}</CodePreview>
  </Window>
</template>

<script>
import { parseComponent } from 'vue-template-compiler'
import { compileTemplate, createTestPlugin } from './compilers.js'
import component from './componentCompiler.js'

export default {
  name: 'TestExample',
  extends: component,
  props: {
    code: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      enable: false
    }
  },

  computed: {
    output () {
      const { template } = parseComponent(this.code)
      const postTransformNode = this.enable ? createTestPlugin() : undefined

      return compileTemplate(template, { modules: { postTransformNode } })
    }
  }
}
</script>
