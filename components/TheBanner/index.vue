<template lang="pug">
#banner
  .title(data-aos="fade-in") {{ title }}
  .subtitle(data-aos="fade-in") {{ subtitle }}
  nav.nav
    ul.nav-links(data-aos="fade-up")
      li(v-for='item in links', :key='item.name')
        a.normal(:href='item.to', target='_blank' data-aos="fade-in")
          s-icon(:name='item.icon')
    ul.nav-menu
      li(v-for='item in nav', :key='item.name', :class='{ active: item.to == $route.path }')
        n-link.normal(:to='item.to')
          s-icon(:name='item.icon')
          | {{ item.name }}
    div.introduction
      //- span Hi, 
  s-icon.scroll-down(v-if="!hideArrow" name='mdi-chevron-down', @click='$emit("scrollDown")')
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    nav: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] },
    hideArrow: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
