export default {
  state: {
    notes: [],
    note: {}
  },
  mutations: {
    pushnote(state, note) {
      state.notes.push(note);
      console.log("run");
    },
    removenote(state, item) {
      state.notes.splice(item, 1);
    }
  },
  actions: {},
  getters: {
    getnotes: state => state.notes
  }
};
