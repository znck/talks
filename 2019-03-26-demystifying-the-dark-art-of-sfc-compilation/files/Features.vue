<template>
  <div>
    <span>{{ expr }} interpolation</span>

    <div v-for="i in 5" :key="i">
      loop/iteration
    </div>

    <button v-on:click="alert('clicked')">event handling</button>

    <p v-bind:class="className">dynamic attributes</p>

    <span v-if="one">if condition</span>
    <span v-else-if="two">chained if condition</span>
    <span v-else></span>
  </div>
</template>
