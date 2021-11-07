<script>
import { defineComponent, ref, computed } from "vue"

export default defineComponent({
  setup() {
    const message = ref("Hello Vue.js!")
    const reverseMessage = computed(() =>
      message.value.split("").reverse().join(""),
    )

    return { message, reverseMessage }
  },
})
</script>
