<template>
  <v-container>
    <h1>Fighters</h1>

    <v-row class="mt-1" >
      <v-col
        v-for="fighterDocument in fighterDocuments"
        :key="fighterDocument.id"
        cols="6"
        md="4"
        lg="3"
      >
        <v-card nuxt :to="`/brawl/fighters/${fighterDocument.id}`">
          <v-img
            :src="fighterDocument.imageUrl"
            class="card-image"
            position="top center"
          >
            <v-card-title>{{ fighterDocument.title }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

type FighterListData = {
  fighterDocuments: IContentDocument | IContentDocument[]
}

export default Vue.extend({
  async asyncData({ $content }): Promise<FighterListData> {
    const fighterDocuments = await $content('brawl/fighters')
      .only(['title', 'id', 'imageUrl'])
      .sortBy('id', 'asc')
      .fetch()

    return {
      fighterDocuments
    }
  },
  data(): FighterListData {
    return {} as FighterListData
  }
})
</script>

<style scoped>
.card-image {
  height: 90px;
}

@media screen and (min-width: 600px) {
  .card-image {
    height: 120px;
  }
}
</style>
