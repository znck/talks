<template>
  <div>
    <span>{{ counter }} / 1000</span>
    <span> in {{ Math.floor((Date.now() - start) / 1000) }}s</span>
    <div hidden>
      <div v-for="i in 200000" :key="i">{{ i }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      start: Date.now()
    }
  },
  created() {
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
