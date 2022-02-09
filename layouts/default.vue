<template lang="pug">
#watora
  #background
  #app
    TheNav(
      :title='nav.title',
      :subtitle='nav.subtitle',
      :nav='nav.nav',
      :links='nav.links',
      :drawerBannerBackground='nav.drawerBannerBackground',
      :isMobile='isMobile',
      :isFull='isFull',
      :hide='isHideNav',
      @scrollDown='scrollToContent'
    )
    main#main
      nuxt
    //- 页脚
    TheFooter
    //- 播放器
    //- TheAPlayer(:musics="musics")
    //- Live2d，仅PC端
    //- TheLive2d(v-if="!isMobile", ref="live2d")
    //- 返回顶部
    TheBackTop
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    playlistId: 6760099512,
    musics: [],
    windowWidth: 0,
    nav: {
      title: 'HARUKA',
      subtitle: "Let's search for tomorrow",
      drawer: false,
      drawerBannerBackground: 'https://cdn.jsdelivr.net/gh/tsukiseele/ImageHosting/upload/826f66f94e3ebf1f62cff7c9109bb118.jpeg',
      nav: [
        {
          name: 'Home',
          icon: 'mdi-home',
          to: '/',
        },
        {
          name: 'Projects',
          icon: 'mdi-developer-board',
          to: '/projects',
        },
        {
          name: 'Friends',
          icon: 'mdi-link-variant',
          to: '/friends',
        },
        {
          name: 'Gallery',
          icon: 'mdi-image-frame',
          to: '/gallery',
        },
        {
          name: 'About',
          icon: 'mdi-information',
          to: '/about',
        },
      ],
      links: [
        {
          icon: 'mdi-github',
          to: 'https://github.com/tsukiseele',
        },

        {
          icon: 'mdi-twitter',
          to: 'https://twitter.com/tsukiseele',
        },

        {
          icon: 'mdi-gmail',
          to: 'mailto:tsukiseele@gmail.com',
        },
      ],
    },
  }),
  computed: {
    ...mapState(['header', 'live2dText']),
    ...mapGetters(['isMobile', 'scroll']),
    background() {
      // 判断客户端，防止重复渲染；
      if (process.client) {
        return `url(${this.$static}/bg/${this.getRandomNumber(1, 20)}.webp)`
      }
    },
    isFull() {
      return this.$route.path == '/'
    },
    isHideNav() {
      return this.isFull && document && document.documentElement.clientHeight > this.scroll.pos
    },
  },
  watch: {
    live2dText(newVal) {
      if (this.$refs.live2d) this.$refs.live2d.showMessage(newVal)
    },
    windowWidth(newVal) {
      this.$store.commit('clientWidth', newVal)
    }
  },
  methods: {
    /**
     * 获取播放列表
     */
    async getMusicList(url) {
      try {
        const result = await this.$axios.$get(url)
        if (result.code == 200) {
          const musics = []
          for (const music of result.playlist.tracks) {
            musics.push({
              name: music.name,
              artist: music.ar[0].name,
              cover: music.al.picUrl,
              url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`,
            })
          }
          return musics
        }
      } catch (e) {}
      return undefined
    },
    async initMusicList() {
      /** 歌曲API列表 */
      // 文档参见：https://api.imjad.cn/cloudmusic.md
      const apis = [
        // `http://www.hjmin.com/playlist/detail?id=${this.playlistId}`,
        `https://api.imjad.cn/cloudmusic/?type=playlist&id=${this.playlistId}`,
      ]
      for (const api of apis) {
        const result = await this.getMusicList(api)
        if (result) {
          return (this.musics = result)
        }
      }
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    scrollToContent() {
      this.$nextTick(() => {
        const ele = document.getElementById('container')
        if (ele) {
          this.$store.commit('scroll', {
            pos: ele.offsetTop,
            change: ele.offsetTop,
          })
          ele.scrollIntoView({ behavior: 'smooth' })
        }
      })
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
    // 夜晚改变主题
    changeTheme() {
      if (this.$isNight()) {
        // document.getElementsByTagName("html")[0].setAttribute("theme", "dark");
      }
    },
  },
  beforeMount() {
    this.changeTheme()
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
    this.onResize()

    // this.initMusicList();
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss" scoped>
#watora {
  position: relative;
  #background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(https://cdn.jsdelivr.net/gh/tsukiseele/statics/watora/images/backgrounds/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg);
    // background: url(https://api.paugram.com/wallpaper?source=gt);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
}
@media screen and (max-width: $mobile) {
  #app {
    overflow-x: hidden;
  }
}

#app {
  position: relative;
  // background: var(--color-background);
  // background-color: white;
  // width: 1080px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  // width: $mobile;
  margin: 0 auto;
  box-shadow: var(--shadow);
  /*
  @media screen and (max-width: 1080px) {
    width: $mobile;
  }
  @media screen and (max-width: $mobile) {
    width: 100%;
  }*/
}
#background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  transition: background 1s;
  overflow: hidden;
}

main {
  flex: 1;
  // position: absolute;
  // background: #445;
}
@keyframes identifier {
  100% {
    transform: translate(100%, 100%);
  }
}
</style>
