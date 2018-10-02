<template>
  <div class="main">

    <!-- Main Header -->
    <top-header />

    <!-- Section View -->
    <transition appear-to-class="animated fadeIn faster"
                mode="out-in"
                enter-to-class="animated fadeIn faster"
                enter-class="animated fadeIn faster"
                leave-class="animated fadeOut faster"
                leave-to-class="animated fadeOut faster"
                leave-active-class="animated fadeOut faster">

      <keep-alive>
        <router-view :key="$store.state.section" />

      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopHeader from '@/components/TopHeader.vue'

interface Info {
  customTitle: string | number
}
export default Vue.extend({
  data(): Info {
    return {
      customTitle: 'Hello There!'
    }
  },

  components: {
    SimpleButton: () => import('@/components/SimpleButton.vue'),
    TopHeader
  },
  props: ['page'],
  methods: {
    onButtonClick(e: MouseEvent) {
      console.log(e.altKey)
      this.customTitle = Math.random()
    }
  },
  watch: {
    // '$store.getters.activeURL': {
    //   handler(val: string) {
    //     console.log('cool!')
    //     this.$router.push(`/${val}`)
    //   }
    // }
  }
})
</script>


<style scoped lang="scss">
.main {
  // padding: 10px;
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  > * {
    &:first-child {
      flex: 0 1 auto;
    }

    &:last-child {
      flex: 1;
    }
  }
}

.showit {
  transition: opacity 1000ms ease;
  opacity: 1;
}

.hideit {
  transition: opacity 1000ms ease;
  opacity: 0;
}
</style>
