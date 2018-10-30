<template>
  <Window title="Abstract Syntax Tree" v-on="$listeners">
    <div class="ast">
      <ObjectExplorer :value="output.ast" />
    </div>
  </Window>
</template>

<script>
import { compile } from 'vue-template-compiler'
import { parseComponent } from 'vue-template-compiler'

export default {
  name: 'ASTExplorer',
  props: {
    code: {
      type: String,
      required: true
    }
  },

  computed: {
    output () {
      return compile(parseComponent(this.code).template.content)
    }
  }
}
</script>

<style scoped>
.ast {
  padding: 0.5rem;
}
</style>
