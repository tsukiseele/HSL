<template lang="pug">
.nav-wrap
  TheBanner(v-if="isFull" :title="title" :subtitle="subtitle" :nav="nav" :links="links")
  //- 仅滑到顶部时显示工具栏
  //- :class="{ 'nav-hide': scroll.change > 100 }"
  //- 'nav-hide': scroll.change > 0,
  nav#nav(v-if="!hide && !isFull")
    .nav-title(@click="$router.push('/')") {{ title }}
    .nav-spacer
    //- , :class="{ 'menu-dark': scroll.pos > 100 }"
    ul.nav-menu(v-if="!isMobile")
      li(v-for="(item, i) in nav", :key="i", @click="$router.push(item.to)")
        s-icon(:name='item.icon')
        .menu-title {{ item.name }}
    .nav-spacer
    .nav-bars(v-if="isMobile", @click="drawer = !drawer")
      s-icon(name='menu')
  .nav-drawer(v-if="isMobile", :class="{ open: drawer }")
    .drawer-blank(@click="drawer = !drawer")
    .drawer-main
      .drawer-banner
        img.drawer-banner-bg(:src="drawerBannerBackground")
      ul.drawer-menu(@click="drawer = !drawer")
        li(
          v-for="(item, j) in nav",
          :key="j",
          @click="$router.push(item.to)"
        )
          s-icon(:name='item.icon')
          .menu-title {{ item.name }}
</template>

<script>
export default {
  props: {
    hide: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => []
    },
    nav: {
      type: Array,
      default: () => []
    },
    isFull: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    drawerBannerBackground: {
      type: String,
      default: null
    },
  },
  data: () => ({
    drawer: false
  }),
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
