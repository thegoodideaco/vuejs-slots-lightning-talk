<template>
  <div class="second-section">

    <div v-if="section===2">
      <div v-if="step < 7">
        I'm just a lonely page with nothing on it :(
      </div>

      <div v-else>
        <simple-button></simple-button>
        Hey look a button :)
      </div>
    </div>

    <div v-else-if="section===3">
      <div>
        <div v-if="step < 4">
          <simple-button></simple-button>
          Hey look a button :)
        </div>

        <div v-else-if="step < 6">
          <simple-button>Button 1</simple-button>
          <simple-button>Button 2</simple-button>
          <simple-button>Button 3</simple-button>
          <simple-button>Button 4</simple-button>
          <simple-button>Button 5</simple-button>
        </div>
        <div v-else>
          <simple-button-with-slot>Button 1</simple-button-with-slot>
          <simple-button-with-slot>Button 2</simple-button-with-slot>
          <simple-button-with-slot>Button 3</simple-button-with-slot>
          <simple-button-with-slot>Button 4</simple-button-with-slot>
          <simple-button-with-slot>Button 5</simple-button-with-slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimpleButton from '@/components/SimpleButton.vue'
import SimpleButtonWithSlot from '@/components/finished/SimpleButton.vue'
export default Vue.extend({
  props: ['step'],
  components: {
    SimpleButton,
    SimpleButtonWithSlot
  },
  computed: {
    section(): number {
      return this.$store.state.section
    },
    part(): number {
      let p = 1

      if (this.section === 2 && this.step > 6) {
        p = 2
      } else if (this.section === 3) {
        if (this.step < 3) {
          p = 3
        }
      } else {
        p = 0
      }

      return p
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
