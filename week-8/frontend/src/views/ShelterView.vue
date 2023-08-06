<script>

import ShelterCard from '@/components/shelter-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterView',
  components: {
    ShelterCard,
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

<template lang = 'pug'>
main 
  h2 This is a page where all shelters are listed below
  shelter-card(v-for = 'shelter in shelters' :shelter = 'shelter')
</template>



