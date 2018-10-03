<template>
  <div class="first-section">

    <div v-if="step < 4">
        <img src="@/assets/images/gifs/1.gif">
    </div>

    <div v-else>
      <h1>A Slot in a nutshell</h1>
      <img src="@/assets/images/nut1.png">
    </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['step']
})
</script>


<style scoped lang="scss">
h1 {
  margin: 20px 0;
}

.first-section {
  display: flex;
  flex-flow: column nowrap;

  > * {
    text-align: center;
  }
}
</style>
