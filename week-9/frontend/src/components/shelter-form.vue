<template>
  <div class='container'>
    <div class='columns is-centered is-mobile'>
      <form @submit.prevent='handleSubmit' class='form-container'>
        <div class='field'>
          <div class='column'>
            <label class='label' for='type'>Type of Pet</label>
            <div class='control'>
              <input
                class='input'
                type='text'
                id='type'
                name='type'
                v-model='type'
                placeholder='Type'
              />
            </div>
          </div>
        </div>
        <div class='field'>
          <div class='column'>
            <label class='label' for='name'>Name</label>
            <div class='control'>
              <input
                class='input'
                type='text'
                id='name'
                name='name'
                v-model='name'
                placeholder='Name'
              />
            </div>
          </div>
        </div>
        <div class='field'>
          <div class='column'>
            <label class='label' for='sex'>Sex</label>
            <div class='control'>
              <div class='select'>
                <select name='sex' v-model='sex'>
                  <option value=''>Please select one…</option>
                  <option value='female'>Female</option>
                  <option value='male'>Male</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class='field'>
          <div class='column'>
            <label class='label' for='age'>Age</label>
            <div class='control'>
              <input
                class='input'
                type='text'
                id='age'
                name='age'
                v-model='age'
                placeholder='Age'
              />
            </div>
          </div>
        </div>
        <div class='field'>
          <div class='column'>
            <label class='label' for='breed'>Breed</label>
            <div class='control'>
              <input
                class='input'
                type='text'
                id='breed'
                name='breed'
                v-model='breed'
                placeholder='Breed'
              />
            </div>
          </div>
        </div>
        <div class='field'>
          <div class='column'>
            <div class='control'>
              <label class='radio' for='microchip'>Has a microchip</label>
              <input
                class='radio'
                type='radio'
                id='true'
                value='true'
                v-model='hasMicrochip'
              />
              <label class='radio' for='true'>Yes</label>
              <input
                class='radio'
                type='radio'
                id='false'
                value='false'
                v-model='hasMicrochip'
              />
              <label class='radio' for='false'>No</label>
            </div>
          </div>
        </div>
        <div class='field'>
          <div class='control'>
            <button class='button is-rounded'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterForm',

  data() {
    return {
      type: '',
      name: '',
      sex: '',
      age: '',
      breed: '',
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
        type: this.type,
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

<style scoped>
.container {
  border: 1px solid #ddd;
  border-radius: 0.2rem;
  width: 24rem;
  margin: 0 auto;
  background-color: #e3e3f4;
}

.form-container {
  margin: 2rem;
}

button {
  background-color: #41418f;
  color: #fff;
}
</style>