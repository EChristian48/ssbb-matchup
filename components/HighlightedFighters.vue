<template>
  <div class="highlighted-fighters">
    <div
      v-for="(fightersGroup, index) in highlightedFighters"
      :key="index"
      no-gutters
      class="highlighted-fighters-group"
      :class="[
        { 'is-active': index === highlightedFightersRotation },
        { 'is-out': isNext(index) }
      ]"
    >
      <v-img
        v-for="fighter in fightersGroup"
        :key="fighter.id"
        :src="fighter.imgUrl"
        height="150px"
        max-width="50px"
        class="highlighted-fighter"
      >
        <template #placeholder>
          <v-row
            class="fill-height ma-0 bg-black"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fighter, fighters } from '@/data/fighters'

const HIGHLIGHTED_FIGHTERS_COUNT = 9

function getHighlightedFighters(rotation: number, size: number) {
  return fighters.slice(0, -1).slice((rotation - 1) * size, rotation * size)
}

type HighlightedFightersData = {
  highlightedFighters: Fighter[][]
  highlightedFightersRotation: number
}

export default Vue.extend({
  data(): HighlightedFightersData {
    return {
      highlightedFighters: [...Array(4)].map((_, index) =>
        getHighlightedFighters(index + 1, HIGHLIGHTED_FIGHTERS_COUNT)
      ),
      highlightedFightersRotation: 0
    }
  },
  created() {
    setInterval(() => {
      this.highlightedFightersRotation =
        this.highlightedFightersRotation < 3
          ? this.highlightedFightersRotation + 1
          : 0
    }, 5000)
  },
  methods: {
    isNext(index: number): boolean {
      if (index === 3 && this.highlightedFightersRotation === 0) {
        return true
      }
      return index === this.highlightedFightersRotation - 1
    }
  }
})
</script>

<style scoped>
.bg-black {
  background-color: black;
}

.highlighted-fighters {
  position: relative;
  width: 100%;
  height: 150px;
}

.highlighted-fighters-group {
  position: absolute;
  z-index: -10;
  transition: width 2.15s cubic-bezier(0.77, 0, 0.175, 1);
  width: 0;
  overflow: hidden;
  display: flex;
}

.is-active {
  z-index: 10;
  transition: width 2.15s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
}

.neutral {
  overflow: hidden;
  width: 390px;
  transition: width 2.15s cubic-bezier(0.77, 0, 0.175, 1);
}

.is-out {
  transition: width 2.15s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
  z-index: 3;
}

.highlighted-fighter {
  border-right-style: solid;
  border-right-color: black;
  border-right-width: 3px;
}
</style>
