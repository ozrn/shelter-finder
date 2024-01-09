<template>
    <div>
        <form @submit.prevent = "handleSubmit">
            <label for="fname">Full Name:</label>
            <input type="text" id="fname" name="fname" v-model="fullName" placeholder="Full Name" required><br><br>
            <label for="gender">Gender:</label>
            <select name="gender" v-model = "gender" required>
                <option value="">Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select><br><br>
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" v-model="age" placeholder="Age" required><br><br>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    name: 'ShelterForm',

    data() {
        
        return {
                fullName: '',
                gender: '',
                age:''
        }
    },
    computed: {
    ...mapState(['shelter', 'survivor'])
  },

    methods: {

        ...mapActions(['createSurvivor']),

        async handleSubmit() {
            
            let survivor = {
                    fullName: this.fullName,
                    gender: this.gender,
                    age: this.age

                }
                const newSurvivor = await this.createSurvivor(survivor)
            }

        }    
           
    }    
    

</script>

