<template lang="html">
  <v-card
    max-width="310"
    class="mx-auto"
    dark
  >
    <v-card-title class="pb-0 justify-center">
      <h1 class="word-break-normal">Supa Squidds</h1>
    </v-card-title>
    <v-card-actions>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="link in links" :key="link.link">
            <a :href="link.link">
              <v-icon large>{{link.icon}}</v-icon>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: 'mdi-spotify', link: 'https://open.spotify.com/artist/226oZaBWbPTWNFWW3SdOwB?si=eaHQE0fAS-umwIbF9TzdZw'},
        { icon: 'mdi-apple', link: 'https://itunes.apple.com/us/artist/supa-squidds/1344140343'},
        { icon: 'mdi-soundcloud', link: 'https://soundcloud.com/supasquidds'},
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/supa_squidds/'},
        { icon: 'mdi-youtube', link: 'https://www.youtube.com/channel/UCR9w3xFUSjoym2O0Qnqwiyg'},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
.word-break-normal {
  word-break: normal;
}
</style>
