<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'

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



