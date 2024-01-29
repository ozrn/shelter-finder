<template>
  <div>
    <form @submit.prevent = "handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="name" placeholder="name"><br><br>
      <label for="sex">Sex:</label>
      <select name="sex" v-model = "sex">
        <option value="">Please select one…</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select><br><br>
      <label for="age">Age:</label>
      <input type="text" id="age" name="age" v-model="age" placeholder="Age"><br><br>
      <label for="breed">Breed:</label>
      <input type="text" id="breed" name="breed" v-model="breed" placeholder="Breed"><br><br>
      <label for="microchip">Has a microchip:</label>
        <input type="radio" id="true" value="true" v-model="hasMicrochip">
        <label for="true">Yes</label>
        <input type="radio" id="false" value="false" v-model="hasMicrochip">
        <label for="false">No</label><br><br>
      <div><button>Submit</button></div>
    </form>   
  </div>
</template>     
    
<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterForm',

  data() {
        
    return {
      name: '',
      sex: '',
      age:'',
      breed:'',
      hasMicrochip: Boolean
      }
    },
  computed: {
    ...mapState(['shelter', 'survivor'])
  },

  methods: {

    ...mapActions(['createSurvivor', 'stayShelter']),

    async handleSubmit() {
        
      let survivor = {
        name: this.name,
        sex: this.sex,
        age: this.age,
        breed: this.breed,
        hasMicrochip: this.hasMicrochip
      }
      await this.createSurvivor(survivor)

      let shelterInfo = {
        shelterId: this.$route.params.id,
        survivorId: this.survivor._id
      }

      await this.stayShelter(shelterInfo)

      await this.$router.push('/form-info')
    } 

  } 
           
}    
    
</script>