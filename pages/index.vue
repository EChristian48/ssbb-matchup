<template>
  <fragment>
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
        ></v-img>
      </div>
    </div>

    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" sm="8" md="6">
          <v-form ref="form" @submit.prevent="onSubmit">
            <v-row class="mb-1">
              <v-col cols="6">
                <v-img :src="fighter1Image" class="mb-2" />
                <v-select
                  v-model="fighter1"
                  :items="fighters"
                  item-text="name"
                  item-value="id"
                  return-object
                  label="Select first Fighter"
                  :rules="[(v) => !!v || 'Required.']"
                />
              </v-col>

              <v-col cols="6">
                <v-img :src="fighter2Image" class="mb-2" />
                <v-select
                  v-model="fighter2"
                  :items="fighters"
                  item-text="name"
                  item-value="id"
                  return-object
                  label="Select second Fighter"
                  :rules="[(v) => !!v || 'Required.']"
                />
              </v-col>
            </v-row>

            <v-btn type="submit">Submit</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fighter, fighters } from '@/data/fighters'
import matchupsChart from '@/data/matchups'

const HIGHLIGHTED_FIGHTERS_COUNT = 9

type IndexPageType = {
  fighters: Fighter[]
  fighter1: Fighter | undefined
  fighter2: Fighter | undefined
  highlightedFighters: Fighter[][]
  highlightedFightersRotation: number
}

function getHighlightedFighters(rotation: number, size: number) {
  return fighters.slice(0, -1).slice((rotation - 1) * size, rotation * size)
}

export default Vue.extend({
  name: 'IndexPage',
  layout: 'smash',
  data(): IndexPageType {
    return {
      fighters,
      fighter1: undefined,
      fighter2: undefined,
      highlightedFighters: [...Array(4)].map((_, index) =>
        getHighlightedFighters(index + 1, HIGHLIGHTED_FIGHTERS_COUNT)
      ),
      highlightedFightersRotation: 0
    }
  },
  computed: {
    fighter1Image(): string {
      return this.fighter1
        ? this.fighter1.imgUrl
        : 'https://via.placeholder.com/150.webp?text=%22This+is+not+Mario%22'
    },
    fighter2Image(): string {
      return this.fighter2
        ? this.fighter2.imgUrl
        : 'https://via.placeholder.com/150.webp?text=%22This+is+not+Mario%22'
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
    onSubmit() {
      ;(this.$refs.form as any).validate()
      if (this.fighter1 && this.fighter2) {
        alert(matchupsChart.get(this.fighter1.id)?.get(this.fighter2.id))
      }
    },
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
.highlighted-fighters {
  position: relative;
  width: 100%;
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
