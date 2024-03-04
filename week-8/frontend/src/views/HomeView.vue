<template>
  <article class='message'>
    <div class='message-header'>
      <p>Welcome to Our Home Page</p>
    </div>
    <div class='message-body'>
      If you find a lost pet, please check out the open shelters and register
      the pet via our online system. We will take care of the rest.
    </div>
  </article>
  <ShelterView />
</template>

<script>
import ShelterView from '../views/ShelterView.vue'

export default {
  name: 'HomeView',
  components: {
    ShelterView,
  }
}
</script>

<style scoped>
.message-header {
  background-color: #9090c1;
}
</style>
