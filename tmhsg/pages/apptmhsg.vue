<template>
  <v-container>
    <v-btn @click="toggleThulaoVisibility" color="aqua"
    elevation="3"
    class="light-blue accent-2"
    >Thù lao</v-btn>

  </v-container>
</template>

<script>
export default {
  computed: {
    isThulaoVisible() {
      return this.$store.state.showThulao.isThulaoVisible;

    }
  },
  methods: {
    toggleThulaoVisibility() {
      this.$store.commit('showThulao/toggleThulaoVisibility');

    }
  }
};
</script>
