<template>
  <v-container>
    <v-card>
      <v-img :src="fighterDocument.imageUrl"></v-img>
      <v-card-title>{{ fighterDocument.title }}</v-card-title>
      <v-card-subtitle>Fighter #{{ fighterDocument.id }}</v-card-subtitle>
    </v-card>

    <v-card class="mt-3">
      <v-card-text>
        <nuxt-content :document="fighterDocument"></nuxt-content>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

type FighterData = {
  fighterDocument: IContentDocument
}

export default Vue.extend({
  async asyncData({ params: { id }, $content }): Promise<FighterData> {
    const fighterDocument = (await $content('/brawl/fighters')
      .where({ id: parseInt(id) })
      .fetch()) as IContentDocument[]

    return {
      fighterDocument: fighterDocument[0]
    }
  },
  data(): FighterData {
    return {} as FighterData
  },
  created() {
    console.log(this.fighterDocument)
  }
})
</script>
