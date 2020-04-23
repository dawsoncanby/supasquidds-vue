<template lang="html">
  <div
    class="bubble d-flex"
  >
    <v-container fluid class="justify-center">
      <v-row dense class="mt-5">
        <v-col>
          <h1 class="brand-title">Supa Squidds</h1>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col v-for="link in links" :key="link.link">
          <v-btn text icon>
            <a :href="link.link">
              <v-icon color="white" large>{{link.icon}}</v-icon>
            </a>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: 'mdi-spotify', link: 'https://open.spotify.com/artist/226oZaBWbPTWNFWW3SdOwB?si=eaHQE0fAS-umwIbF9TzdZw'},
        { icon: 'mdi-apple', link: 'https://music.apple.com/us/artist/supa-squidds/1344140343'},
        { icon: 'mdi-soundcloud', link: 'https://soundcloud.com/supasquidds'},
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/supa_squidds/'},
        { icon: 'mdi-youtube', link: 'https://www.youtube.com/channel/UCR9w3xFUSjoym2O0Qnqwiyg'},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.bubble {
  max-width: 320px;
  margin: auto;
}
a {
  text-decoration: none;
}
.brand-title {
  word-break: normal;
  color: white;
}
</style>
