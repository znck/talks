<template>
  <Slide>
    <Fit>
      <Title>
        <slot name="title">
          {{ title }}
        </slot>
      </Title>
      <slot />
    </Fit>
  </Slide>
</template>

<script>
export default {
  props: ['title']
}
</script>
