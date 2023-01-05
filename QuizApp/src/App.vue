<script setup>
import q from "./data/quizes.json"
import {ref, watch} from "vue"
const quizes = ref(q)
// filter
const search = ref("")

watch(search, () => {
quizes.value = q.filter(quiz =quiz.name.toLowerCase().includes(search.value.toLowerCase()))
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
        <div v-for="quiz in quizes" :key="id" class="card">
          <img :src="quiz.img" alt="">
          <div class="card-text">
            <h2>{{ quiz.name}}</h2>
          <p> {{ quiz.questions.length }} questions</p>
          </div>
          
        </div>
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

.cards-container {
  display: flex;
  flex-wrap:wrap ;
  margin-left: 10px;
  margin-right: 10px;
}

.card {
  overflow: hidden;
  width: 300px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.card img{
  width:100%;
  height: 200px;
  margin:0;
}

.card .card-text {
  padding: 0 5px;
}
.card .card-text h2 {
  font-weight: bold;
  
}

</style>
