<template>
  <v-container>
    <HighlightedFighters />
    <Title />

    <v-row class="mt-2" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-form ref="form" @submit.prevent="onSubmit">
          <v-row class="mb-1">
            <v-col cols="6">
              <v-img
                :src="fighter1 ? fighter1.imgUrl : ''"
                class="mb-2"
                height="200"
                transition="scroll-x-transition"
              >
                <template #placeholder>
                  <SelectPlaceholder player-number="1" />
                </template>
              </v-img>
              <v-select
                v-model="fighter1"
                :items="fighters"
                item-text="name"
                item-value="id"
                return-object
                label="Player 1"
                :rules="[(v) => !!v || 'Required.']"
              />
            </v-col>

            <v-col cols="6">
              <v-img
                :src="fighter2 ? fighter2.imgUrl : ''"
                class="mb-2"
                height="200"
                transition="scroll-x-transition"
              >
                <template #placeholder>
                  <SelectPlaceholder player-number="2" />
                </template>
              </v-img>
              <v-select
                v-model="fighter2"
                :items="fighters"
                item-text="name"
                item-value="id"
                return-object
                label="Player 2"
                :rules="[(v) => !!v || 'Required.']"
              />
            </v-col>
          </v-row>

          <ReadyToFight />
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card v-if="result" id="result" class="pb-2">
          <h1 class="text-center text-uppercase result-score">{{ result }}</h1>
          <h2 class="text-center text-uppercase result-text">
            {{ resultText }}
          </h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Fighter, fighters } from '@/data/fighters'
import matchupsChart from '@/data/matchups'
import Vue from 'vue'
import { MatchupTypes, toResult } from '~/data/matchupTypes'

type IndexPageType = {
  fighters: Fighter[]
  fighter1: Fighter | undefined
  fighter2: Fighter | undefined
  result: MatchupTypes | undefined
}

export default Vue.extend({
  name: 'IndexPage',
  data(): IndexPageType {
    return {
      fighters,
      fighter1: undefined,
      fighter2: undefined,
      result: undefined
    }
  },
  computed: {
    resultText(): string {
      if (this.result) return toResult(this.result)
      return `Can't get result`
    }
  },
  watch: {
    async result(newResult) {
      if (newResult) {
        await this.$nextTick()
        document.querySelector('#result')?.scrollIntoView()
      }
    }
  },
  methods: {
    onSubmit() {
      ;(this.$refs.form as any).validate()
      if (this.fighter1 && this.fighter2) {
        this.result = matchupsChart
          .get(this.fighter1.id)
          ?.get(this.fighter2.id) as MatchupTypes
      }
    }
  }
})
</script>

<style scoped>
.result-score {
  font-family: 'Roboto Condensed', 'Open Sans', sans-serif;
  font-size: 4rem;
}

.result-text {
  font-family: 'Roboto Condensed', 'Open Sans', sans-serif;
}
</style>
