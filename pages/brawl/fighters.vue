<template>
  <v-card>
    <h1>Fighter</h1>

    <ul>
      <li v-for="fighterDocument in fighterDocuments" :key="fighterDocument.id">
        {{ fighterDocument.title }}
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

type FighterListData = {
  fighterDocuments: IContentDocument | IContentDocument[]
}

export default Vue.extend({
  async asyncData({ $content }): Promise<FighterListData> {
    const fighterDocuments = await $content('brawl/fighters').fetch()

    return {
      fighterDocuments
    }
  },
  data(): FighterListData {
    return {} as FighterListData
  }
})
</script>
