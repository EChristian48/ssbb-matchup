<template>
  <v-btn type="submit" class="submit-button py-8" block>
    <span class="submit-button-text"
      >READY
      <span>TO</span>
      FIGHT!</span
    >
  </v-btn>
</template>

<style scoped>
.submit-button {
  perspective: 1000px;
  perspective-origin: 50% 50%;
}

.submit-button-text {
  transform: scale3d(1, 1, 1) rotateX(16deg) rotateY(-39deg) rotateZ(8deg)
    translate3d(0px, 0px, 0px) skew(-27deg, 0deg);
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px -1px 0px #fe8b01;
}
</style>
