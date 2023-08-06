<script>

import MainPage from '@/components/mainpage-card.vue'

export default {
  name: 'HomeView',
  components: {
    MainPage,
  }
}
</script>

<template>
  <div class='home'>
    <MainPage msg='Do you need assistance?' />
  </div>
</template>



