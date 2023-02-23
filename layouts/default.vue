<template lang="pug">
#hsl
  #background(:data-theme-background="$config.backgroundTheme")
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
    scroll(nv, ov) {
      const root = document.querySelector(':root')
      if (!root) return
      root.style.setProperty('--nav-height', nv.pos > 32 ? '3rem' : '4rem');
    }
  },
  methods: {
    /**
     * 获取播放列表
     */
    async getMusicList() {
      try {
        const result = await (await fetch(this.$config.musicAPI, { method: 'GET', mode: 'cors' })).json()
        if (result.code == 200) {
          this.musics = result.playlist.tracks.map((item) => ({
            id: item.id,
            name: item.name,
            artist: item.ar.map((item) => item.name).toString(),
            cover: item.al.picUrl ? item.al.picUrl.replace('http://', 'https://') : '',
            url: `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`,
            // lrc: `https://api.hlo.li/music/lyric?id=${item.id}`
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
#hsl {
  #background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-repeat: repeat;
    background-attachment: fixed;
    overflow: hidden;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          
          background-color: white;
          opacity: .1;
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
  width: 1120px;
  // width: calc(100% - 480px);
}

.full {
  #footer {
    display: none;
  }
  #main {
    margin-top: 0;
  }
}

// @media screen and (max-width: calc(1080px + 2rem)) {
@media screen and (max-width: 1120px) {
  main#main {
    width: 100%;
  }
}
</style>
