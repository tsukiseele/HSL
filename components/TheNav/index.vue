<template lang="pug">
#the-nav
  //- 导航栏
  nav#nav(:class='{ hide: isHide, transparent: isTransparent }')
    .nav-title(@click='$router.push("/")') {{ title }}
    .nav-spacer
    ul.nav-menu
      li.nav-menu__item(v-for='(item, i) in nav', :key='i', :class="{ active: $route.path == item.to }" @click='$router.push(item.to)')
        SIcon(:name='item.icon')
        .menu-title {{ item.name }}
    .nav-spacer
    .nav-drawer-bar(@click='drawer = !drawer')
      SIcon(name='menu')
  //- 抽屉
  .nav-drawer(v-if='isMobile', :class='{ open: drawer }')
    .drawer-blank(@click='drawer = !drawer')
    .drawer-main
      .drawer-banner
        //- img.drawer-banner-bg(:src='drawerBannerBackground')
      ul.drawer-menu(@click='drawer = !drawer')
        li(v-for='(item, j) in nav', :key='j', @click='$router.push(item.to)')
          SIcon(:name='item.icon')
          .menu-title {{ item.name }}
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
    links: {
      type: Array,
      default: () => [],
    },
    nav: {
      type: Array,
      default: () => [],
    },
    isHide: {
      type: Boolean,
      default: false,
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    isTransparent: {
      type: Boolean,
      default: false,
    },
    drawerBannerBackground: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    drawer: false,
  }),
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
