<template>
  <div class="panel-component-section">
    <div v-if="section===6">
      <simple-panel />
    </div>

    <div v-else>
      <simple-panel>
        <img v-if="step > 4" src="@/assets/images//gifs/buttonclick.gif">

        <div v-if="step > 5"
             slot="footer">
          <simple-button>Using</simple-button>
          <simple-button>Slots</simple-button>
          <simple-button>Is Really</simple-button>
          <simple-button>Fun!</simple-button>
        </div>
      </simple-panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimplePanel from '@/components/finished/SimplePanel.vue'
import SimpleButton from '@/components/finished/SimpleButton.vue'
export default Vue.extend({
  props: ['step'],
  computed: {
    section(): number {
      return this.$store.state.section
    }
  },
  components: {
    SimplePanel,
    SimpleButton
  }
})
</script>


<style scoped lang="scss">
.simple-panel {
  min-width: 50%;
  min-height: 50%;

  /deep/ &__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
