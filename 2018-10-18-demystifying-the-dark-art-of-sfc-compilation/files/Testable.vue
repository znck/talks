<template>
  <div class="button" role="button" data-test="button">
    <span data-test="left">Left</span>
    <slot>
      <span data-test="content">Button</span>
    </slot>
    <span data-test="right">Right</span>
  </div>
</template>
