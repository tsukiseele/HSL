<template lang="pug">
#gallery.card
  //- TheBanner(:title='banner.title', :cover='banner.cover')
  .gallery-list
    client-only
      s-simple-waterfall(:items="images" imageKey="url" :itemWidth="isMobile ? 170 : 240" :gap='isMobile ? 10 : 20' evenly)
        template(v-slot="{ index, item }")
          span {{ item.title }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data: () => ({
    banner: {
      title: '相册',
      cover: null,
    },
    imgsArr: [],
  }),
  computed: {
    ...mapState(['images']),
    ...mapGetters(['isMobile']),
  },
  methods: {
    onItemClick(cover) {
      this.banner.cover = cover.value.url
    },
  },
  async fetch({ store, params }) {
    await store.dispatch('images')
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
