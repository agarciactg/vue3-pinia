<template>
    <div>
        <h1>hola: {{ count }}</h1>
        <h1>query: {{ route.query.search }}</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const count = inject('conteo');
const route = useRoute()
</script>

<style scoped>
</style>