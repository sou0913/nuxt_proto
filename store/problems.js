export const state = () => ({
  ids: []
})

export const mutations = {
  setIds(state, list) {
    state.ids = list
  },
  getNextId(state, now) {
    const nowIndex = state.ids.indexOf(now)
    const nextIndex = nowIndex + 1
    if (nextIndex > state.ids.length) {
      nextIndex = 0
    }
    const nextId = state.list[nextIndex]
    return nextId
  }
}