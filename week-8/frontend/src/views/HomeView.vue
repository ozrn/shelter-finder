<script>

export default {
  name: 'HomeView',
  data() {
    return {
      fullName: '',
      age: '',
      gender: 'female'
    }
  }
}
</script>

<template>
  <div class='home'>
    <h2>If a survivor needs a place to stay, please fill out the form below </h2>
    <form>
      <label>Full Name: </label>
      <input type="text" required v-model="fullName">

      <label>Age: </label>
      <input type="text" required v-model="age">

      <label>Gender: </label>
      <select v-model='gender'>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </form>
  </div>
</template>

<style>
form {
  max-width: 400px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 15px 0 10px;
  font-size: 0.4 rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 6px 4px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>



