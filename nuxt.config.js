module.exports = {
  head: {
    title: 'selfhosted.blog - Links and resources for your selfhosted blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'title', content: 'Accessible Web Apps'},
      {name: 'msapplication-TileColor', content: '#da532c'},
      {name: 'theme-color', content: '#ffffff'},
      {hid: 'description', name: 'description', content: 'Links, how to\'s and resources for starting your own, selhosted blog'},
      {property: 'og:description', name: 'twitter:description', content: 'Links, how to\'s and resources for starting your own, selhosted blog'},
      {name: 'og:url', content: 'https://selfhosted.blog'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:creator', content: '@_marcusherrmann'},
      {name: 'twitter:image', content: 'https://selfhosted.blog/logo.png'},
      {name: 'og:image', content: 'https://selfhosted.blog/logo.png'},
      {name: 'twitter:title', content: 'Acccessible App'},
      {property: 'twitter:url', content: 'https://selfhosted.blog'},
      {property: 'og:title', content: 'Accessible Web Apps'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon',  sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'manifest',  href: '/site.webmanifest'},
      {rel: 'mask-icon',  href: '/safari-pinned-tab.svg', color: '#096073'}
    ]
  },
  loading: false,
  build: {
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
