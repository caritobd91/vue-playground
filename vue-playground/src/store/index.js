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
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ],
    events: [
      { id: 1, title: "...", organizer: "..." },
      { id: 2, title: "...", organizer: "..." },
      { id: 3, title: "...", organizer: "..." },
      { id: 4, title: "...", organizer: "..." }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    // by creating this getter, it allows you to use catLength anywhere in the application
    catLength: state => {
      return state.categories.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    // other way of getting ToDos using filter and not the doneTodos getter
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length;
    },
    // Finds the event id that equals the id that has been passed in
    // Using getter dynamically passing in an argument:
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {}
});
