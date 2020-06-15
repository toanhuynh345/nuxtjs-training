
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/app.scss',
    './node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],
  axios: {
    // API đến server Laravel (nói sau)
    baseURL: 'http://training.lc/api/',
    credentials: true
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          // các đường dẫn đến API
          // propertyName: kết quả từ API trả về, nhớ xem kết quả để đặt key cho đúng
          login: { url: '/login', method: 'post', propertyName: 'access_token' },
          // sau khi login, sẽ tự động chạy cái API này nữa để lấy dữ liệu user
          user: { url: '/user', method: 'get', propertyName: 'data' },
          logout: false
        }
      },
    }
  },
//dùng cái này để sử dụng middleware xác thực người dùng cho mọi route, tương tự middleware trong Laravel
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
