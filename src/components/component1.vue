<template lang="pug">
  div
    h1 Componente 1
    img(src='@/assets/logo.png')
    h1 {{ msg }}
    h2 Ecosystem
    ul
      li
        a(href='http://router.vuejs.org/', target='_blank') vue-router
      li
        a(href='http://vuex.vuejs.org/', target='_blank') vuex
      li
        a(href='http://vue-loader.vuejs.org/', target='_blank') vue-loader
      li
        a(href='https://github.com/vuejs/awesome-vue', target='_blank') awesome-vue
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

