<template>
  <TestComponent v-slot="{ name }">
    <template>Bye {{ name }}</template>
  </TestComponent>

  <TestComponent>
    <template v-slot="{ name }">Bye {{ name }}</template>
    <template v-slot:one="props">Hello {{ props.name }}</template>
    <template v-slot:two="{ name }">Hello {{ name }}</template>
    <template v-slot:[dynamicSlot1]="props">Hello {{ props.name }}</template>
    <div>I'm just here.</div>
  </TestComponent>

  <TestComponent #="{ name }">
    <template>Bye {{ name }}</template>
  </TestComponent>

  <TestComponent>
    <template #default="{ name }">Bye {{ name }}</template>
    <template #one="props">Hello {{ props.name }}</template>
    <template #two="{ name }">Hello {{ name }}</template>
    <template #[dynamicSlot1]="props">Hello {{ props.name }}</template>
  </TestComponent>
</template>
