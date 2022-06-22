<template lang="pug">
span.chip(:style="`--color: ${color ? color: '#566687'}` ")
  s-icon.chip-icon(v-if="icon" name="mdi-tag-outline" ) {{ icon }}
  span.chip-text {{ text }}
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  data: () => ({}),
  methods: {},
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
