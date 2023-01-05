<script setup>
import q from "./data/quizes.json"
import {ref, watch} from "vue"
import Card from "./components/Card.vue"
const quizes = ref(q)
// filter
const search = ref("")

watch(search, () => {
quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>
  <main>
    <div class="container">
      <header>
        <h3>QUIZES</h3>
        <input v-model.trim = "search" type="text" placeholder="Search">
      </header>
      <div class="cards-container">
        <Card v-for="quiz in quizes" ::key="quiz.id" :quiz ="quiz"/>
        <!--
        <div v-for="quiz in quizes" :key="id" class="card">
          <img :src="quiz.img" alt="">
          <div class="card-text">
            <h2>{{ quiz.name}}</h2>
          <p> {{ quiz.questions.length }} questions</p>
        </div>
        -->         
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.container header {
  display: flex;
  gap: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  color: rgb(36, 35, 35);
}

header input {
  border: none;
  border-radius: 10px;
  width: 150px;
  padding: 5px 15px;
  background-color: rgb(237, 234, 239);
}



</style>
