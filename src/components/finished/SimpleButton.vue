<template>
  <button class="simple-button">
    <slot>Click Me</slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      pressed: false
    }
  }
})
</script>