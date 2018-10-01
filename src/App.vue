<template>
  <div id="app">
    <!-- <top-header /> -->
    <!-- Main display -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import TopHeader from '@/components/TopHeader.vue'
export default Vue.extend({
  components: {
    // TopHeader
  },
  watch: {
    '$route.fullPath': {
      handler(val: string) {
        const s: string[] = val.split('/').reverse().splice(0, 2).reverse()

        const section: number = parseInt(s[0], 10)
        const step: number = parseInt(s[1], 10)

        this.$store.commit('updateFromRouter', {
          section,
          step
        })

      }
    }
  },
  methods: {
    onKeyUp(ev: KeyboardEvent) {
      const isLeft = ev.keyCode === 37
      const isRight = ev.keyCode === 39

      if (isLeft) {
        this.$router.back()
        return
      }

      if (isRight) {
        this.$store.commit('nextStep', this.$router)
      }
    }
  },
  mounted() {
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyUp)
  }
})
</script>


<style lang="scss" src="@/assets/scss/main.scss" />
