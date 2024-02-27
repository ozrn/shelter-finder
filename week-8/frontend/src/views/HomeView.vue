<template>
  <section class='section'>
    <div class='colums is-vcentered'>
      <div class='column'>
        <h2 class='is-size-1 subtitle'>Welcome to our home page</h2>
        <p>
          If you find a lost pet, please check out the open shelters and
          register the pet via our online system. We will take care of the rest.
        </p>
      </div>
    </div>
    <ShelterView />
  </section>
</template>

<script>
import ShelterView from '../views/ShelterView.vue'

export default {
  name: 'HomeView',
  components: {
    ShelterView
  }
}
</script>

<style></style>
