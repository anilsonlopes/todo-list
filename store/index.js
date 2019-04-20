import VuexLocalStorage from './plugins/VuexLocalStorage'

export default {
  plugins: [VuexLocalStorage],
  state: () => ({
    items: []
  }),
  mutations: {
    items(state, payload) {
      state.items = payload
    },
    removeItem(state, index) {
      state.items.splice(index, 1)
    },
    checkItem(state, index) {
      state.items[index].complete = true
    },
    unCheckItem(state, index) {
      state.items[index].complete = false
    },
    toggleCheckItem(state, index) {
      state.items[index].complete = !state.items[index].complete
    },
    addItem(state, item) {
      state.items.push(item)
    }
  },
  getters: {
    items: state => state.items
  },
  actions: {
    addItem({ commit }, item) {
      return new Promise((resolve, reject) => {
        if (item.trim()) {
          commit('addItem', {
            timestamp: new Date().getTime(),
            body: item.trim(),
            complete: false
          })
          return resolve()
        }
        const err = { message: 'Insira algo no campo de texto.' }
        reject(err)
      })
    }
  }
}
