<template lang="pug">
#content
  .about
    .blockquote
      s-icon(name='mdi-format-quote-open').quote-left
      .quote-content TECH OTAKUS SAVE THE WORLD
      s-icon(name='mdi-format-quote-close').quote-right
    .description(v-for='(part, i) in about', :key='i')
      hr
      .subtitle {{ part.title }}
      SMarkdown(:content='part.content')
</template>
<script>
import { mapState } from 'vuex'
// import { useMeta } from 'nuxt-edge'

export default {
  setup() {
    useMeta({
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
      bodyAttrs: {
        class: 'test',
      },
    })
  },
  data: () => ({
    header: {
      title: '关于',
      subtitle: '',
    },
  }),
  computed: {
    ...mapState(['about']),
  },
  async fetch({ store }) {
    await store.dispatch('about')
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

