<template>
  <Window title="Demo: Compiler Directive">
    <CodePreview language="javascript">{{ output }}</CodePreview>
  </Window>
</template>

<script>
import { parseComponent } from 'vue-template-compiler'
import { compileTemplate, createTestPlugin } from './compilers.js'
import component from './componentCompiler.js'

export default {
  name: 'CompilerDirectiveExample',
  extends: component,
  props: {
    code: {
      type: String,
      required: true
    }
  },

  computed: {
    output () {
      const { template } = parseComponent(this.code)
      function log(el, directive, warn) {
        if (!el.props) el.props = []
        el.props.push({ name: 'data-log', value: `console.${directive.arg || 'log'}(${directive.value})` })
      }

      return compileTemplate(template, { directives: { console: log } })
    }
  }
}
</script>
