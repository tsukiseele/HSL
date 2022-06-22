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
      .post-item-wrap(v-for='(item, index) in archives', :key='index')
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
        //- :data-aos='index % 2 ? "fade-left" : "fade-right"',
        //- :data-aos-once='isAosOnce'

      SPagination(:current='page', @change='onChange', :size='10', :loading='isLoading')
</template>

<script>
import { mapState } from 'vuex'

export default {
  scrollToTop: true,
  data: () => ({
    arch: null,
    error: null,
    isLoading: false,
    itemActive: null,
    isAosOnce: false,
    _timer: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this._timer = setTimeout(() => {
        this.$aos.refresh()
      })
    })
  },
  computed: {
    ...mapState(['page', 'scroll', 'archives', 'labels', 'categorys']),
    isMobile() {
      return this.$store.getters.isMobile
    },
    res() {
      const icon = `${this.$static}/icon/icon.png`
      // const placeholder = this.$src.images.placeholder
      return {
        icon,
        // placeholder,
      }
    },
  },
  methods: {
    async onChange(page) {
      this.$router.push({ params: { page } })
    },
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('archives', {
        page: Number(params.page || 1),
        count: 10,
      }),
      store.dispatch('labels'),
      store.dispatch('categorys'),
    ])
  },
  beforeDestroy() {
    clearTimeout(this._timer)
  },
}
</script>

<style lang="scss" scoped>
@import '_page.scss';
</style>
