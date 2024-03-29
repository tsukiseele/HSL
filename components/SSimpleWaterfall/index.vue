<template lang="pug">
.simple-waterfall
  slot(name='header')
  .list
    .list-item(v-for='(item, index) in items', :key='index', @click='$emit("click", item)')
      img.list-item--image(v-lazy='imageKey ? item[imageKey] : item.src')
      slot(:index='index', :item='item')
  slot(name='footer')
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    imageKey: {
      type: String,
      default: null,
    },
    itemWidth: {
      type: Number,
      default: 250,
    },
    gap: {
      type: Number,
      default: 20,
    },
    evenly: {
      type: Boolean,
      default: false,
    },
    maxColumn: {
      type: Number,
      default: null,
    },
    height: {
      type: Number | String,
      default: null,
    },
  },
  data: () => ({
    column: null,
    resizeObserver: null,
    resizeTimer: null,
  }),
  watch: {
    async items() {
      this.$emit('load')
      await this.getImageSize()
      this.fall()
      this.$emit('loaded')
    },
  },
  methods: {
    responsive() {
      this.$el && this.fall()
    },
    fall() {
      // 获取当前组件的宽度
      const containerWidth = this.$el.offsetWidth
      // 列数：若传入列数，则使用，否则自动计算：实际列数 = 页面宽度 / (图片宽度 + 间距)
      this.column = Math.floor((containerWidth - this.gap) / (this.itemWidth + this.gap))
      this.column = this.maxColumn && this.column > this.maxColumn ? this.maxColumn : this.column || 1
      // 每项间隔：若设置平分间距，则自动计算，否则为传入的间距
      const realGap = this.evenly ? (containerWidth - this.itemWidth * this.column) / (this.column + 1) : this.gap
      // 边距：若设置平分间距，则为传入的间距，否则自动计算
      const margin = this.evenly ? realGap : (containerWidth - (this.itemWidth + realGap) * this.column + realGap) / 2
      // 获取所有需要布局的项
      const itemEls = this.$el.querySelectorAll('.list-item')
      // 数组，保存最低高度
      const heightArr = []
      // x, y轴偏移量
      let x, y
      // 遍历并通过已知高度布局
      itemEls.forEach((itemEl, i) => {
        itemEl.style.width = this.itemWidth + 'px'
        itemEl.style.height = this.items[i]._height
        // 遍历所有的外层容器
        const height = itemEl.offsetHeight
        // 如果当前处在第一行
        if (i < this.column) {
          x = (this.itemWidth + realGap) * i + margin
          y = 0
          heightArr.push(height)
        } else {
          const minHeight = Math.min(...heightArr)
          const minIndex = heightArr.indexOf(minHeight)
          x = (this.itemWidth + realGap) * minIndex + margin
          y = minHeight + realGap
          heightArr[minIndex] = minHeight + realGap + height
        }
        itemEl.style.left = x + 'px'
        itemEl.style.top = y + 'px'
      })
      this.$el.style.height = this.height ? this.height : Math.max(...heightArr) + 'px'
    },
    async getImageSize() {
      await Promise.allSettled(
        this.items.map(
          (item) =>
            new Promise((resolve) => {
              const img = new Image()
              img.src = this.imageKey ? item[this.imageKey] : item.src
              img.onload = img.onerror = (e) => {
                if (img.width > 0 && img.height > 0) {
                  item._height = img.height
                }
                resolve({ width: img.width, height: img.height })
              }
            })
        )
      )
    },
    // 监听组件变化
    listenLayoutChanged() {
      this.resizeObserver = new ResizeObserver((entries) => {
        if (entries && entries.length) {
          this.resizeTimer && clearTimeout(this.resizeTimer)
          this.resizeTimer = setTimeout(() => {
            this.responsive()
            clearTimeout(this.resizeTimer)
            this.resizeTimer = null
          }, 500)
        }
      })
      this.resizeObserver.observe(this.$el)
    },
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getImageSize()
      this.fall()
    })
    this.listenLayoutChanged()
  },
  beforeDestroy() {
    this.resizeObserver && this.resizeObserver.disconnect()
  },
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  .list-item {
    position: absolute;
    transition: 0.25s ease;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
