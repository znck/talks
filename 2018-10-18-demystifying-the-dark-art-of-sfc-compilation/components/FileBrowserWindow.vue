<template>
  <Window v-on="$listeners" v-bind="$attrs">
    <select v-if="true" slot="title" class="selector" v-model.number="index" @click.stop="() => {}">
      <option v-for="(item, i) in files" :value="i" :key="item.name">{{ item.name }}</option>
    </select>

    <CodePreview language="vue" :code="file.content" />
  </Window>
</template>

<script>
export default {
  name: 'FileBrowserWindow',
  inheritAttrs: false,
  props: {
    files: {
      type: Array,
      required: true
    },
    active: [Number, String]
  },
  data () {
    return { index: 0 }
  },
  computed: {
    file() {
      return this.files[this.index]
    }
  },
  watch: {
    file: {
      immediate: true,
      deep: true,
      handler(value) {
        this.$emit('pick', value)
      }
    },
    active: {
      immediate: true,
      handler(value) {
        if (Number.isSafeInteger(value)) {
          this.index = Math.max(0, value)
        } else {
          const name = value + '.vue'
          this.index = Math.max(0, this.files.findIndex(file => file.name === name))
        }
      }
    }
  }
}
</script>

<style scoped>
.selector {
  background: transparent;
  border: none;
  font-size: 0.75rem;
}

.selector:focus {
  outline: none;
}
</style>
