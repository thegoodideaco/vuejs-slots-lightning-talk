<template>
  <div class="multiple-slot-section">

    <h1>Multiple Slots in a nutshell</h1>

    <img src="@/assets/images/nut2.png">


    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['step'],
  computed: {
    section(): number {
      return this.$store.state.section
    }
  }
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
