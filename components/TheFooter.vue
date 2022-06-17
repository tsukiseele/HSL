<template lang="pug">
#footer
  .footer-wrap
    .footer-info
      div
        img.assess-count(src="https://count.getloli.com/get/@nlo.li?theme=rule34" alt="counter")
      p © {{ new Date().getFullYear() }} by 
        a.info--developer(href="https://github.com/tsukiseele" target="_blank") TsukiSeele 
        | All Rights Reserved.
      p Powered by 
        a.info--nuxtjs(href="https://nuxtjs.org/" target="_blank") Nuxt.js
        |.
        span.info--spacer |
        |Theme 
        a.info--color-secondary(href="https://github.com/tsukiseele/Haruka" target="_blank") HSL
        |.
</template>

<script>
export default {
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.assess-count {
  height: 5rem;
}
#footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100px;
  padding: 4rem 0 2rem 0;
  font-family: InfoDisplay;
  background-color: #2a2b3d;
  color: white;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    // right: 0px;
    // left: 0px;
    width: 200%;
    height: 1.8rem;
    background-color: #f4d8e4;
    background-image: radial-gradient(circle, #2a2b3d, #2a2b3d calc(2rem - 1px), transparent 2rem);
    background-size: calc(4rem) calc(4rem);
    background-position: top center;
    background-repeat: repeat-x;
    animation: identifier 6s linear infinite;
  }
  @keyframes identifier {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(4rem);
    }
  }
  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0px;
  //   width: 200%;
  //   height: 1.8rem;
  //   background-image: radial-gradient(circle, #f4d8e4, #f4d8e4 calc(2rem - 1px), transparent 2rem);
  //   background-size: calc(4rem) calc(4rem);
  //   background-position: bottom center;
  //   background-repeat: repeat-x;
  //   animation: identifier 3s linear infinite;
  // }
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info--developer {
  color: rgba(139, 207, 222, 1);
}

.info--nuxtjs {
  color: #00c58e;
}

.info--color-secondary {
  color: #f0a2d2;
}

.info--spacer {
  margin: 0 0.5rem;
}
</style>
