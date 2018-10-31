<!-- Add attribute -->
<p v-bind:class="className" />

<!-- Attach handler -->
<button v-on:click="alert('clicked')" />

<!-- Print text -->
{{ text }}

<!-- Check condition -->
<span v-if="one" />
<span v-else-if="two" />
<span v-else />

<!-- Repeat element -->
<div v-for="i in 5" :key="i">
  loop/iteration
</div>