<template>
  <div class="page__landing" @click="$router.push('section/1')">
    <img src="@/assets/logo.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>


<style scoped lang="scss">
.page {
  &__landing {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
}
img {
  height: 100%;
  max-width: auto;
}
</style>
