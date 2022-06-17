<template lang="pug">
.book(@click="$emit('click')")
  SIcon.book-icon(:name="icon")
  .book-name {{ name }}
  .book-sides
    .book-side
    .book-side
    .book-side
    .book-side

</template>

<script>
export default {
  props: {
    icon: '',
    name: '',
  },
  data: () => ({}),
  methods: {},
}
</script>

<style lang="scss" scoped>
.book {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
  border: 1px dashed #b980ae;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: -500% -200%;
  width: 4rem;
  .book-sides {
  position: relative;
    .book-side {
      position: absolute;
      width: 300%;
      height: 100%;
      background-color: teal;
      &:nth-of-type(1) {
        transform: rotate(90deg) translateX(-50%) translateZ(2rem);
      }
      // &:nth-of-type(2) {
      //   transform: rotate(90deg) translateX(-50%) translateZ(2rem);
      // }
      // &:nth-of-type(3) {
      //   transform: rotate(90deg) translateX(-50%) translateZ(2rem);
      // }
      // &:nth-of-type(4) {
      //   transform: rotate(90deg) translateX(-50%) translateZ(2rem);
      // }
    }
  }
  .book-icon {
    font-size: 1.4rem;
  }
  .book-name {
    text-transform: uppercase;
    writing-mode: vertical-lr;
    font-size: 1.2rem;
  }
}
</style>
