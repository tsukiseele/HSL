<template lang="pug">
#banner
  .title(data-aos="fade-down") {{ title }}
  .subtitle(data-aos="fade-down") {{ subtitle }}
  nav.nav
    ul.nav-links(data-aos="fade-down"  data-aos-delay="300")
      li(v-for='item in links', :key='item.name')
        a.normal(:href='item.to', target='_blank')
          s-icon(:name='item.icon')
    ul.nav-menu(data-aos="fade-right"  data-aos-delay="600")
      li(v-for='item in nav', :key='item.name', :class='{ active: item.to == $route.path }' @click="$router.push(item.to)")
        SIcon(:name='item.icon')
        .nav-name {{ item.name }}
    div.introduction(data-aos="fade-up"  data-aos-delay="900")
      span {{ introduction }} 
    .decorate
      .decorate-item(data-content="S") S
      .decorate-item(data-content="W") W
      .decorate-item(data-content="E") E
      .decorate-item(data-content="E") E
      .decorate-item(data-content="T") T
      //- .decorate-item(data-content="H") H
      //- .decorate-item(data-content="U") U
      //- .decorate-item(data-content="R") R
      //- .decorate-item(data-content="T") T
      
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
    introduction: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
