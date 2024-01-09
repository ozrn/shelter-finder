<script>

export default {
    name: 'ShelterCard',

    props: ['shelter'],
    
    computed: {
      shelterUrl() {
        return `/shelter/${this.shelter._id}`
      }
    },
    
    created() {
     
  }}
  
  </script>
  
<template lang='pug'>
div.card
  router-link(:to='shelterUrl') {{ shelter.name }}

  <p v-if ='shelter.residents && shelter.residents.length < shelter.maxCapacity'>Available</p>
  <p v-else>Sorry, no available place at the moment!</p>
  <hr>
  <ul v-if = "shelter.address">
    <li>City: {{shelter.address.city}}</li><br>
    <li >Address: {{ shelter.address.addressDetail }}</li><br>
    <li>{{ shelter.maxCapacity - shelter.residents.length }} places available</li>
  </ul>

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