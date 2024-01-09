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
}}
</script>

<template lang="pug">
main
    section
      <p>Please fill out the form below to stay in this shelter</p><br><br>
    <ShelterForm />
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>