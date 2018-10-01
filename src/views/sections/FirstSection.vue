<template>
  <div class="first-section">
    <div v-if="step > 3 && step < 7" v-cloak>
      <h1>A Slot in a nutshell</h1>
      <img src="@/assets/images/nut1.png">
    </div>

      <div v-else-if="step > 6">
        <button>Hello</button>
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
}
</style>
