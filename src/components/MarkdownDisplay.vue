<template>
  <div class="markdown">
    <markdown-display-item v-for="(item, index) in htmlStrings"
                           :key="index"
                           :class="{hidden: step < index, showing: step >= index}"
                           :content="item" />
  </div>
</template>

<script lang="ts">


import Vue from 'vue'
import MarkdownDisplayItem from '@/components/MarkdownDisplayItem.vue'
export default Vue.extend({
  props: {
    content: {
      type: String
    },
    step: {
      type: Number,
      default: 0
    }
  },
  data() {
    const htmlStrings: Array<string | null> = []
    return {
      htmlStrings
    }
  },
  components: {
    MarkdownDisplayItem
  },
  mounted() {
    const div = document.createElement('div')
    div.innerHTML = this.content
    // console.log(div.childElementCount)

    for (const o of div.children) {
      this.htmlStrings.push(o.outerHTML)
    }

    this.$nextTick(() => {
      this.$store.commit('updateTotalSteps', div.childElementCount)
    })


    // debugger
  },
  watch: {
    content: {
      handler(val: string) {
        if (val) {
          this.htmlStrings = []
          const div = document.createElement('div')
          div.innerHTML = val

          for (const o of div.children) {
            this.htmlStrings.push(o.outerHTML)
          }

          this.$nextTick(() => {
            this.$store.commit('updateTotalSteps', div.childElementCount)
          })
        }
      },
      immediate: true
    }
  }
})
</script>


<style scoped lang="scss">
.markdown {
  user-select: none;
  padding: 15px;
  display: inline-block;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid rgba(#000, 0.15);
  background-color: darken(#fff, 5);

  > * {
    opacity: 1;
    transition: opacity 400ms linear,
      transform 600ms cubic-bezier(0, 0.82, 0, 1.07);
    transform-origin: left top;
    &.hidden {
      opacity: 0;
      visibility: hidden;
      height: 0;
      transform: perspective(380px) rotateY(97deg) rotateZ(45deg);
      // display: none;
    }

    &.showing {
      transform: perspective(380px) rotateY(0);
    }
  }
}
</style>
