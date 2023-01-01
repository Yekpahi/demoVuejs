<!-- 
<script setup>
import { ref } from "vue"
const count = ref(0);

const addToCount = () => {
  count.value = count.value + 1
}

const substracToCount = () => {
  count.value = count.value - 1
}

const zeroToCount = () => {
  count.value = 0
}

</script>

  -->


<script>
export default ({
  data() {
    return {
      count: 0
    }
  },

  methods: {
    addToCount() {
      console.log('+++++');
      this.count = this.count + 1
    },
    substracToCount() {
      console.log('---');
      this.count = this.count - 1
    },
    zeroToCount() {
      console.log('00000');
      this.count = 0;
      
    },
  }
})

</script>
<template>


  <main>
    <div>
      <h4> The current count is ....</h4>
      <h1> {{ count }}</h1>
      <button @click="addToCount">+</button>
      <button @click="zeroToCount">ZERO</button>
      <button @click="substracToCount">-</button>

    </div>
  </main>
</template>

<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
