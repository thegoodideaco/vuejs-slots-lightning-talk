<template>
  <div class="second-section">

    <div v-if="step < 5">
      <h2>Multiple Simple Buttons</h2>
      <div>
        <simple-button>Button 1</simple-button>
        <simple-button>Button 2</simple-button>
        <simple-button>Button 3</simple-button>
        <simple-button>Button 4</simple-button>
        <simple-button>Button 5</simple-button>
      </div>
    </div>
    <div v-else>
      <simple-button-with-slot>
        <h3>Custom Title</h3>
      </simple-button-with-slot>
      <simple-button-with-slot><em>Italic Title</em></simple-button-with-slot>
      <simple-button-with-slot>
        <h1>Huge Title</h1>
      </simple-button-with-slot>
      <simple-button-with-slot><small>Small Title</small></simple-button-with-slot>
      <simple-button-with-slot>A Title with reallllly long text</simple-button-with-slot>
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

.second-section {
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 50px;
  }
}
</style>
