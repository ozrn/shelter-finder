<script>

import { mapState, mapActions } from 'vuex'

export default {
    name: 'ShelterCard',
    props: [
      'shelter'
    ],
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
   

<template lang='pug'>
div.card
    h2 
    router-link(:to="'/' + shelter._id + '/'") {{ shelter.name }}
</template>


<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
</style>