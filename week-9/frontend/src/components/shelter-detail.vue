<template>
  <main>
    <p>Please fill out the form below to register the pet!</p>
    <br/>
    <ShelterForm />
  </main>
</template>

<script>
import ShelterCard from '../components/shelter-card.vue'

import ShelterForm from '../components/shelter-form.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterDetail',

  components: {
    ShelterCard,
    ShelterForm
  },

  computed: {
    ...mapState(['shelter'])
  },

  methods: {
    ...mapActions(['fetchShelter']),

    created() {
      this.fetchShelter(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
