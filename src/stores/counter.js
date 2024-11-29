import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    conteo: 10,
  }),
  actions: {
    aumentarConteo() {
      this.conteo++
    },
    disminuirConteo() {
      this.conteo--
    },
  },
  getters: {
    parOImpar: (state) => {
      if (state.conteo % 2 === 0) return 'par'
      return 'Impar'
    },
  },
})
