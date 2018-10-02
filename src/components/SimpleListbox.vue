<template>
  <ul class="list-box">
    <li v-for="(item, index) in items"
        :key="index">
      <slot>List Item</slot>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SimpleListbox',
  props: {
    items: { type: Array }
  }
})
</script>


<style>
</style>
