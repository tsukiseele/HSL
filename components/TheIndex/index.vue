<template lang="pug">
.index
  .logo HARUKA
  nav.nav
    ul.nav-menu
      li(v-for='item in nav', :key='item.name') {{ item.name }}
    ul.nav-links
      li(v-for='item in links', :key='item.name')
        s-icon(:name='item.icon')
        a(:href='item.to') {{ item.name }}
</template>

<script>
export default {
  data: () => ({
    nav: [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'Projects',
        to: '/projects',
      },
      {
        name: 'Friends',
        to: '/friends',
      },
      {
        name: 'Gallery',
        to: '/gallery',
      },
      {
        name: 'About',
        to: '/about',
      },
    ],
    links: [
      {
        icon: 'fa-github',
        to: 'https://github.com/tsukiseele',
      },

      {
        icon: 'fa-twitter',
        to: 'https://twitter.com/tsukiseele',
      },

      {
        icon: 'fa-envelope',
        to: 'mailto:tsukiseele@gmail.com',
      },
    ],
  }),
  methods: {},
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .logo {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
  }

  .nav-menu {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 1rem;
  }
  li {
    display: flex;
    padding: 0 0.5rem;

    i {
      padding-right: 0.5rem;
      font-size: 1.8rem;
    }
  }
}
</style>
