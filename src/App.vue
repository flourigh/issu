<template>
  <v-app
    id="inspire"
    :style="`background: ${theme}`"
  >
    <v-content>
      <router-view name="toolbar" />

      <v-container
        fluid
      >
        <router-view name="home" />

        <router-view name="issu" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    computed: {
      theme () {
        if (this.$vuetify.theme.dark) return this.$vuetify.theme.themes.dark.background
        return this.$vuetify.theme.themes.light.background
      }
    }
  }
</script>
