<template>
  <div class='container has-text-centered'>
    <div class='columns is-mobile is-centered'>
      <div class='column is-8'>
        <div>
          <h2>List of the registered pets</h2>
          <hr />
        </div>
        <table
          class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'
        >
          <thead class='table-head'>
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
      </div>
    </div>
  </div>
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
h2 {
  margin: 2rem;
  font-weight: 700;
}

.table-head {
  background-color: #9090c1;
}

th {
  font-weight: 600;
}
</style>
