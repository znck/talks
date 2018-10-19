<template>
  <div class="window" @click.stop="() => {}">
    <div class="title-bar">
      <div class="actions">
        <div class="close" @click="$emit('close')"></div>
        <div class="minimize" @click="$emit('minimize')"></div>
        <div class="maximize" @click="$emit('maximize')"></div>
      </div>

      <div class="title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Window',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
.window {
  border: 0.0625rem solid #cfcfcf;
  border-radius: 0.25rem;
  overflow: hidden;
  zoom: 1.5;
  background: #f5f2f0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title-bar {
  border-bottom: 0.0625rem solid #cfcfcf;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
}

.title {
  text-align: center;
  padding-right: 3rem;
  font-size: 0.75rem;
  color: #333;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
}

.actions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: .75rem;
}

.actions > .close, .actions > .maximize, .actions > .minimize {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.75rem;
  display: inline-block;
  margin-right: 0.25rem;
}

.actions > .close {
  background: #ff5a52;
}

.actions > .maximize {
  background: #52c22c;
}

.actions > .minimize {
  background: #e6c029;
}

.content {
  overflow: auto;
  flex: 1;
}

select {
  background: transparent;
  border: none;
  font-size: 0.75rem;
}

select:focus {
  outline: none;
}
</style>
