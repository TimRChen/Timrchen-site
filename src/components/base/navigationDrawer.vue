<template>
  <v-navigation-drawer
    v-model="computedDrawer"
    temporary
    width="200"
    absolute
    dark
    app
  >
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="routerToTarget(item.title)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class NavigationDrawer extends Vue {
  @Prop(Boolean) drawer!: boolean
  componentDrawer: boolean = this.drawer
  items: Array<Object> = [
    { title: 'Home', icon: 'dashboard' },
    { title: 'About', icon: 'question_answer' }
  ]

  set computedDrawer (result: boolean) {
    this.componentDrawer = result
  }

  get computedDrawer () {
    this.componentDrawer = this.drawer
    return this.componentDrawer
  }

  @Emit('update:drawerFeedback')
  routerToTarget (result: string) {}
}
</script>
