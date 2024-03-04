<template>
  <main>
    <shelter-card
      v-for='shelter in shelters'
      :shelter='shelter'
      :key='shelter.id'
    />
  </main>
</template>

<script>
import ShelterCard from '@/components/shelter-card.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterView',

  components: {
    ShelterCard,
  },

  computed: {
    ...mapState(['shelters']),
  },

  methods: {
    ...mapActions(['fetchShelters']),
  },

  created() {
    this.fetchShelters()
  }
}
</script>
