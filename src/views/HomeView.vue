<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeContador.disminuirConteo">-</button>
      <button @click="storeContador.aumentarConteo">+</button>
    </div>
    <hr>
    <div>
      Este contador es: {{ storeContador.parOImpar }}
    </div>
    <hr>
    <div>
      <h3>Editar contador: </h3>
      <input v-model="storeContador.conteo" type="number">
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter'

const storeContador = useCounterStore()

</script>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 10px;

}
</style>
