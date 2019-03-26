export function render() {
  var h = this.$createElement
  
  return h(
    'div', 
    { staticClass: 'greeting' }, 
    [
      this._v(
        '\n  Hello ' + 
        this._s(this.name) + 
        '!\n'
      ),
    ]
  )
}
