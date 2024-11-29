<template>
  <div class="count">
    {{ storeContador.conteo }}
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeContador = useCounterStore()

</script>
