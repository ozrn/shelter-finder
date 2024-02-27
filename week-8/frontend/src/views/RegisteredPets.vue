<template>
  <main>
    <h2>Here is a list for all registered pets in our system</h2>
    <ul>
      <survivor-card
        v-for='survivor in survivors'
        :survivor='survivor'
        :key='survivor.id'
      />
    </ul>
  </main>
</template>

<script>

import SurvivorCard from '../components/survivor-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'RegisteredPets',

  components: {
    SurvivorCard,
  },

  computed: {
    ...mapState(['survivors']),
  },

  methods: {
    ...mapActions(['fetchSurvivors']),
  },

  created() {
    this.fetchSurvivors()
  }
}
</script>
