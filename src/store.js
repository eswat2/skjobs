import Vue from 'vue'
import Vuex from 'vuex'
import helpers from './utils/helpers';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    updateJobs (state, jobs) {
      state.jobs = jobs
    }
  },
  actions: {
    refreshJobs ({ commit }) {
      helpers.getJobs().then((data) => {
        commit('updateJobs', data.jobs)
      })
    }
  }
})

// NOTE:  we do this to populate the jobs list...
store.dispatch('refreshJobs')

export default store
