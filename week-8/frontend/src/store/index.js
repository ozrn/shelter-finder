import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    shelters: [],
    shelter: {},
    survivor: {}
  },
  getters: {
  },
  mutations: {
    SET_SHELTERS(state, data) {
      state.shelters = data
    },
    SET_SHELTER(state, data) {
      state.shelter = data
    },
    SET_SURVIVOR(state, data) {
      state.survivor = data
    }
  },
  actions: {
    async fetchShelters({ commit }) {
      try {
        const result = await axios.get('http://localhost:3000/shelter/all/show-available-shelters/json')
        console.log
        commit('SET_SHELTERS', result.data)
      }
      catch (err) {
        console.log(err)
      }
    },
    async fetchShelter({ commit }, id) {
      try {
        const result = await axios.get(`http://localhost:3000/shelter/${id}/json`)
        commit('SET_SHELTER', result.data)
      }
      catch (err) {
        console.log(err)
      }
    },

    async fetchSurvivor({ commit }, id) {
      try {
        const result = await axios.get(`http://localhost:3000/survivor/${id}/json`)
        commit('SET_SURVIVOR', result.data)
      }
      catch (err) {
        console.log(err)
      }
    },
    
    async createSurvivor({ commit }, survivor) {
      try {
        const result = await axios.post('http://localhost:3000/survivor/', survivor)
        commit('SET_SURVIVOR', result.data)
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
