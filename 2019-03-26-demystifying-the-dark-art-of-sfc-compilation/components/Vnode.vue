<script>
export default {
  props: ['vnode'],
  functional: true,
  render(h, { props }) {
    return props.vnode
  }
}
</script>
