<template lang="pug">
#content
  main#main
    .aside
      //- TheInfoCard(:icon='res.icon')
      .aside-static
        .aside-decorate.card
          .decorate-burst-12 
            .burst-12 
          .decorate-text TsukiSeele
        //- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil officiis repellat nisi iusto cum eveniet, soluta magnam natus repudiandae beatae deleniti cumque inventore id mollitia laborum ratione voluptate eum tempora?
      .aside-sticky
        SLabelClouds.card(:labels='labels')
        TheCategory(:categorys='categorys')
    .post
      .error(v-if='error') {{ error }}
      .post-item-wrap(v-for='(item, index) in archive.items', :key='index')
        SPostItem(
          :title='item.title',
          :cover='item.cover.url',
          :date='item.createAt',
          :labels='item.labels',
          :description='item.description',
          :category='item.category',
          :to='`/archives/${item.id || ""}`',
          data-aos='fade-up' 
        )

      SPagination.pagination(:current='archive.page' :total='archive.totalCount' :size="$config.blog.paginationSize" :length="length"  @change='onChange' :loading='isLoading')
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    error: null,
    length: 5,
    isLoading: false,
  }),
  computed: {
    ...mapState(['scroll', 'archive', 'labels', 'categorys']),
    isMobile() {
      return this.$store.getters.isMobile
    },
    res() {
      return {
        icon: `${this.$config.static}/icon/icon.png`,
      }
    },
  },
  methods: {
    async onChange(page) {
      this.$router.push({ params: { page } })
    },
  },
  async fetch({ app, store, params }) {
    await Promise.all([
      store.dispatch('archives', {
        page: parseInt(params.page || 1) ,
        count: app.$config.blog.paginationSize,
      }),
      store.dispatch('labels'),
      store.dispatch('categorys'),
    ])
  },
}
</script>

<style lang="scss" scoped>
@import '_page.scss';
</style>
