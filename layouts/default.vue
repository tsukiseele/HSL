<template lang="pug">
#haruka
  #background
  #app(:class="{ full: isFull }")
    TheNav(
      :title='nav.title',
      :subtitle='nav.subtitle',
      :nav='nav.nav',
      :links='nav.links',
      :drawerBannerBackground='nav.drawerBannerBackground',
      :isMobile='isMobile',
      :isFull='isFull',
      :isTransparent='isTransparentNav',
      :isHide='isHideNav',
      @scrollDown='scrollToContent'
    )
    //- Banner
    TheBanner(v-if='isFull', :title='nav.title', :subtitle='nav.subtitle', :nav='nav.nav', :links='nav.links', @scrollDown='$emit("scrollDown")', hideArrow, :introduction="nav.introduction")
    main#main
      nuxt
    //- 页脚
    TheFooter#footer
    //- 播放器
    TheAPlayer(:musics="musics")
    //- 返回顶部
    TheBackTop
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    playlistId: 7490559834, //6760099512,
    musics: [],
    windowWidth: 0,
    nav: {
      title: '砂糖と塩',
      subtitle: "Let's search for tomorrow",
      introduction:
        '久しぶり！这里是以松阪砂糖和神户盐作为配色的个人网站主题HSL，目前正在摸鱼开发中，砂糖ちゃん！我的砂糖ちゃん！！！（PS: 发电中）',
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
          icon: 'mdi-lightbulb-on-outline',
          to: '/projects',
        },
        {
          name: 'Blog',
          icon: 'mdi-clipboard-text-outline',
          to: '/post',
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
    live2dText(newVal) {
      if (this.$refs.live2d) this.$refs.live2d.showMessage(newVal)
    },
    windowWidth(newVal) {
      console.log(newVal)
      this.$store.commit('clientWidth', newVal)
    },
  },
  methods: {
    /**
     * 获取播放列表
     */
    async getMusicList() {
      try {
        const api = `https://api.hlo.li/music/playlist/detail?id=${this.playlistId}`
        const result = await (await fetch(api, { method: 'GET', mode: 'cors' })).json()
        if (result.code == 200) {
          this.musics = result.playlist.tracks.map((item) => ({
            id: item.id,
            name: item.name,
            artist: item.ar.map((item) => item.name).toString(),
            cover: item.al.picUrl,
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
      console.log(this.windowWidth)
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
    init() {
      this.$nextTick(() => {
        this.onScroll()
        this.onResize()
      })
    },
  },
  beforeMount() {
    this.changeTheme()
  },
  mounted() {
    // window.addEventListener('load', this.init)
    this.init()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)

    this.getMusicList()
  },
  destroyed() {
    window.removeEventListener('load', this.init)
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
    transition: background 1s;
    overflow: hidden;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 2px;
      height: 100%;
      z-index: -2;
    }
    &::before {
      border-left: 2px dotted #c16798;
      left: 5rem;
    }
    &::after {
      border-right: 2px dotted #c16798;
      right: 5rem;
    }
    @include screen-mobile {
      &::before, 
      &::after {
        border: none;
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
@keyframes identifier {
  100% {
    transform: translate(100%, 100%);
  }
}
</style>
