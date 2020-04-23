<template>
  <v-container fluid fill-height class="pa-0">
    <div class="background-image"></div>
    <v-row class="z-1">
      <v-col class="text-center">
        <LinkCard/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import wave from '../assets/wave.svg'
import LinkCard from './LinkCard.vue'
export default {
  components: {
    LinkCard
  },
  data() {
    return {
      wave,
    }
  }
}
</script>

<style scoped>
.background-image {
  background: url('../assets/wave.svg') repeat-x;
  position: absolute;
  top: 0;
  height: 100px; 
  width: 200%;
  animation: slide 40s linear infinite;
 }

 @keyframes slide {
  0% { transform: translate3d(-50%, 0, 0); }
  50% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
 }

.z-1 {
  position: relative;
  z-index: 1;
}

</style>
