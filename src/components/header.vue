<template>
  <header class="header-container">
    <v-toolbar
      fixed
      dense
      flat
      id="toolbar-diy-timrchen"
      color="#fff"
    >
      <v-toolbar-title>
        <img src="@/assets/timrchen_logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Home</v-btn>
        <v-btn flat>About</v-btn>
        <v-btn flat>Extra</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <NavigationDrawer :drawer="drawer" :drawerFeedback.sync="drawer"></NavigationDrawer>
  </header>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop } from 'vue-property-decorator'
import NavigationDrawer from '@/components/base/navigationDrawer.vue'

@Component({
  components: { NavigationDrawer }
})
export default class Body extends Vue {
  @Prop(Boolean) drawerFeedback!: boolean
  drawer = false
}
</script>

<style lang="stylus" scoped>
#toolbar-diy-timrchen
  box-shadow 0 2px 12px 0 rgba(0, 0, 0, .12)!important
</style>

