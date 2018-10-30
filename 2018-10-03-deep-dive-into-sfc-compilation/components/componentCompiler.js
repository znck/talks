import { parseComponent } from 'vue-template-compiler'

let id = 0

export default {
  props: ['component'],

  computed: {
    build () {
      const { script, template } = parseComponent(this.code)
      const functional = template && template.attrs && template.attrs.functional || false
      const r = this.output.replace(/export/g, '')
      const js = (script && script.content ? script.content : 'export default {}').replace(/export default/, 'const __component__ = ')
      const content = `${r}\n${js}\n return Object.assign({ name: 'RuntimeComponent${++id}' }, __component__, { render, staticRenderFns, functional: ${JSON.stringify(functional)} })`
      const fn = new Function(content)

      return fn()
    }
  },

  watch: {
    build: {
      immediate: true,
      handler(component) {
        this.$emit('update:component', component)
      }
    }
  }
}