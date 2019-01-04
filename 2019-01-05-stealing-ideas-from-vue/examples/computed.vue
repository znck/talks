<script>
export default {
  data: () => ({
    firstName: 'Jane',
    lastName: 'Doe'
  }),

  computed: {
    name() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>