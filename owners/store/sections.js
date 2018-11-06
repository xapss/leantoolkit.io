export const state = () => ({
  list: []
})

export const mutations = {
  add(state, section) {
    state.list.push(section)
  },
  emptyList(state) {
    state.list = []
  },
  sort(state) {
    state.list = state.list.sort(function (a, b) {
      return a.rank - b.rank;
    })
  }
}

export const getters = {
  list: state => {
    return state.list
  }
}
