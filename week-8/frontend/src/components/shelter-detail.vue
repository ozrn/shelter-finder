<script>

import ShelterCard from '../components/shelter-card.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterDetail',
  
  components: {
    ShelterCard
  },
  
  computed: {
    ...mapState(['shelter'])
  },
  
  methods: {
    ...mapActions(['fetchShelter']),
    isRendered() {
      return this.shelter.name ? true : false
    }
  },
  
  created() {
    this.fetchShelter(this.$route.params.id)
  }
}
</script>

<template lang="pug">
main
    section
      //- shelter-card(:shelter='shelter')
      <ul v-if = "shelter.address">
        <li>City: {{shelter.address.city}}</li>
        <li >Address: {{ shelter.address.addressDetail }}</li>
        <li>{{ shelter.maxCapacity - shelter.residents.length }} places available</li>
      </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>