<template lang="pug">
.markdown-preview
  .markdown-title(v-if="title") {{ title }}
  .markdown-content(v-html='markdown')
  transition(name='zoom')
    .markdown-image-preview-modal(v-if='previewEl', @click='cancelPreview')
  //- img.markdown-image-preview(v-if='preview', :src='preview', ref='preview')
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    _timer: null,
    preview: null,
    previewEl: null,
    titles: null,
  }),
  computed: {
    markdown() {
      try {
        if (!this.$markdown) return null
        const result = this.$markdown(this.content)
        this.$emit('loaded', result)
        this.titles = result.titles
        return result.html
      } catch (error) {
        console.error(error)
      }
      return null
    },
  },
  methods: {
    getNavPosition() {
      const titles = document.querySelectorAll(".markdown [id^='md-title']")
      if (!titles.length) return
      let title, i
      for (i = 0; i < titles.length; i++) {
        title = titles[i]
        const rect = title.getBoundingClientRect()
        if (rect.top - rect.height > this.offset) break
      }
      this.$emit('activeChange', { index: i - 1, item: title })
    },
    onScroll() {
      // this._timer && clearTimeout(this._timer)

      // this._timer = setTimeout(() => {
      //   this.getNavPosition()
      //   this.cancelPreview()
      // }, 200)
      requestAnimationFrame(() => {
        this.getNavPosition()
        this.cancelPreview()
      })
    },
    cancelPreview() {
      if (this.previewEl) {
        this.previewEl.style.transform = 'none'
        this.previewEl.style.zIndex = 0
        this.previewEl = null
      }
    },
    openPreview(imgEl) {
      if (imgEl) {
        this.previewEl = imgEl
        const elRect = this.previewEl.getBoundingClientRect()
        const targetTop = (window.innerHeight - elRect.height) / 2
        const targetLeft = (window.innerWidth - elRect.width) / 2
        const scale = elRect.width / elRect.height > window.innerWidth / window.innerHeight ? window.innerWidth / elRect.width : window.innerHeight / elRect.height
        this.previewEl.style.transform = `translate(${targetLeft - elRect.left}px, ${targetTop - elRect.top}px) scale(${scale})`
        this.previewEl.style.zIndex = 16
      }
    },
    init() {
      this.initCopy()
      this.initPreview()
    },
    initCopy() {
      document
        .querySelectorAll('.markdown-content .code-options [data-copy]')
        .forEach((el) => (el.onclick = (e) => navigator.clipboard.writeText(document.getElementById(el.getAttribute('data-copy')).textContent)))
    },
    initPreview() {
      document
        .querySelectorAll('.markdown-content img')
        .forEach((imgEl) => imgEl.addEventListener('click', (e) => this.$nextTick(() => (this.previewEl ? this.cancelPreview() : this.openPreview(e.target)))))
    },
  },
  created() {},
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.init()
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
<style lang="scss" scoped>
.markdown-image-preview {
  position: fixed;
  opacity: 0;
}
</style>

<style lang="scss">
// @import "highlight.js/styles/atom-one-dark.css";
@import 'highlight.js/styles/stackoverflow-light.css';

@import './index.scss';

@import './theme/hsl.scss';
/*
:root[theme="dark"] {
  @import "./theme/dark.scss";
}*/
</style>
