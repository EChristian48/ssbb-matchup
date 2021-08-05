<template>
  <v-container>
    <HighlightedFighters />

    <Title />

    <v-row class="mt-2">
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
</template>

<script lang="ts">
import Vue from 'vue'
import { Fighter, fighters } from '@/data/fighters'
import matchupsChart from '@/data/matchups'

type IndexPageType = {
  fighters: Fighter[]
  fighter1: Fighter | undefined
  fighter2: Fighter | undefined
}

export default Vue.extend({
  name: 'IndexPage',
  layout: 'smash',
  data(): IndexPageType {
    return {
      fighters,
      fighter1: undefined,
      fighter2: undefined
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

  methods: {
    onSubmit() {
      ;(this.$refs.form as any).validate()
      if (this.fighter1 && this.fighter2) {
        alert(matchupsChart.get(this.fighter1.id)?.get(this.fighter2.id))
      }
    }
  }
})
</script>

<style scoped>
.lot-of-margin {
  margin-top: 300px;
}
</style>
