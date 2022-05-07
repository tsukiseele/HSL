<template lang="pug">
#content
  TheAPlayer
</template>

<script>
import { mapState } from 'vuex'
import TheAPlayer from '@/components/TheAPlayer.vue'

export default {
  scrollToTop: true,
  data: () => ({
    header: {
      title: 'HARUKA',
    },
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
  watch: {
    itemActive(newVal, oldVal) {
      if (newVal) {
        this.$store.commit('live2dText', `要阅读『${newVal} 』吗?`)
      }
    }
    /*
    $route: {
      handler(to, from) {
        if (process.client) {
          this.$nextTick(() => {
            setTimeout(() => {
              document
                .getElementById("container")
                .scrollIntoView({ behavior: "smooth" });
            }, 0);
          });
        }
      },
      deep: true,
      immediate: true,
    },*/,
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
    }
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

</style>
