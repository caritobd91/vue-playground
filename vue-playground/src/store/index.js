import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Adam" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    // by creating this getter, it allows you to use catLength anywhere in the application
    catLength: state => {
      return state.categories.length;
    }
  },
  modules: {}
});
