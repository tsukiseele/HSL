<template lang="pug">
.info-card.card
  img.card-icon(v-lazy="icon")
  .card-title TsukiSeele
  .card-info Tsutsukakushi Tsukiko
  hr
  .card-links
    a.normal(href="https://github.com/tsukiseele", target="_brank") 
      i.fa.fa-github.fa-lg(aria-hidden="true")
    a.normal(href="https://twitter.com/tsukiseele", target="_brank") 
      i.fa.fa-twitter.fa-lg(aria-hidden="true")
    a.normal(href="mailto:tsukiseele@gmail.com") 
      i.fa.fa-envelope.fa-lg(aria-hidden="true", style="font-size: 1.15em")
</template>

<script>
export default {
  props: {
    icon: String
  },
  data: () => ({}),
  computed: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>


@media screen and (max-width: $mobile) {
  .card-icon {
    height: 6rem;
    width: 6rem;
  }
}
.info-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-card);
  // border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: var(--shadow);
  .card-icon {
    object-fit: cover;
    height: 6.7rem;
    width: 6.7rem;
    margin: 0.5rem;
    border-radius: 50%;
    transition: transform 0.5s;
    &:hover {
      transform: rotate(360deg);
    }
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: normal;
    font-family: InfoDisplay;
    color: var(--color-text-primary);
  }
  .card-info {
    color: var(--color-text-secondary);
    font-family: InfoDisplay;
    padding: 0 0 1rem 0;
  }

  .card-links {
    color: var(--color-text);
    cursor: pointer;
    i {
      padding: 0.33rem 1rem;
    }
  }
}
</style>
