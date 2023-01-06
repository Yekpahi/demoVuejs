<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<RouterLink active-class="active" to="/">Home</RouterLink>
<RouterLink active-class="active" to="/about">About</RouterLink>

</template>

<style>
.active {
    font-weight:900;
    color: rgb(153, 104, 14)
    }
</style>