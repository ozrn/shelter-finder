<template>
    <div>
        <form>
            <label for="fname">Full Name:</label>
            <input type="text" id="fname" name="fname" v-model="fname" placeholder="Full Name"><br><br>
            <label for="gender">Gender:</label>
            <select name="gender" v-model = "gender">
            <option value="">Please select one…</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            </select><br><br>
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" v-model="age" placeholder="Age"><br><br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>

export default {
    name: 'ShelterForm',

    data() {
        
        return {
            fname: '',
            gender: '',
            age: ''
        }
    },

    methods: {
        }
    }

</script>

