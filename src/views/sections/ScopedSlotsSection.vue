<template>
  <div class="scoped-slots-section">
    <div v-if="section===8" class="centered fill flex-column">
      <div v-if="step < 4" class="fill">
        <img src="@/assets/images/gifs/mindblown1.gif">
        </div>

        <div v-else class="centered fill flex-column">
          <simple-listbox :items="[1,2,3,4,5,6,7]"></simple-listbox>
        </div>

    </div>

      <div v-else-if="section===9" class="centered fill flex-column">
        <simple-listbox v-if="step < 3"
                        :items="[1,2,3,4,5,6,7]" />

        <simple-listbox v-else
                        :items="[1,2,3,4,5,6,7]">
          <span slot-scope="item">Wtf is the item?</span>
        </simple-listbox>
      </div>

      <div v-else-if="section===10" class="centered fill flex-column">
        <simple-listbox v-if="step < 5"
                        :items="[1,2,3,4,5,6,7]">
          <span slot-scope="item">Wtf is the item?</span>
        </simple-listbox>

        <simple-listbox v-else-if="step < 7"
                        :items="[1,2,3,4,5,6,7]">
          <template slot-scope="{item}">
            Click item {{item}}
          </template>
        </simple-listbox>

        <simple-listbox v-else
                        :items="[1,2,3,4,5,6,7]">
          <template slot-scope="{item}">
            Item {{item}}
            <simple-button> Click item {{item}}</simple-button>
          </template>
        </simple-listbox>

      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimplePanel from '@/components/finished/SimplePanel.vue'
import SimpleButton from '@/components/finished/SimpleButton.vue'
import SimpleListbox from '@/components/finished/SimpleListbox.vue'
export default Vue.extend({
  props: ['step'],
  computed: {
    section(): number {
      return this.$store.state.section
    }
  },
  components: {
    SimplePanel,
    SimpleButton,
    SimpleListbox
  }
})
</script>


<style scoped lang="scss">
img {
  display: block;
  justify-self: stretch;
  margin: auto;
  height: 100%;
  width: auto;
}

.simple-list-box {
  min-width: 75%;

  /deep/ li {
    display: flex;
    align-items: center;
  }

  /deep/ .simple-button {
    margin-left: auto;
  }
}
</style>
