<script>
const getImage = require.context('../assets/', true, /\.(jpg|png)$/)

export default {
  props: ['dark', 'minion'],

  computed: {
    image() {
      if (this.minion)
        return `url(${getImage(
          `./${
            /\.(png|jpg)$/.test(this.minion)
              ? `${this.minion}`
              : `${this.minion}.jpg`
          }`
        )})`
    },
  },
}
</script>

<template>
  <div class="slide" :class="{ dark }" :style="{ 'background-image': image }">
    <slot/>
  </div>
</template>

<style scoped>
.slide {
  width: 100%;
  height: 100%;
  background-color: white;
  background-repeat: no-repeat;
}

.dark {
  background-color: transparent;
}
</style>