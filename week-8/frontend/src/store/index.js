import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async fetchShelters({ commit }) {
      try {
        const result = await axios.get('http://localhost:3000/shelter/all/json')
        commit('SET_SHELTERS', result.data)
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
