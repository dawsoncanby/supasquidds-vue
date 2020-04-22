<template>
  <v-container fluid class="fill-height pa-0 base-container">
    <img :src="wave" class="background-image">
    <v-row class="z-1">
      <v-col class="text-center">
        <v-card
          max-width="300"
          class="mx-auto">
          <v-card-text class="pa-1">
            <h1>Supa Squidds</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import wave from '../assets/wave.svg'
export default {
  data() {
    return {
      wave,
    }
  }
}
</script>

<style scoped>
.background-image {
  position: absolute;
  top: 0;
  z-index: 0;
  animation: move-wave 2s linear infinite;
}

.z-1 {
  position: relative;
  z-index: 1;
}

@keyframes move-wave {
  0% { top: 0px }
  50% { top: -5px }
  100% { top: 0px }
}
</style>
