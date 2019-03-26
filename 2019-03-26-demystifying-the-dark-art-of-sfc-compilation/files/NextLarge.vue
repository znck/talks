<template>
  <div foo="bar" bar>
    <test-component/>Some Text
  </div>
  <div bar="foo" v-bind="{ foo, bar }">
    <div @keypress="foo">first</div>
    <TestComponent #="{ name }">
      <template #one="props">Hello {{ props.name }}</template>
      <template #two="{ props }">Hello {{ props.name }}</template>
      <template #[dynamicSlot1]="props">Hello {{ props.name }}</template>
      <template>Bye {{ name }}</template>
    </TestComponent>
    <div v-for="(value, key) in items" @click="foo = $event.target.value">{{ value }}</div>
  </div>
  <div key="bar">second</div>
</template>