<template lang="pug">
#content
  .title(data-aos="fade-down" data-aos-delay="300") {{ navigation.title }}
  .subtitle(data-aos="fade-down" data-aos-delay="300") {{ navigation.subtitle }}
  
  div.introduction(data-aos="fade-right" data-aos-delay="600")
    .blockquote
      s-icon(name='mdi-format-quote-open').quote-left
      .quote-content(v-html="navigation.introduction")
      s-icon(name='mdi-format-quote-close').quote-right
  nav.nav(data-aos="fade-up" data-aos-delay="900")
    ul.nav-menu
      li.nav-item(v-for='item in navigation.nav', :key='item.name', :class='{ active: item.to == $route.path }' @click="$router.push(item.to)")
        SIcon(:name='item.icon')
        .nav-name {{ item.name }}
    
  
  ul.nav-links
    li(v-for='item in navigation.links', :key='item.name')
      a.normal(:href='item.to', target='_blank')
        s-icon(:name='item.icon')
  .decorate
    //- .decorate-item(v-for='char in navigation.title' :data-content="char") {{ char }}
    .decorate-item(data-content="S") S
    .decorate-item(data-content="W") W
    .decorate-item(data-content="E") E
    .decorate-item(data-content="E") E
    .decorate-item(data-content="T") T
  .decorate-side
    .decorate-item
    .decorate-item
  .decorate-ferris-wheel
    .decorate-item
    .decorate-item
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapState(['navigation']),
    ...mapGetters(['isMobile']),
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 2.4rem;
  color: #cd5da0;
  margin-top: 2rem;
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
  height: 90%;
  animation: fade 0.6s 1s ease;
  animation-fill-mode: forwards;
  transform: translateY(-100%) translateZ(0);
  z-index: -1;
  @keyframes fade {
    0% {
      transform: translateY(-100%) translateZ(0);
    }
    20% {
      transform: translateY(-2%) translateZ(0);
    }
    40% {
      transform: translateY(2%) translateZ(0);
    }
    60% {
      transform: translateY(0) translateZ(0);
    }
    80% {
      transform: translateY(1%) translateZ(0);
    }
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
    &:nth-of-type(1n) {
      animation: identifier 4s 0.5s ease-in-out infinite;
      height: 24%;
      &::after {
        color: rgb(255, 182, 185);
        transform: rotate(-30deg);
      }
      left: 15%;
    }
    &:nth-of-type(2n) {
      animation: identifier 3s 1s ease-in-out infinite;
      height: 30%;
      &::after {
        color: #b7d7b6;
        transform: rotate(0);
      }
      left: 30%;
    }
    &:nth-of-type(3n) {
      animation: identifier 4s -0.5s ease-in-out infinite;
      height: 20%;
      &::after {
        color: #c7b3d6;
        transform: rotate(15deg);
      }
      left: 50%;
    }
    &:nth-of-type(4n) {
      animation: identifier 3s 0.5s ease-in-out infinite;
      height: 26%;
      &::after {
        color: rgb(187, 222, 214);
        transform: rotate(-15deg);
      }
      left: 65%;
    }
    &:nth-of-type(5n) {
      animation: identifier 5s 0.5s ease-in-out infinite;
      height: 32%;
      &::after {
        color: rgb(138, 198, 209);
        transform: rotate(30deg);
      }
      left: 80%;
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

  @include screen-tablet {
    height: 50%;
  }
  @include screen-mobile {
    height: 70%;
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
.decorate-side {
  position: absolute;
  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    width: 0%;
    height: 100%;
    // background-color: #c7b3d6;

    background-image: radial-gradient(#c7b3d6, #c7b3d6 0.5rem, transparent calc(0.5rem + 1px));
    background-size: 1rem 1rem;
    background-repeat: repeat;
    z-index: -2;
    animation: anim 2s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
  &::before {
    left: 0;
    background-position: calc(100% - 0.5rem) 100%;
  }
  &::after {
    right: 0;
    background-position: -0.5rem 100%;
  }
  @keyframes anim {
    100% {
      width: 10%;
      border-right: 2px solid #c7b3d6;
      border-left: 2px solid #c7b3d6;
    }
  }
  // .decorate-item {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-image: radial-gradient(#f7e4c6, #f7e4c6 0.25rem, transparent 0.25rem);
  //   background-size: 1rem 1rem;
  //   background-repeat: repeat;
  // }
}
.decorate-ferris-wheel {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  @include screen-tablet {
    display: none;
  }
  @include screen-mobile {
    display: none;
  }

  .decorate-item {
    position: absolute;
    left: -50vh;
    top: -50vh;
    width: 120vh;
    height: 120vh;
    animation: rotate 200s linear infinite;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 50%;
      height: 50%;
      transform: translateX(-50%) translateY(-50%);
      border: 1rem dashed #f7e4c6;
      border-radius: 50%;
    }
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 30%;
      height: 30%;
      transform: translateX(-50%) translateY(-50%);
      border: 1rem dotted #f2c047;
      border-style: double;
      border-radius: 50%;
    }
  }
  @keyframes rotate {
    0%,
    100% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1turn);
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
  &::before,
  &::after {
    $color: #463750;
    content: '';
    position: fixed;
    left: 0;
    width: 100%;
    height: 2rem;
    background-image: radial-gradient(circle, $color, $color calc(2rem - 1px), transparent 2rem);
    background-size: 3.5rem 4rem;
    background-repeat: repeat-x;
  }
  &::before {
    top: 0;
    background-position: center bottom;
  }

  &::after {
    bottom: 0;
    background-position: center top;
  }

  .title {
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 2.4rem;
    text-shadow: 2px 2px white;
  }
  .subtitle {
    font-weight: lighter;
  }
  .introduction {
    margin-top: 1rem;
    max-width: 50vw;

    // margin: 0 2rem;
    .blockquote {
      display: flex;
      padding: 1rem;
      color: var(--color-text);
      i {
        font-size: 1.5rem;
      }
      .quote-left {
        align-self: flex-start;
      }
      .quote-right {
        align-self: flex-end;
      }
      .quote-content {
        flex: 1;
        padding: 1rem;
        align-self: center;
        font-size: 1rem;
      }
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      transition: 0.25s ease-out;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      backdrop-filter: blur(20px);
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.12);
      border-radius: 0.5rem;
      overflow: hidden;
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
      }
      .nav-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: stretch;
        padding: 0 1.5rem;
        cursor: pointer;
        user-select: none;
        transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
        i {
          padding-right: 0.5rem;
          font-size: 1.35rem;
        }
        .nav-name {
          text-transform: uppercase;
        }
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(0);
          opacity: 0;
          background-color: #cd5da0;
          transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
          z-index: -1;
        }
        &:hover,
        &.active {
          color: white;
          &::before {
            border-radius: 0;
            opacity: 1;
            transform: scale(1);
          }
        }
        // &:hover::before {
        //   background-color: #c7b3d6;
        // }
        &:hover::before , &.active::before {
          background-color: #cd5da0;
        }
      }
    }
  }
  .nav-links {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0.5rem 0 1rem 0;
    li {
      // background-color: #faf7d9;
      background-color: #463750;
      border: 1px solid #283c5f;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      margin: 0 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: scale(0);
      i {
        color: white;
        font-size: 2rem;
        transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:hover {
        // transform: translateY(-0.25rem) scale(1.2);
        background-color: #cd5da0;
        i {
          text-shadow: 0 0 0.5rem rgba($color: #cd5da0, $alpha: 0.5);
        }
      }

      &:nth-of-type(1) {
        animation: show 0.5s ease 1s forwards;
      }
      &:nth-of-type(2) {
        animation: show 0.5s ease 1.1s forwards;
      }
      &:nth-of-type(3) {
        animation: show 0.5s ease 1.2s forwards;
      }
      @keyframes show {
        50% {
          transform: scale(1.08);
        }
        60% {
          transform: scale(1);
        }
        70% {
          transform: scale(1.04);
        }
        80% {
          transform: scale(1);
        }
        80% {
          transform: scale(1.02);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
}

@include screen-mobile {
  #content {
    .nav {
      .nav-menu {
        flex-direction: row;
        align-items: stretch;
        box-shadow: none;
        border-radius: 0;
        &:hover {
          box-shadow: none;
        }
        .nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: 12rem;
          padding: 1.5rem 0.5rem 0 0.5rem;
          margin: 0 0.5rem;
          border-top: 1px dashed #cd5da0;
          border-bottom: 1px dashed #cd5da0;
          border-left: 1px solid #cd5da0;
          border-right: 1px solid #cd5da0;
          transition: 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
          &::before {
            display: none;
          }
          i {
            font-size: 1.5rem;
            padding: 0;
          }
          .nav-name {
            font-size: 1.2rem;
            writing-mode: vertical-lr;
          }
          &.active {
            color: white;
            background-color: #cd5da0;
          }
          &:hover {
            color: #cd5da0;
            border-color: #cd5da0;
          }
        }
      }
    }
    .introduction {
      max-width: 75%;
      font-size: 1.2rem;
      padding: 0.5rem;
    }
  }
}
</style>
