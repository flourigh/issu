<template>
  <div>
    <v-dialog
      v-model="loading.active"
      persistent
      width="300"
      content-class="border-radius-0"
      hide-overlay
    >
      <div
        class="janrubio text-center"
      >
        <div
          v-for="shaft in 5"
          :key="shaft"
          :class="`shaft ${shaft}`"
        />
      </div>
    </v-dialog>

    <v-dialog
      v-model="dialog.active"
      persistent
      hide-overlay
      fullscreen
      no-click-animation
      scrollable
    >
      <v-card
        class="transparent d-flex"
        flat
      >
        <vue-disqus
          class="px-2 pt-12"
          shortname="socialcomment"
          :title="$route.params.uri"
          :identifier="$route.params.uri"
          :url="disqusGetURL()"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        loading: {
          active: true
        },

        dialog: {
          active: false
        }
      }
    },

    mounted () {
      this.start()
    },

    methods: {
      start () {
        this.dialog.active = true
        this.loading.active = false
      },

      disqusGetURL () {
        return location.href
      }
    }
  }
</script>
