<template>
  <div class="container">
    <div class="pane">
      <RenderFunctionExplorer  :code="code" />
    </div>
    <div class="pane">
      <ComponentB :size="20" :size:m="20" />
    </div>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
import RenderFunctionExplorer from '../components/RenderFunctionExplorer.vue'
import code from '!!raw-loader!./ComponentB.vue'

export default {
  components: {
    ComponentA,
    ComponentB,
    RenderFunctionExplorer
  },
  data() {
    return {
      code
    }
  }
}
</script>

<style>
.container {
  display: flex;
}

.pane {
  margin: 64px;
  flex: 1;
}
</style>
