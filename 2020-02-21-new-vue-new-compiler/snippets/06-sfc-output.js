import script from './App.vue?block=script'
import { render } from './App.vue?block=template'
import { render as meta } from './App.vue?block=custom&index=0'

script.render = render
script.meta = meta

export default script
