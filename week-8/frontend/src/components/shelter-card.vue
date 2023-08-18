<script>

export default {
  name: 'ShelterCard',
  props: ['shelter'],
  computed: {
    shelterUrl() {
      return `/shelter/${this.shelter._id}`
    }
  }
}
</script>

<template lang='pug'>
div.card
  h2 
    router-link(:to='shelterUrl') {{ shelter.name }}
      
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