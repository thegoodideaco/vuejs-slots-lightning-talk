<template>
  <div class="simple-panel">
    <div class="simple-panel__header">
      <slot name="header">
        Panel Title
      </slot>
    </div>

    <div class="simple-panel__body">
      <slot>
        <h1>Content Goes here</h1>
      </slot>
    </div>

    <div class="simple-panel__footer">
      <slot name="footer">
        Panel Footer
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>


<style scoped lang="scss">
.simple-panel {
  background: #fff;
  box-shadow: 0 0 3px rgba(#000, 0.5);
  border-radius: 4px;
  color: lighten(#000, 10);
  display: flex;
  flex-flow: column nowrap;

  &__header {
    padding: 10px 15px;
    background-color: #099;
    color: #fff;
    flex: 0;
  }

  &__body {
    padding: 15px;
    flex: 1;
  }

  &__footer {
    padding: 15px;
    border-top: 1px solid rgba(#000, 0.5);
    flex: 0;
  }
}
</style>
