<template>
  <Window title="Scoped CSS">
    <CodePreview language="css" :code="output" />
  </Window>
</template>

<script>
import { parseComponent } from 'vue-template-compiler'
import { compileStyle } from '../node_modules/@vue/component-compiler-utils/dist/compileStyle'
import * as prettier from 'prettier/standalone'
import * as postcss from 'prettier/parser-postcss'

export default {
  name: 'StyleExplorer',
  props: {
    code: {
      type: String,
      required: true
    }
  },

  computed: {
    output () {
      const { styles } = parseComponent(this.code)
      const output = styles.map(({ content: source, scoped = false }) => compileStyle({ source, scoped, id: scoped && 'data-v-xxx' }))
      const code = output.map(style => style.code).join('\n')

      return prettier.format(code, { parser: 'css', plugins: [ postcss ], printWidth: 40 })
    }
  }
}
</script>
