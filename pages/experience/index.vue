<template lang="pug">
#content.experience
  .classify(v-for="(classify, key) in experience" :key="key" :class="`classify--${key}`")
    .classify__name(:data-name="classify.title") {{ classify.title }}
    .classify__list
      .classify__list-item(v-for="(item, index) in classify.items" :key="index")
        .item__cover-wrapper(v-if="item.cover")
          img.item__cover(v-lazy="item.cover" :alt="item.name")
        .item__info
          .item__info-name {{ item.name }}
          .item__info-desc {{ item.desc }}
          .item__info-detail
            span {{ item.desc }}
        .item__type
          SIcon(v-if="item.type == 'github'" name="mdi-github")
          SIcon(v-else-if="item.type == 'website'" name="mdi-web")
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState(['experience']),
  },
  methods: {
    onItemClick(item) {
      item && item.link && window.open(item.link, '_blank')
    },
  },
  async fetch({ store, params }) {
    await store.dispatch('experience')
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
