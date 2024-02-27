<template>
  <h2>I am a found pet and my name is {{ survivor.name }}</h2>
</template>

<script>
export default {
  name: 'SurvivorCard',
  
  props: ['survivor']
}
</script>