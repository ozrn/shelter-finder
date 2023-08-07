<script>

import StockCard from '@/components/stock-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'StockView',
    components: {
        StockCard
    },
    computed: {
        ...mapState(['stocks'])
    },
    methods: {
        ...mapActions(['fetchStocks'])
    },
    created() {
        this.fetchStocks()
    }
}
</script>

<template lang= 'pug'>
main    
    h2 This is a page where all stock items can be inquired
    stock-card(v-for = 'stock in stocks' :stock = 'stock')
</template>

<style></style>

