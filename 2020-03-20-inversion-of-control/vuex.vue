<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState(['tasks']),
  methods: mapAction(['toggleComplete']),
}
</script>

<template>
  <ul>
    <li v-for="task of tasks" :key="task.id">
      <label>
        <input
          type="checkbox"
          :checked="task.done"
          @change="toggleComplete(task)"
        />
        {{ task.text }}
      </label>
    </li>
  </ul>
</template>
