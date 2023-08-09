<script>

export default {
  name: 'HomeView',
  data() {
    return {
      fullName: '',
      age: '',
      gender: ''
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
      <input type="text" required v-model="gender">
    </form>
  </div>
</template>

<style>
 form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

 label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6 rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

 input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>



