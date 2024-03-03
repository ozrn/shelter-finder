<template>
  <h2>Here is a list for all registered pets in our system</h2>
  <table
    class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'
  >
    <thead>
      <tr>
        <th>Pet Name</th>
        <th>Pet Type</th>
        <th>Pet Breed</th>
        <th>Pet Sex</th>
        <th>Pet Age</th>
      </tr>
    </thead>
    <survivor-card
      v-for='survivor in survivors'
      :survivor='survivor'
      :key='survivor.id'
    />
  </table>
</template>

<script>
import SurvivorCard from '../components/survivor-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'RegisteredPets',

  components: {
    SurvivorCard
  },

  computed: {
    ...mapState(['survivors'])
  },

  methods: {
    ...mapActions(['fetchSurvivors'])
  },

  created() {
    this.fetchSurvivors()
  }
}
</script>

<style scoped>
h2{
  margin: 2rem;
  font-weight: 700;
}
</style>
