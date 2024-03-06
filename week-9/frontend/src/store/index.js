import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    shelters: [],
    shelter: {},
    survivor: {},
    survivors: []
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
    },
    SET_SURVIVORS(state, data) {
      state.survivors = data
    }
  },
  actions: {
    async fetchShelters({ commit }) {
      try {
        const result = await axios.get('http://localhost:3000/shelter/all/show-available-shelters/json')
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

    async fetchSurvivors({ commit }) {
      try {
        const result = await axios.get('http://localhost:3000/survivor/all/json')
        commit('SET_SURVIVORS', result.data)
      }
      catch(err) {
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
    },

    async stayShelter(context, payload) {
      try {
        await axios.post(`http://localhost:3000/shelter/${payload.shelterId}`, {survivorId: payload.survivorId} )
        context.dispatch('fetchShelter', payload.shelterId)
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
