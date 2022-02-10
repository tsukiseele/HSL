<template lang="pug">
.comment.card
  Vssue(:title="title")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  }
};
</script>

<style lang="scss" scoped>
.comment {
}
::v-deep .vssue {
  a {
    &::before,
    &::after {
      display: none;
    }
  }
}
</style>