<template lang="pug">
client-only
  aplayer(fixed crossOrigin="anonymous" :audio="musics" :lrcType="3" )
</template>

<script>
export default {
  props: {
    musics: Array,
  },
}
</script>
<style lang="scss" scoped>
::v-deep.aplayer {
  &.aplayer-narrow .aplayer-body {
    left: -66px !important;
    transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      left: 0 !important;
    }
  }
  .aplayer-lrc {
    display: none !important;
  }
}
</style>
