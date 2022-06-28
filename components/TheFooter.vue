<template lang="pug">
#footer
  .footer-wrap
    .footer-info
      div
        img.assess-count(src="https://count.getloli.com/get/@nlo.li?theme=rule34" alt="counter")
      p © {{ new Date().getFullYear() }} by 
        a.info--theme(href="/") さとうしお 
        | All Rights Reserved.
      p Designed by 
        a.info--developer(href="https://github.com/tsukiseele" target="_blank") TsukiSeele
        |.
        span.info--spacer |
        | Powered by 
        a.info--nuxtjs(href="https://nuxtjs.org/" target="_blank") Nuxt.js
        |.
        span.info--spacer |
        |Theme 
        a.info--color-secondary(href="https://github.com/tsukiseele/HSL" target="_blank") HSL
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
  font-family: InfoDisplay;
  color: white;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0rem;
    width: 200%;
    height: 1.8rem;
    background-image: radial-gradient(circle, #2a2b3d, #2a2b3d calc(2rem - 1px), transparent 2rem);
    background-size: calc(3rem) calc(4rem);
    background-position: top center;
    background-repeat: repeat-x;
    animation: identifier 6s linear infinite;
  }
  @keyframes identifier {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(3rem);
    }
  }
}
.footer-wrap {
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: #2a2b3d;
  z-index: 1;
}
.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a:hover {
    text-decoration:  underline;
  }
}


.info--theme {
  color: #C7B3D6;
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
