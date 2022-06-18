<template lang="pug">
#haruka
  #background
    .decorate
      .decorate-item
      .decorate-item
  #app(:class="{ full: isFull }")
    TheNav(
      :title='navigation.title',
      :subtitle='navigation.subtitle',
      :nav='navigation.nav',
      :links='navigation.links',
      :drawerBannerBackground='navigation.drawerBannerBackground',
      :isMobile='isMobile',
      :isFull='isFull',
      :isTransparent='isTransparentNav',
      :isHide='isHideNav',
    )
    main#main
      nuxt
    //- 页脚
    TheFooter#footer
    //- 播放器
    TheAPlayer(:musics="musics")
    //- 返回顶部
    //- TheBackTop
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    musics: [],
    windowWidth: 0,
  }),
  computed: {
    ...mapState(['navigation']),
    ...mapGetters(['isMobile', 'scroll']),
    background() {
      return process.client ? `url(${this.$static}/bg/${this.getRandomNumber(1, 20)}.webp)` : ''
    },
    isFull() {
      return this.$route.path == '/'
    },
    isHideNav() {
      return this.isFull && (process.server || this.scroll.pos <= document.documentElement.clientHeight)
    },
    isTransparentNav() {
      return false // this.scroll.pos < 64
    },
  },
  watch: {
    windowWidth(newVal) {
      this.$store.commit('clientWidth', newVal)
    },
  },
  methods: {
    /**
     * 获取播放列表
     */
    async getMusicList() {
      try {
        // const api =
        const result = await (await fetch(this.$config.musicAPI, { method: 'GET', mode: 'cors' })).json()
        if (result.code == 200) {
          this.musics = result.playlist.tracks.map((item) => ({
            id: item.id,
            name: item.name,
            artist: item.ar.map((item) => item.name).toString(),
            cover: item.al.picUrl ? item.al.picUrl.replace('http://', 'https://') : '',
            url: `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`,
          }))
        }
      } catch (e) {
        console.log(e)
      }
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    onScroll() {
      const newPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scroll = this.$store.getters.scroll
      this.$store.commit('scroll', {
        pos: newPos,
        change: scroll && scroll.pos ? newPos - scroll.pos : 0,
      })
    },
    onResize() {
      if (document) {
        this.windowWidth = document.documentElement.clientWidth
      }
    },
    init() {
      this.$nextTick(() => {
        this.onScroll()
        this.onResize()
      })
    },
  },
  mounted() {
    this.init()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)

    this.getMusicList()
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss" scoped>
#haruka {
  #background {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    // background-image: url(https://cdn.jsdelivr.net/gh/tsukiseele/statics/watora/images/backgrounds/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg);
    // background-color: #F4D8E4;
    // background-image: url(https://api.paugram.com/wallpaper?source=gt);
    background-color: #f4d8e4;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 10%;
    //   width: 80%;
    //   height: 100%;
    //   background-image: radial-gradient(#f4d8e4, #f4d8e4, 0.25rem, transparent 0.25rem);
    //   background-repeat: repeat;
    //   background-size: 1rem 1rem;
    //   z-index: -1;
    // }
    @include screen-mobile {
      &::before,
      &::after {
        border: none;
      }
    }
    .decorate {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .decorate-item {
        position: absolute;
        top: 0;
        // width: 2px;
        height: 100%;
        &:first-of-type {
          left: 10%;
          background-image: repeating-linear-gradient(0deg, #c7b3d6, #c7b3d6 2px, white 4px, white 8px);
        }
        &:last-of-type {
          right: 10%;
          background-image: repeating-linear-gradient(0deg, #c7b3d6, #c7b3d6 2px, white 4px, white 8px);
        }
        height: 100%;
        overflow: hidden;
      }
    }
  }
}
@media screen and (max-width: $mobile) {
  #app {
    overflow-x: hidden;
  }
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
}

#main {
  flex: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: var(--nav-height);
  width: 1080px;
}

.full {
  #footer {
    display: none;
  }
  #main {
    margin-top: 0;
  }
}

@media screen and (max-width: 1080px) {
  main#main {
    width: 100%;
  }
}
</style>
