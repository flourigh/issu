const page = require('./src/plugins/database/page')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pages: {
    index: {
      title: page.Title(),
      description: page.Description(),
      subject: page.Subject(),
      terms: page.Terms(),
      base: page.BaseURL(),
      canonical: page.Canonical(),
      entry: './src/main'
    }
  },

  pwa: {
    name: page.Title(),
    themeColor: page.Color(),
    msTileColor: page.Color(),
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: page.Version(),
    manifestOptions: {
      short_name: page.Prefix(),
      description: page.Description(),
      start_url: `./?home=${page.Version()}`,
      scope: '/',
      display: 'standalone',
      share_target: {
        action: '/',
        method: 'GET',
        enctype: 'application/x-www-form-urlencoded',
        params: {
          title: 'title',
          text: 'text',
          url: 'url'
        }
      },
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          purpose: 'maskable',
          src: './img/icons/android-chrome-192x192-maskable.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          purpose: 'maskable',
          src: './img/icons/android-chrome-512x512-maskable.png',
          sizes: '512x512',
          type: 'image/png'
        }
        ]
    },
    workboxPluginMode: 'GenerateSW'
  }
}
