<template>
  <div class="progress-bar">
    hello routes: {{routeChildren}}
    <test-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'node_modules/vue-router/types'
import { mapState, mapGetters } from 'vuex'
import { get } from 'lodash'
export default Vue.extend({
  components: {
    TestComponent: () => import('@/components/TopHeader.vue')
  },
  props: ['hello'],
  computed: {
    routeChildren(): any[] {
      const v = get(this.$router, 'options.routes', []) as any[]
      return v.find((f) => {
        return f.path === '/section'
      }).children.map((vv: any) => {

        const index: number = parseInt(vv.path, 10)
        const completed: boolean = this.activeSection > index
        const percent: number | null = this.activeSection > index ? this.$store.getters.sectionCompletion : 0
        return {
          index,
          completed,
          percent
        }
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
    ...mapGetters([
      'sectionCompletion'
    ])
  }
})
</script>


<style scoped lang="scss">
.progress-bar {
  flex: 1 0 auto;
  margin-left: 25px;
}
</style>
