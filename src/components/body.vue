<template>
  <v-container
    id="sbody-container"
    fluid
    grid-list-md
    align-center
  >
    <!-- 主页大标题 -->
    <div class="main-title-container">
      <div class="main-title-wrap">
        <div class="letter" data-letter="Hello, World">Hello, World</div>
        <br>
        <div class="letter subtitle-letter" data-letter="Life is Art.">Life is Art.</div>
      </div>
    </div>

    <v-layout
       wrap
       fill-height
       align-center
       justify-space-between
    >
      <v-flex
        id="flex-diy-timrchen"
        v-for="essay in essayList"
        :key="essay._id"
      >
        <v-card>
          <v-img :src="essay.picUrl" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{ essay.title }}</div>
              <span class="grey--text">{{ formateTime(essay.meta.createAt) }}</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="total"
        color="#000"
      ></v-pagination>
    </div>

  </v-container>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import TimDomain from '@/config/domain.ts'
import format from 'date-fns/format'

@Component
export default class Body extends Vue {
  total: number = 1
  page: number = 1
  essayList: Array<Object> = []

  async mounted () {
    const pageEssays: number = 6
    const data = await this.fetchEssayList()
    const { essays, essaySum } = data.data
    this.total = Math.ceil(Number(essaySum) / pageEssays)
    this.essayList = essays
  }

  fetchEssayList () {
    return this.$axios({
      method: 'GET',
      url: `${TimDomain}/api/essay/list`
    })
  }

  formateTime (isoDate: string) {
    return format(isoDate, 'MMMM.DD YYYY')
  }

}
</script>

<style lang="stylus" scoped>
#sbody-container
  padding-top 84px
  .main-title-container
    color #fff
    font-family 'Lato', sans-serif
    height 300px
    display flex
    flex-flow column
    justify-content center
    .main-title-wrap
      text-align center
      .letter
        display inline-block
        font-weight 900
        font-size 3em
        position relative
        color #fff
        transform-style preserve-3d
        perspective 400
        &:before, &:after
          position absolute
          content attr(data-letter)
          transform-origin top left
          text-shadow -1px 0px 1px rgba(255,255,255,.8), 1px 0px 1px rgba(0,0,0,.8)
          transform rotateX(0deg) rotateY(-15deg) rotateZ(0deg)
          color #000
          left 0
          top 0
      .subtitle-letter
        font-size 1em
  @media screen and (max-width: 768px)
    .main-title-container
      position relative
      text-align center
      text-align center
      color #fff
      .foo
        width 80%
  #flex-diy-timrchen
    width 100%
    @media screen and (min-width: 768px)
      width 30%
</style>
