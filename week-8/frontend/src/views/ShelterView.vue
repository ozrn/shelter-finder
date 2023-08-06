<script>

import MainPage from '@/components/MainPage.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    MainPage,
  },
  computed: {
    ...mapState(['shelters'])
  },
  methods: {
    ...mapActions(['fetchShelters'])
  },
  created() {
    this.fetchShelters()
  }
}
</script>

<template>
  <div class='shelter'>
    <h1>This is a page where all shelters are listed below</h1>
    <div>{{ shelters }}</div>
  </div>
</template>



