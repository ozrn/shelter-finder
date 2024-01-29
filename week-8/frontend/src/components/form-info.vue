<template>
  <div class="info">
    <p>The registration form has been submitted for {{ survivor.name }} successfully. Please check the details for the pet and shelter below!</p>
    <ul v-if="shelter.address">
     <li><span><b>Pet Name:</b></span> {{ survivor.name }}</li>
     <hr>
     <li><span><b>Pet Sex:</b></span> {{ survivor.sex }}</li>
     <hr>
     <li><span><b>Pet Age:</b></span> {{ survivor.age }}</li>
     <hr>
     <li><span><b>Shelter Name:</b></span> {{ shelter.name }}</li>
     <hr>
     <li><span><b>Shelter Address:</b></span> {{ shelter.address.city }} {{ shelter.address.addressDetail }}</li>
    </ul>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'FormInfo',

  computed: {
    ...mapState(['survivor', 'shelter'])

},   
  methods: {
    ...mapActions(['fetchSurvivor', 'fetchShelter'])
}
}
</script> 

<style scoped>
p {
  margin: auto;
  line-height: 1.8;
}
  
ul {
  list-style-type: none;
  padding: 0;
}
.info {
  display: inline-block;
  margin: auto;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
</style>

