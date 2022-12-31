<template lang="pug">
#content
  .title(data-aos="fade-down" data-aos-delay="300") {{ navigation.title }}
  //- .title
    //- span.letter__wrapper(v-for="char in navigation.title.toLowerCase()" )
    //-   .letter(:class="char")
    //-  {{ navigation.title }}
  .subtitle(data-aos="fade-down" data-aos-delay="300") {{ navigation.subtitle }}
  
  div.introduction(data-aos="fade-right" data-aos-delay="600")
    .blockquote
      SIcon(name='quote').quote-left
      .quote-content(v-html="navigation.introduction" :data-from="navigation.introductionFrom")
      SIcon(name='quote').quote-right
  nav.nav
    ul.nav-menu
      li.nav-item(v-for='item in navigation.nav', :key='item.name', :class='{ active: item.to == $route.path }' @click="$router.push(item.to)")
        SIcon(:name='item.icon')
        .nav-name {{ item.name }}
        .nav-underline
  ul.nav-links
    li.nav-link-item(v-for='item in navigation.links', :key='item.name')
      .item__bg
      a(:href='item.to', target='_blank')
        SIcon(:name='item.icon')
  .decorate-ferris-wheel
    .decorate-item
    .decorate-item
    .decorate-item
  .decorate-side
    .decorate-item(:data-theme-background="$config.sideTheme")
    .decorate-item(:data-theme-background="$config.sideTheme")
  .decorate
    .decorate-item(v-for='char in navigation.decorateText' :data-content="char") {{ char }}
  //- .decorate-burst-12
  //-   .burst-12
  //-   .burst-12
  //-   .burst-12
  //-   .burst-12
  //-   .burst-12
  //-   .burst-12
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapState(['navigation']),
    ...mapGetters(['isMobile']),
  },
  methods: {},
  mounted() {
    // document.querySelectorAll('.burst-12').forEach((el) => {
    //   el.style.left = `${Math.random() * 80 + 10}%`
    //   el.style.top = `${Math.random() * 80 + 10}%`
    // })
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
