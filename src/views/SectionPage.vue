<template>
  <div class="section__page">

    <!-- Markdown -->
    <markdown-display :content="test"
                      :step="$store.state.currentStep-1"
                      :key="$store.state.section" />

    <!-- Main Content Container -->
    <div class="main__display__content">

      <router-view class="fill" />
    </div>
  </div>
</template>

<script lang="ts">
import marked from 'marked'
import { Component, Vue } from 'vue-property-decorator'
import BasicSlotExample from '@/components/BasicSlotExample.vue'
import MarkdownDisplay from '@/components/MarkdownDisplay.vue'
// import output from '@/'
// tslint:disable-next-line:no-var-requires



export default Vue.extend({
  components: {
    BasicSlotExample,
    // TopHeader,
    MarkdownDisplay
  },
  props: ['section'],
  data() {
    return {
      test: undefined as string | undefined,
      step: 0
    }
  },
  // mounted() {
  //   this.$store.commit('reset')
  //   this.$http('/markdown/sections/1/1.md').then((res) => {
  //     this.test = marked.parse(res.data)
  //   })
  // },
  watch: {
    '$store.state.section': {
      handler(val: number) {
        console.log('reloading markdown')
        this.test = ''
        this.$http(`/markdown/sections/${val}.md`).then((res) => {
          this.test = marked.parse(res.data)
        })
      },
      immediate: true
    }
  }
})
</script>

<style lang="scss" scoped>
// .section {
//   height: 100vh;
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: stretch;
// }

.fill {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: stretch;
  justify-content: center;
}

.markdown {
  width: 40%;
}

.section__page {
  height: 100%;
  background-color: #75b5bd;
  display: flex;

  > * {
    // height: 100vh;
    overflow-y: auto;

    &:last-child {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

