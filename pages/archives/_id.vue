<template lang="pug">
#content
  .article    
    .aside.card(v-if='!isMobile && titles && titles.length')
      STitleNav(:nav='titles', :activeIndex="titlesActiveIndex", @itemClick="onNavItemClick")
    .markdown.card
      client-only
        SMarkdown(:title="current.title" :content='current.markdown', :offset="navHeight" @activeChange='onMarkdownScroll', @imageClick="onImageClick" @loaded="onMarkdownLoaded")
  client-only
    SComment(:title='this.$route.path')
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data: () => ({
    titlesActiveIndex: null,
    titles: null,
  }),
  computed: {
    ...mapState(['archive']),
    ...mapGetters(['isMobile']),
    current() {
      return this.archive.currentItem
    },
    navHeight() {
      return document.querySelector('#nav').clientHeight;
    }
  },
  methods: {
    onMarkdownLoaded({ html, titles }) {
      this.titles = titles
    },
    onMarkdownScroll({ index, item }) {
      this.titlesActiveIndex = index
    },
    onImageClick(e) {},
    onNavItemClick({ target, item }) {
      window.scrollTo({ top: target.offsetTop - this.navHeight,  behavior: 'smooth' })
    }
  },
  mounted() {
  },
  async fetch({ store, params }) {
    await store.dispatch('archive', { ...params })
  },
}
</script>

<style lang="scss" scoped>
@import './_id.scss';
</style>
