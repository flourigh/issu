const wildcard = {
  path: '*',
  redirect: {
    name: 'home'
  }
}

const home = {
  path: '/',
  name: 'home',
  components: {
    home: () => import(/* webpackChunkName: "password-generator-home" */ '@/views/home')
  }
}

const uri = {
  path: '/:uri',
  name: 'uri',
  components: {
    toolbar: () => import(/* webpackChunkName: "password-generator-home" */ '@/components/toolbar'),
    issu: () => import(/* webpackChunkName: "password-generator-home" */ '@/views/issu')
  }
}

export {
  wildcard,
  home,
  uri
}
