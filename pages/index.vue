<template lang="pug">
#content

  .title(data-aos="fade-down") {{ navigation.title }}
  .subtitle(data-aos="fade-down") {{ navigation.subtitle }}
  nav.nav
    ul.nav-links(data-aos="fade-down"  data-aos-delay="300")
      li(v-for='item in navigation.links', :key='item.name')
        a.normal(:href='item.to', target='_blank')
          s-icon(:name='item.icon')
    ul.nav-menu(data-aos="fade-right"  data-aos-delay="600")
      li(v-for='item in navigation.nav', :key='item.name', :class='{ active: item.to == $route.path }' @click="$router.push(item.to)")
        SIcon(:name='item.icon')
        .nav-name {{ item.name }}
  .decorate
    .decorate-item(data-content="S") S
    .decorate-item(data-content="W") W
    .decorate-item(data-content="E") E
    .decorate-item(data-content="E") E
    .decorate-item(data-content="T") T
  
  div.introduction(data-aos="fade-up"  data-aos-delay="900")
    span {{ navigation.introduction }} 
</template>

<script>
import { mapState } from 'vuex'

export default {
  scrollToTop: true,
  data: () => ({}),
  mounted() {},
  computed: {
    ...mapState(['page', 'scroll', 'archives', 'labels', 'categorys', 'navigation']),
    isMobile() {
      return this.$store.getters.isMobile
    },
  },
  methods: {},
  // async fetch({ store, params }) {
  //   await Promise.all([
  //     store.dispatch('archives', {
  //       page: Number(params.page || 1),
  //       count: 10,
  //     }),
  //     store.dispatch('labels'),
  //     store.dispatch('categorys'),
  //   ])
  // },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 2.4rem;
  color: #cd5da0;
}
.subtitle {
  font-weight: lighter;
  color: #c7b3d6;
}
.decorate {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  animation: fade 2s 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;
  transform: translateY(-100%) translateZ(0);
  z-index: -1;
  @keyframes fade {
    100% {
      transform: translateY(0) translateZ(0);
    }
  }
  .decorate-item {
    position: absolute;
    top: 0;
    font-size: 3rem;
    color: transparent;
    transform-origin: top center;
    z-index: -1;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 4rem;
      left: 50%;
      width: 3px;
      transform: translateX(-50%);
      // background-color: #C7B3D6;
      // background-image: repeating-linear-gradient(0deg, rgb(234, 191, 212), rgb(234, 191, 212) 0.6rem, white 0.6rem, white 1rem);
      background-image: repeating-linear-gradient(0deg, #c7b3d6, #c7b3d6 0.6rem, white 0.6rem, white 1rem);
    }
    &::after {
      content: attr(data-content);
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 3rem;
      font-weight: bold;
      text-shadow: -2px -2px white, 2px -2px white, -2px 2px white, 2px 2px white;
    }
    &:nth-of-type(1) {
      animation: identifier 4s 0.5s ease-in-out infinite;
      height: 24%;
      &::after {
        color: rgb(255, 182, 185);
        transform: rotate(-30deg);
      }
      left: 15%;
    }
    &:nth-of-type(2) {
      animation: identifier 3s 1s ease-in-out infinite;
      height: 30%;
      &::after {
        // color: rgb(250, 227, 217);
        color: #b7d7b6;
        transform: rotate(0);
      }
      left: 30%;
    }
    &:nth-of-type(3) {
      animation: identifier 4s -0.5s ease-in-out infinite;
      height: 26%;
      &::after {
        color: #c7b3d6;
        transform: rotate(15deg);
      }
      left: 50%;
    }
    &:nth-of-type(4) {
      animation: identifier 3s 0.5s ease-in-out infinite;
      height: 20%;
      &::after {
        color: rgb(187, 222, 214);
        transform: rotate(-15deg);
      }
      left: 60%;
    }
    &:nth-of-type(5) {
      animation: identifier 5s 0.5s ease-in-out infinite;
      height: 32%;
      &::after {
        color: rgb(138, 198, 209);
        transform: rotate(30deg);
      }
      left: 75%;
    }
    @keyframes identifier {
      0% {
        transform: rotate(-3deg) rotateY(-15deg);
      }
      50% {
        transform: rotate(3deg) rotateY(15deg);
      }
      100% {
        transform: rotate(-3deg) rotateY(-15deg);
      }
    }
  }

  @include screen-mobile {
    height: 50%;
    .decorate-item {
      font-size: 3rem;
      &::before {
        bottom: 4rem;
      }
      &::after {
        font-size: 3rem;
      }
    }
  }
}
#content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  .title {
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 2.4rem;
  }
  .subtitle {
    font-weight: lighter;
  }
  .introduction {
    margin-top: 2rem;
    max-width: 50vw;
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      transition: 0.25s ease-out;
    }
    .nav-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(20px);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.12);
      border-radius: 0.25rem;
      li {
        position: relative;
        display: inline-block;
        align-self: flex-start;
        text-transform: uppercase;
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
        i {
          padding-right: 0.5rem;
          font-size: 1.35rem;
        }
      }
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin: 0.5rem 0 3rem 0;
      li {
        margin: 0 0.8rem;
        transition: 0.5s cubic-bezier(0, 1, 0.5, 1);
        i {
          font-size: 2rem;
          transition: 0.25s cubic-bezier(0, 1, 0.5, 1);
        }
        &:hover {
          transform: translateY(-0.25rem) scale(1.2);
          i {
            color: #cd5da0;
            text-shadow: 0 0 0.5rem rgba($color: #cd5da0, $alpha: 0.5);
          }
        }
      }
    }
  }
}

@include screen-mobile {
  #content {
    .nav {
      .nav-menu {
        display: flex;
        align-items: stretch;
        box-shadow: none;
        li {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: 12rem;
          padding-top: 2rem;
          border: 1px dashed #cd5da0;
          transition: 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
          i {
            padding: 0;
          }
          .nav-name {
            writing-mode: vertical-lr;
          }
          &.active {
            color: white;
            background-color: #cd5da0;
          }
          &:hover {
            color: #cd5da0;
            border: 1px solid #cd5da0;

            // transform: rotateY(45deg);
          }
          // &::before {
          //   content: '';
          //   position: absolute;
          //   height: 100%;
          //   width: 100%;
          //   background-color: #cd5da0;
          //   transform: rotateY(90deg) translate(-5%， -5%);
          // }
        }
      }
      .introduction {
        font-size: 1.25rem;
        border: 1px dashed #cd5da0;
        padding: 0.5rem;
      }
    }
  }
}
</style>
