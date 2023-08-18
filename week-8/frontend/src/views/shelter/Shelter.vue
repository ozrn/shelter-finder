<script>

import ShelterCard from '@/components/shelter-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Shelter',
    components: {
        ShelterCard
    },
    computed: {
        ...mapState(['shelter'])
    },
    methods: {
        ...mapActions(['fetchShelter'])
    },
    created() {
        this.fetchShelter(this.$route.params.id)
    }
}
</script>

<template lang='pug'>
main
    section
    router-link(:to = "'/' + shelter._id + '/'")
        shelter-card(:shelter='shelter')
</template>

<style scoped></style>