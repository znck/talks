<template functional>
  <div class="split-pane" :class="{ vertical: props.vertical }">
    <div class="pane" v-for="(vnode, index) in children" 
      :key="index" 
      :style="index === props.activeIndex ? { flex: children.length * props.activeWidth } : {}">
      <Vnode :vnode="vnode" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    vertical: Boolean,
    activeIndex: Number,
    activeWidth: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style scoped>
.split-pane {
  --column-inset: 0.5rem;
  --column-outset: -0.5rem;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: var(--column-outset);
}

.split-pane.vertical {
  flex-direction: column;
  height: auto;
}

.pane {
  display: flex;
  overflow: auto;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: var(--column-inset);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.35s;
}

.pane > * {
  flex: 1;
  width: 100%;
}
</style>
