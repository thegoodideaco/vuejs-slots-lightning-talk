<template>
  <div class="multiple-slot-section">

    <div v-if="step < 5">
      <h1>Multiple Slots in a nutshell</h1>
      <img src="@/assets/images/nut2.png">
    </div>

      <div v-else-if="step < 8">
        Just a lonely page
      </div>

      <div v-else-if="step < 10">
        <simple-panel>
          Hey this is the body text
        </simple-panel>
      </div>

      <div v-else-if="step < 12">
        <simple-panel>
          Hey this is the body text
        </simple-panel>
      </div>

      <div v-else>
        <finished-simple-panel>
          <template slot="header">
            This is the new Header!
          </template>
          Hey this is the body text
        </finished-simple-panel>
      </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimplePanel from '@/components/SimplePanel.vue'
import FinishedSimplePanel from '@/components/finished/SimplePanel.vue'
export default Vue.extend({
  props: ['step'],
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
  },
  components: {
    SimplePanel,
    FinishedSimplePanel
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
