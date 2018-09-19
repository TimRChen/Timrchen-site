<template>
  <v-footer
    dark
    fixed
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <strong class="subheading">Get connected with me on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="justify-center">
        Copyright &copy;&nbsp;<strong>2018 享受创造的快乐.</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Body extends Vue {
  icons = [
    'fab fa-facebook',
    'fab fa-twitter',
    'fab fa-google-plus',
    'fab fa-linkedin',
    'fab fa-instagram'
  ]
}
</script>
