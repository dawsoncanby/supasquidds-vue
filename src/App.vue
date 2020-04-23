<template>
  <v-app>
    <v-content class="base-container">
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html { overflow:hidden!important; }

.base-container {
  background: linear-gradient(#09f, #003280);
}
</style>
