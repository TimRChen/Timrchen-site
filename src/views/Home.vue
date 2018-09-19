<template>
  <div class="home">
    <Header/>
    <SBody/>
    <Footer/>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/header.vue'
import SBody from '@/components/body.vue'
import Footer from '@/components/footer.vue'

@Component({
  components: {
    Header,
    SBody,
    Footer
  }
})
export default class Home extends Vue {}
</script>
