<template lang="pug">
span.chip(:style="`--color: ${color ? color: '#566687'}` ")
  SIcon.chip-icon(v-if="icon" :name="icon || 'sell'" )
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
