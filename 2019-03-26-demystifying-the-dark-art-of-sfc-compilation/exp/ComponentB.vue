<template>
  <div>
    <span>{{ counter }} / 1000</span>
    <span> in {{ Math.floor((Date.now() - start) / 1000) }}s</span>
    <div hidden v-once>
      <div v-for="i in 200000" :key="i">{{ i }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'size:m',
    'size'
  ],
  data() {
    return {
      counter: 0,
      start: Date.now()
    }
  },
  created() {
    console.log(this.$props)
    this.timer = setInterval(() => this.counter++, 10)
    setTimeout(
      () => clearInterval(this.timer),
      10000
    )
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
