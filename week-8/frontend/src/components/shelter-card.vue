<script>

export default {
    name: 'ShelterCard',
    
    data() {
       return{
            isAvailable: ''
       } 
    },
    
    props: ['shelter'],
    
    computed: {
      shelterUrl() {
        return `/shelter/${this.shelter._id}`
      }
    },
    
    created() {
        this.shelter.maxCapacity > this.shelter.residents.length ? this.isAvailable = true : false
    
  }}
  
  </script>
  
<template lang='pug'>
div.card
    h2 
    router-link(:to='shelterUrl') {{ shelter.name }}

    <p v-if ='isAvailable'> Available </p>
    <p v-else> Sorry, no available place at the moment! </p>

</template>
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .card {
    display: inline-block;
    margin: 0 10px;
    text-align: left;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 20px;
    min-width: 200px;
  }
  a {
    color: #42b983;
  }
  </style>