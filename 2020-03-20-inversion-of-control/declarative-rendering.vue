<script>
export default {
  data() {
    return {
      tasks: [/* ... */],
    }
  },
}
</script>

<template>
  <ul>
    <li v-for="task of tasks">
      {{ task }}
    </li>
  </ul>
</template>
