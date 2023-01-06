<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import cars from "../data/cars.json"

const route = useRoute()
const router = useRouter()
const carId = parseInt(route.params.id)
const car = cars.find(c => c.id === carId)

const showContact = () =>  {
    return router.push(`/cars/${carId}/contact`)
}


</script>
<template>
    <div>
        <h1>Car View</h1>
        <p> {{ car.name }}</p>
        <p> {{ car.year }}</p>
        <p> {{ car.price }}</p>
        <button @click="showContact">Contact Me</button>
        <RouterView />
    </div>
</template>