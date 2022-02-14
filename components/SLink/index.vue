<template lang="pug">
span.link(@click='$router.push(to)')
  slot
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
