<template>
  <div class="progress-bar">
    <span v-for="item in routeChildren"
          :key="item.index"
          :class="{active: item.index === activeSection}">
      {{item.percent}}
    </span>
  </div>
</template>

<script lang="ts">

interface RouteChild {
  index: number,
  completed: boolean,
  percent: number
}

import Vue from 'vue'
import VueRouter from 'vue-router/types'
import { mapState, mapGetters } from 'vuex'
import { get } from 'lodash'
export default Vue.extend({
  computed: {
    routeChildren(): RouteChild[] {
      const v = get(this.$router, 'options.routes', []) as any[]

      // filter only the section routes
      return v.find((f) => {
        return f.path === '/section'
      }).children.map((vv: any) => {

        const index: number = parseInt(vv.path, 10)
        let completed: boolean = this.activeSection > index
        let percent: number | null = 0

        // Passed
        if (index < this.activeSection) {
          completed = true
          percent = 1
          // Current
        } else if (index === this.activeSection) {
          completed = false
          percent = this.sectionCompletion
        }
        const r: RouteChild = {
          index,
          completed,
          percent
        }
        return r
      })
    },
    activeSection(): number {
      return this.$store.state.section
    },
    ...mapState([
      'section',
      'currentStep',
      'totalSteps'
    ]),
    sectionCompletion(): number {
      return this.$store.getters.sectionCompletion
    }
  }
})
</script>


<style scoped lang="scss">
.progress-bar {
  flex: 1 0 auto;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > span {
    &.active {
      color: blue;
    }
  }
}
</style>
