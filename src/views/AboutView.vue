<template>
  <div class="about">
    <h1>About</h1>
    <button @click="storeContador.aumentarConteo" class="counter-button">
      {{ storeContador.conteo }}
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeContador = useCounterStore()
</script>

<style scoped>
.counter-button {
  font-size: 50px;
}
</style>
