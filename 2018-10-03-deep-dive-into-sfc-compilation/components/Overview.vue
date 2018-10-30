<template>
  <div>
    <div class="columns">
      <div class="column first" :class="{ active: current == 1, unvisited: current < 1 }">Single File Component</div>
    </div>

    <div class="columns">
      <div class="column" :class="{ active: current == 2, unvisited: current < 2 }">Component Parser</div>
    </div>

    <div class="columns">
      <div class="column" :class="{ active: track === 'template' && current === 3, unvisited: (track !== 'template' && track !== 'none') || current < 3 }">Template</div>
      <div class="column" :class="{ active: track === 'style' && current === 3, unvisited: (track !== 'style'  && track !== 'none') || current < 3 }">Style</div>
      <div class="column" :class="{ active: track === 'script' && current === 3, unvisited: (track !== 'script'  && track !== 'none') || current < 3 }">Script</div>
    </div>

    <div v-if="track === 'template'" key="template">
      <div class="columns template">
        <div class="column" :class="{ active: current === 4, unvisited: current < 4 }">Template Parser</div>
      </div>

      <div class="columns">
        <div class="column" :class="{ active: current === 5, unvisited: current < 5 }">Abstract Syntax Tree</div>
      </div>

      <div class="columns">
        <div class="column" :class="{ active: current === 6, unvisited: current < 6 }">Render Function</div>
      </div>

      <div class="columns">
        <div class="column" :class="{ active: current === 7, unvisited: current < 7 }">Render Function (strict mode)</div>
      </div>
    </div>

    <div v-else-if="track === 'style'" key="style">
      <div class="columns style">
        <div class="column" :class="{ active: current === 4, unvisited: current < 4 }">Scoped Styles</div>
      </div>
    </div>

    <div v-else-if="track === 'script'" key="script">
      <div class="columns script">
        <div class="column" :class="{ active: current === 4, unvisited: current < 4 }">Exports</div>
      </div>
    </div>

    <div class="columns style">
        <div class="column first" :class="{ active: current === 8, unvisited: current < 8 }">Assembler</div>
      </div>

      <div class="columns">
        <div class="column" :class="{ active: current === 9, unvisited: current < 9 }">Runtime Helper</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: String,
      default: 'none'
    },
    current: Number
  }
}
</script>

<style>
.columns {
  --column-border: white;
  --column-color: black;
  --column-background: white;
  display: flex;
}

.column {
  flex: 1;
  font-size: 1.25rem;
  padding: 0.9375rem;
  margin: 0.9375rem;
  border-radius: 0.25rem;
  color: var(--column-color);
  text-align: center;
  border: 0.0625rem solid var(--column-border);
  background: var(--column-background);
}

.inactive {
  --column-color: white;
  --column-background: transparent;
}

.unvisited {
  --column-color: rgba(255, 255, 255, 0.37);
  --column-border: rgba(255, 255, 255, 0.37);
  --column-background: transparent;
  border-style: dashed;
}

.active {
  --column-border: var(--color-primary);
  --column-color: white;
  --column-background: var(--color-primary);
  position: relative;
}

.active:not(.first)::before {
  position: absolute;
  display: inline-block;
  content: "";
  background: url("../assets/arrow-right.svg");
  transform: rotate(90deg);
  top: -2.4375rem;
  left: -0.875rem;
  width: 1.75rem;
  height: 2.5rem;
  transform: rotate(90deg);
  background-position: center;
  background-size: cover;
  margin-left: 50%;
}

.template .active::before {
  margin-left: 16.665%;
}

.style .active::before {
  margin-left: 52.665%;
}

.script .active::before {
  margin-left: 88%;
}
</style>
