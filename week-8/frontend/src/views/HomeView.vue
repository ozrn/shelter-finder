<template>
<div class="home">
  <MainPage msg="Do you need assistance?"/>
</div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "HomeView",
  components: {
    MainPage,
  },
  computed: {
    ...mapState(['shelters'])
  },
  methods: {
    ...mapActions(['fetchShelters'])
  },
  created() {
    this.fetchShelters()
  }
}
</script>
