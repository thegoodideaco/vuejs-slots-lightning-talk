<template>
  <div class="card">
    <div class="card__title">
      Title
    </div>

    <div class="card__body">
      <slot>
        This is the body content
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimpleButton from '@/components/SimpleButton.vue'
export default Vue.extend({
  data() {
    return {
      test: 'hey'
    }
  },
  components: {
    SimpleButton
  }
})
</script>


<style scoped lang="scss">
.card {
  display: inline-block;
  background: #fff;
  box-shadow: 0 0 3px rgba(#000, 0.5);

  &__title {
    background-color: darken(#fff, 4);
    padding: 10px;
  }

  &__body {
    padding: 10px;
    background-color: darken(#fff, 10);
  }
}
</style>
