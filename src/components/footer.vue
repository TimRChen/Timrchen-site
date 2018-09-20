<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
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

      <div class="link-group">
        <span class="txt-box">
          <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP备17058358号-1</a>
        </span>
      </div>

      <v-card-actions class="justify-center">
        Copyright &copy;&nbsp;<strong>2018. 提姆瑞辰</strong>
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
    'fab fa-linkedin'
  ]
}
</script>

<style lang="stylus" scoped>
.link-group
  width 100%
  text-align center
  .txt-box
    font-size 12px
    a
      text-decoration none
      color #888
</style>

