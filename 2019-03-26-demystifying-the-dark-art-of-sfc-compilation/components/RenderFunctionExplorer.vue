<template>
  <Window v-on="$listeners">
    <template slot="title">
      <slot name="title">
        <slot>Render Function</slot>

        <select v-model="optimize">
          <option :value="true">(optimized)</option>
          <option :value="false">(unoptimized)</option>
        </select>
      </slot>
    </template>
    
    <CodePreview language="javascript">{{ output }}</CodePreview>
  </Window>
</template>

<script>
import { parseComponent } from 'vue-template-compiler'
import { compileTemplate } from './compilers.js'
import compiler from './componentCompiler.js'

export default {
  name: 'RenderFunctionExplorer',
  extends: compiler,
  props: {
    code: {
      type: String,
      required: true
    },
    stripWith: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      optimize: true
    }
  },

  computed: {
    output () {
      const { template } = parseComponent(this.code)
      
      return compileTemplate(template, { optimize: this.optimize, stripWith: this.stripWith })
    }
  }
}
</script>
