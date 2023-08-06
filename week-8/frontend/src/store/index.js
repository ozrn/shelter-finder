import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    shelters: []
  },
  getters: {
  },
  mutations: {
    SET_SHELTERS(state, data) {
      state.shelters = data
    }
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
