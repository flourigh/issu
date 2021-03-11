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
      no-click-animation
    >
      <v-card
        class="transparent pa-1"
        flat
      >
        <v-card-text>
          <p
            v-if="parsedUrl().searchParams.get('text')"
            v-text="parsedUrl().searchParams.get('text')"
          />

          <p
            v-if="parsedUrl().searchParams.get('url')"
            v-text="`Você clicou em: ${parsedUrl().searchParams.get('url')}`"
          />

          <p
            v-if="parsedUrl().searchParams.get('title')"
            v-text="`Este será seu URI: ${parsedUrl().searchParams.get('title')}`"
          />

          <v-text-field
            v-else
            v-model="uri"
            color="white"
            placeholder="Digite um nome para sua Issu"
            class="mx-auto"
            style="max-width: 412px"
            hide-details
            solo
            append-outer-icon="keyboard_arrow_right"
            @click:append-outer="action(uri)"
            @keydown.enter="action(uri)"
          />
        </v-card-text>
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
        },

        uri: this.parsedUrl().searchParams.get('title') || ''
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

      parsedUrl () {
        return new URL(window.location.toString())
      },

      action (uri) {
        if (uri) {
          this.$router.push(`/${uri}`)
          return
        }

        this.$router.push(`/${window.$uuid()}`)
      }
    }
  }
</script>
