<template lang="pug">
.index
  .title {{ title }}
  .subtitle {{ subtitle }}
  nav.nav
    ul.nav-links
      li(v-for='item in links', :key='item.name')
        a.normal(:href='item.to', target='_blank')
          s-icon(:name='item.icon')
    ul.nav-menu
      li(v-for='item in nav', :key='item.name', :class='{ active: item.to == $route.path }')
        n-link.normal(:to='item.to')
          s-icon(:name='item.icon')
          | {{ item.name }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    nav: {
      type: Array,
      default: () => [],
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
