<script setup>
const props = defineProps(['quiz'])
</script>

<template>
    <div class ="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div >
</template>

<style>
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