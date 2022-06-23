<template lang="pug">
#content
  .article    
    .aside.card(v-if='!isMobile && titles && titles.length')
      STitleNav(:nav='titles', :activeIndex="titlesActiveIndex")
    .markdown.card
      client-only
        SMarkdown(:title="archive.title" :content='archive.markdown', @activeChange='onMarkdownScroll', @imageClick="onImageClick" @loaded="onMarkdownLoaded")
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
  },
  methods: {
    onMarkdownLoaded({ html, titles }) {
      this.titles = titles
    },
    onMarkdownScroll({ index, item }) {
      this.titlesActiveIndex = index
    },
    onImageClick(e) {},
  },
  async fetch({ store, params }) {
    await store.dispatch('archive', { ...params })
  },
}
</script>

<style lang="scss" scoped>
@import './_id.scss';
</style>
