<template>
  <div class="second-section">

    <div v-if="section===2">
      <div v-if="step < 3">
        <img src="@/assets/images/gifs/buttonclick.gif">
      </div>

        <div v-else>
          <h2>My Simple Button</h2>
          <simple-button></simple-button>
        </div>
      </div>

      <div class="flex-column centered"
           v-else-if="section===3">

        <div v-if="step < 3">
          <h2>My Simple Button</h2>
          <simple-button></simple-button>
        </div>

        <div v-else-if="step < 4">
          <h2>Multiple Simple Buttons</h2>
          <simple-button>Button 1</simple-button>
          <simple-button>Button 2</simple-button>
          <simple-button>Button 3</simple-button>
          <simple-button>Button 4</simple-button>
          <simple-button>Button 5</simple-button>
        </div>

        <div v-else
             class="flex-column">
          <img src="@/assets/images/gifs/wtf.gif">
          <div>
            <simple-button>Button 1</simple-button>
            <simple-button>Button 2</simple-button>
            <simple-button>Button 3</simple-button>
            <simple-button>Button 4</simple-button>
            <simple-button>Button 5</simple-button>
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

img {
  margin-bottom: 25px;
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

img {
  width: auto;
  margin: auto;
  margin-bottom: 25px;
}
</style>
