<template lang="pug">
.title-nav-view
  ul.title-nav
    li.title-nav-item(v-for='(item, i) in nav', :key='item.id', :class='[`h${item.level}`, isActive(i)]' @click='onNavItemClick(item)') 
      span.title-nav-text {{ item.title }}
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      default: () => [],
    },
    activeIndex: {
      type: Number,
      default: null,
    }
  },

  data: () => ({}),
  methods: {
    onNavItemClick(item) {
      if (item && item.id) {
        const target = document.getElementById(item.id)
        target && this.$emit('itemClick', { target, item })
      }
    },
    isActive(i) {
      return this.activeIndex == i ? 'active' : ''
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
