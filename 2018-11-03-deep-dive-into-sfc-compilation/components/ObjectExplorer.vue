<template>
  <div class="object" :class="{ array: Array.isArray(value) }">
    <span class="type">{{ Array.isArray(value) ? `Array(${value.length})` : 'Object' }}</span>
    <div class="contents" v-if="expanded">
      <div v-for="(v, k) in value" :key="k" class="entry" :data-id="id(value)">
        <button v-if="v !== null && typeof v === 'object'" class="expand" @click="toggle(k)">{{ isExpanded(k) ? '-' : '+' }}</button>
        <div class="key">{{ k }}</div>
        <ObjectExplorer v-if="v !== null && typeof v === 'object'" :expanded="isExpanded(k)" :value="v" />
        <pre v-else class="primitive" :class="typeof v">{{ v === undefined ? 'undefined' : v === null ? 'null' : v  }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
let id = 0
const references = new WeakMap()

const ObjectExplorer = {
  name: 'ObjectExplorer',
  props: {
    value: [Object, Array],
    expanded: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  data() {
    return {
      open: ['template']
    }
  },
  beforeUpdate() {
    this.id(this.value)
  },
  created() {
    this.$options.components.ObjectExplorer = ObjectExplorer
    this.id(this.value)
  },
  methods: {
    id(key) {
      if (key === 'object' && !references.has(key)) {
        references.set(key, ++id)
      }

      return references.get(key)
    },
    isExpanded(key) {
      return this.open.indexOf(key) > -1
    },
    toggle(key) {
      if (this.isExpanded(key)) {
        this.open.splice(this.open.indexOf(key), 1)
      } else {
        this.open.push(key)
      }
    }
  }
}

export default ObjectExplorer
</script>

<style scoped>
.object, .type, .reference, .primitive {
  display: inline;
  font-size: 1.25rem;
}

.entry {
  margin-left: 1.724rem;
  position: relative;
}

.expand {
  position: absolute;
  display: inline-block;
  font-size: 1.25rem;
  top: -0.2rem;
  margin-left: -1.724rem;
  width: 1.724rem;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 0.25rem;
}

.type {
  color: #cfcfcf;
}

.expand:focus {
  outline: none;
}

.key {
  display: inline-block;
  color: dimgray;
  margin-right: 0.25rem;
}

.array > .contents > .entry > .key {
  color: cadetblue;
}

.key::after {
  content: ":";
}

.value {
  display: inline-block;
}

.primitive {
  font-family: inherit;
}

.string {
  color: forestgreen;
}

.string::before, .string::after {
  content: '"';
  color: darkgray;
}

.boolean, .number {
  color: chocolate;
}
</style>
