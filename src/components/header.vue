<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Timrchen</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Home</v-btn>
      <v-btn flat>About</v-btn>
      <v-btn flat>Extra</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Body extends Vue {}
</script>
