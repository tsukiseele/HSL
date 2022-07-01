<template lang="pug">
#content
  .header  
    .header__avatar-wrapper
      img.header__avatar(src="https://avatars.githubusercontent.com/u/28500231?v=4")
    span.letter__wrapper(v-for="char in name.toLowerCase()" )
      .letter(:class="char")
  .about.card
    .blockquote
      s-icon(name='quote').quote-left
      .quote-content 砂糖少女は愛を食む
      s-icon(name='quote').quote-right
    .description(v-for='(part, i) in about', :key='i')
      hr
      .subtitle {{ part.title }}
      SMarkdown(:content='part.content')
</template>
<script>
import { mapState } from 'vuex'
// import { useMeta } from 'nuxt-edge'
import config from '@/config'
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
      name: 'tsukiseele',
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

