<template>
  <tbody>
    <td>{{ survivor.name }}</td>
    <td>{{ survivor.type }}</td>
    <td>{{ survivor.breed }}</td>
    <td>{{ survivor.sex }}</td>
    <td>{{ survivor.age }}</td>
  </tbody>
</template>

<script>
export default {
  name: 'SurvivorCard',

  props: ['survivor'],
}
</script>
