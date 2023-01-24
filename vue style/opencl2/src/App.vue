<script>
import Comp1 from './components/comp1.vue';

export default {
  components: {
    Comp1
  },
  data() {
    return {
      msg : ""
    }
  },
  methods: {
        // Définit la méthode utilisée par le payload pour mettre à jour la propriété data
        setMessage(payload) {
            this.msg = payload.message
        }
    }
}
</script>

<template>



  <div :class="$style.red">
    <p :class="$style.white">Je suis blanc</p>
  </div>
  <p>{{ msg }}</p>
  <Comp1 categorie="categorie" @custom-event-name="setMessage">
   
  </Comp1>
<Comp1>
  <template v-slot:slot1>Slot 1</template>
</Comp1>
</template>

<style module>
.red {
  background-color: red;
}

.white {
  color: aliceblue;
}
</style>
