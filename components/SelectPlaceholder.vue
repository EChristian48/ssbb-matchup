<template>
  <div class="fighter-placeholder">
    <span class="fighter-placeholder-player-text"
      >PLAYER {{ playerNumber }}</span
    >
    <span class="fighter-placeholder-select-text">SELECT</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SelectPlaceholder',
  props: {
    playerNumber: {
      type: String,
      default: '1'
    }
  }
})
</script>

<style scoped>
.fighter-placeholder {
  background-color: #fe3333;
  height: 100%;
  width: 100%;
  font-family: 'Roboto Condensed', 'Open Sans', sans-serif;
  padding: 10px;
}

.fighter-placeholder span {
  display: block;
}

.fighter-placeholder-player-text {
  font-size: 1rem;
}

.fighter-placeholder-select-text {
  font-size: 2rem;
}
</style>
