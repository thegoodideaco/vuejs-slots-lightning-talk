<template>
  <header class="header">
    <img src="@/assets/logo.svg" @click="$router.push('/')">
    <div>
      Vue.js Slots // Lightning Talk with Jon Snyder
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import ProgressBar from './ProgressBar.vue'
export default Vue.extend({
  components: {
    ProgressBar
  }
})
</script>


<style scoped lang="scss">
.header {
  background: #fff;
  position: relative;
  padding: 10px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 0 3px rgba(#000, 0.4);

  img {
    display: inline-flex;
    float: left;
    cursor: pointer;
    flex: 0 1 100px;
    width: auto;
    max-height: 50px;
    min-width: auto;
    margin-right: 20px;

    + * {
      flex: 1 0 auto;
      // flex-basis: content;
      // width: 100%;
    }
  }
}
</style>
