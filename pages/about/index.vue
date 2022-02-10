<template lang="pug">
#content
  .about
    .blockquote
      i.quote-left.material-icons format_quote
      .quote-content TECH OTAKUS SAVE THE WORLD
      i.quote-right.material-icons format_quote
    .description(v-for='(part, i) in about', :key='i')
      hr
      .subtitle {{ part.title }}
      SMarkdown(:content="part.content")
</template>
<script>
import { mapState } from 'vuex'
export default {
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

