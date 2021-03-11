<template>
  <v-toolbar
    color="transparent"
    absolute
    width="100%"
    dense
    style="z-index: 999"
  >
    <v-btn
      icon
      small
      @click="cta('home')"
    >
      <v-icon
        size="24"
      >
        keyboard_arrow_left
      </v-icon>
    </v-btn>

    <v-spacer />

    <v-btn
      v-if="verifyShare()"
      icon
      small
      @click="cta('share')"
    >
      <v-icon
        size="14"
      >
        share
      </v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import GlobalMixinShare from '@/plugins/mixins/share'

  export default {
    mixins: [
      GlobalMixinShare
    ],

    methods: {
      cta (param) {
        if (param === 'share') this.share(location.href)
        if (param === 'home') this.$router.replace('/')
      },
      verifyShare () {
        return navigator.share
      }
    }
  }
</script>
