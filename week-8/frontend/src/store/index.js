import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    shelters: [],
    stocks: []
  },
  getters: {
  },
  mutations: {
    SET_SHELTERS(state, data) {
      state.shelters = data
    },
    SET_STOCKS(state, data) {
      state.stocks = data
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
    },
    async fetchStocks({ commit }) {
      try {
        const result = await axios.get('http://localhost:3000/stock/all/json')
        commit('SET_STOCKS', result.data)
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
