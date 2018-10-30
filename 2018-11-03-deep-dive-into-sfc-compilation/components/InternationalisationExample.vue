<template>
  <Window>
    <template slot="title">
      Demo: i18n

      <select v-model="lang">
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="hi">HI</option>
      </select>
    </template>
    <CodePreview language="javascript">{{ output }}</CodePreview>
  </Window>
</template>

<script>
import { parseComponent } from 'vue-template-compiler'
import { createInternationalisationPlugin, compileTemplate } from './compilers.js'
import component from './componentCompiler.js'

export default {
  name: 'InternationalisationExample',
  extends: component,
  props: {
    code: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      lang: 'en'
    }
  },

  computed: {
    output () {
      const { template, customBlocks } = parseComponent(this.code)
      const i18n = customBlocks.find(block => block.type === 'i18n')
      const translations = JSON.parse(i18n ? i18n.content || '{}' : '{}')
      const postTransformNode = createInternationalisationPlugin(this.lang, translations)

      return compileTemplate(template, { modules: { postTransformNode } })
    }
  }
}
</script>
