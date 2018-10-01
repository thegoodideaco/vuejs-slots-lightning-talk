import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section: 1 as number,
    currentStep: 1 as number,
    totalSteps: 0 as number
  },
  mutations: {
    nextStep(state, $router) {
      let newStep: number = state.currentStep + 1
      let newSection: number = state.section
      if (newStep > state.totalSteps) {
        newStep = 1
        newSection += 1
      }

      // Store has a watcher in App.vue
      // This will watch for route change, and if so, update the store
      // Contol the store by modifying the router
      $router.push(`/section/${newSection}/${newStep}`)
    },
    updateTotalSteps(state, steps) {
      state.totalSteps = steps
    },
    updateFromRouter(state, payload) {
      state.section = payload.section
      state.currentStep = payload.step
    },

    reset(state) {
      state.currentStep = 1
      state.totalSteps = 0
      state.section = 1
    }
  },
  getters: {
    activeURL: (state, getters, rootState, rootGetters) => {
      return `section/${state.section}/${state.currentStep}`
    }
  },
  actions: {}
})
