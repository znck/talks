<template>
  <div class="slide" :class="{ dark }">
    <slot />

    <footer class="footer">
      {{ current + 1 }} | SFC Compilation |  
      VueFes 2018 |
      <img src="../assets/znck.jpg" alt="(Rahul Kadyan)" class="avatar small" hidden><a href="https://znck.me" target="_blank"> Rahul Kadyan (@znck0)</a>
      <div class="progress">
        <div class="track" :style="{ width: completed + '%' }" />
      </div>
    </footer>
  </div>
</template>

<script>
let store

window.onhashchange = () => {
  const page = parseInt(window.location.hash.substr(1))

  if (!Number.isNaN(page) && store.state.control.current !== page) {
    store.dispatch('control:go', page - 1)
  }
}

export default {
  props: {
    dark: Boolean
  },
  computed: {
    completed () {
      let slide = 1

      if (this.$store.state.control.currentMaxStep) {
        slide = (this.$store.state.control.currentStep + 1) / (this.$store.state.control.currentMaxStep + 1)
      }

      return (this.$store.state.control.current + slide) / this.$store.state.slides.length * 100
    },
    current() {
      return this.$store.state.control.current
    }
  },

  created () {
    store = this.$store
  },
  watch: {
    current: {
      immediate: true,
      handler (value) {
        window.location.hash = value + 1
      }
    }
  }
}
</script>



<!-- Global CSS -->
<style>
@import './variables.css';

html {
  font-family: "Inter UI"; 
}

* {
  color: var(--text-dark);
}
</style>

<style scoped>
.slide {
  --slide-gray: #ccc;
  --slide-text-color: black;
  background-color: white;
  padding: 2rem 2rem 3rem;
}

.slide.dark {
  --slide-gray: #666;
  --slide-text-color: white;
  background-color: black;
  color: white;
}

.slide.dark * {
  color: white;
}

.footer {
  color: var(--slide-text-color);
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  text-align: right;
  line-height: 1.5;
  font-size: 1rem;
  padding: 0;
}

.footer a {
  color: var(--slide-text-color);
  text-decoration: none;
}

.avatar {
  border-radius: 50%;
}

.avatar.small {
  width: 1.2em;
  height: 1.2em;
  margin-bottom: -0.25em;
}

.progress {
  --progress-size: 0.1325rem;
  display: block;
  width: 100%;
  height: var(--progress-size);
  border-radius: var(--progress-size);
  background: var(--slide-gray);
  position: relative;
}

.progress .track {
  display: block;
  height: var(--progress-size);
  background: var(--color-primary);
  position: absolute;
  border-radius: var(--progress-size);
}
</style>
