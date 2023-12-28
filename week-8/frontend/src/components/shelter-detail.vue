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
    ...mapActions(['fetchShelter'])
  },
  
  created() {
    this.fetchShelter(this.$route.params.id)
  }
}
</script>

<template lang="pug">
main
    section
      shelter-card(:shelter='shelter')
</template>

<style scoped>
</style>