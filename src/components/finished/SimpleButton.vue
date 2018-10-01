<template>
  <button @click="$emit('click', $event)">
    <slot>
      Click Me
    </slot>
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