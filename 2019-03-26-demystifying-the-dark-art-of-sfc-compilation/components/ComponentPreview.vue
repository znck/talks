<template>
  <div class="wrapper">
    <div class="overflow">
      <component v-if="component" :is="component" v-bind="props" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentPreview',
  props: {
    component: {}
  },

  computed: {
    props() {
      const props = this.component && this.component.props

      if (!props) return {}

      const keys = Array.isArray(props) ? props : Object.keys(props)
      const random = ['foo', 'bar', 'baz']

      return keys.reduce((acc, key, index) => {
        acc[key] = key === 'name' ? 'Jane Doe' : random[index % random.length]

        return acc
      }, {})
    }
  }
}
</script>

<style scoped>
.wrapper {
  border: 1px dashed gray;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  overflow: hidden;
}

.overflow {
  max-height: 100%;
  max-width: 100%;
  overflow: auto;
}
</style>
