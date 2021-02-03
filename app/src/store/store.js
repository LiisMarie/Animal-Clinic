import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bookedservice: null,
    bookeddate: null,
    bookedtime: null
  },
  mutations: {
    bookedservice(state, service) {
      state.bookedservice = service;
    },
    bookeddate(state, date) {
      state.bookeddate = date;
    },
    bookedtime(state, time) {
      state.bookedtime = time;
    }
  },
  getters: {
    bookedservice: state => state.bookedservice,
    bookeddate: state => state.bookeddate,
    bookedtime: state => state.bookedtime
  }
});

export default store
