<template>
  <div class="home">
    <Header/>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.home
  background-image url('../assets/bg.gif')
  background-repeat repeat
  /* Vue 多组件切换过渡动画 */
  .component-fade-enter-active, .component-fade-leave-active
    transition opacity 0.2s ease-in-out
  .component-fade-enter, .component-fade-leave-to
    opacity 0

</style>
