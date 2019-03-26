<template>
  <Slide class="title-slide" dark>
    <div class="container">
      <h2 class="subtitle">Demystifying - The Dark Art of</h2>
      <h1 class="title">SFC Compilation</h1>
    </div>
  </Slide>
</template>

<script>
export default {
  props: {
    alternate: Boolean
  }
};
</script>

<style scoped>
.title-slide {
  padding: 10%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/demystify.jpg");
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
}

.container {
  text-shadow: 4px -4px 8px rgba(0, 0, 0, .87);
}

.title {
  color: var(--slide--title--Color);
  color: white;
  white-space: nowrap;
  font-size: 10kem;
}

.subtitle {
  color: var(--slide--title--Color);
  margin-bottom: -2em;
  white-space: nowrap;
  font-size: 4kem;
}
</style>
