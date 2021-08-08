<template>
  <v-card>{{ id }}</v-card>
</template>

<script lang="ts">
import Vue from 'vue'

type FighterData = {
  id: string
}

export default Vue.extend({
  asyncData({ params: { id } }): FighterData {
    return {
      id
    }
  },
  data(): FighterData {
    return {} as FighterData
  }
})
</script>
