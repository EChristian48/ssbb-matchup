<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click="isDrawerActive = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="isDrawerActive" temporary absolute>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"
            >Smash Bros. Tools</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item nuxt to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi-account-circle">
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>Brawl</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="({ to, label }, index) in brawlMenus"
            :key="index"
            nuxt
            :to="to"
          >
            <v-list-item-title>{{ label }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

type NavItem = {
  to: string
  label: string
}

type DefaultLayoutData = {
  isDrawerActive: boolean
  title: string
  brawlMenus: NavItem[]
}

export default Vue.extend({
  name: 'DefaultLayout',
  data(): DefaultLayoutData {
    return {
      isDrawerActive: false,
      title: 'Smash Bros. Tools',
      brawlMenus: [
        { to: '/brawl/matchups', label: 'Matchups' },
        { to: '/brawl/fighters', label: 'Fighters' }
      ]
    }
  }
})
</script>
