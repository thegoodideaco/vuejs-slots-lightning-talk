<template>
  <ul class="simple-list-box">
    <li v-for="(item, index) in items"
        :key="index">
      <slot v-bind="{item}">
        List Item
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Array
    }
  }
})
</script>


<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  color: #000;

  li {
    padding: 10px;
    border-bottom: 1px solid rgba(#000, 0.25);
    background-color: #fff;

    &:nth-child(even) {
      background-color: darken(#fff, 4);
    }

    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>
