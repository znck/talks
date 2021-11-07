<script>
export default {
  data: () => ({
    message: 'Hello Vue.js!'
  }),
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
