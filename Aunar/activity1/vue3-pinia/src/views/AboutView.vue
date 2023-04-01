<template>
  <div class="about">
    <h1>{{ store.count }}</h1>
    <h1>conteo: {{ conteo }}</h1>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore

const conteo = inject('conteo');

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
