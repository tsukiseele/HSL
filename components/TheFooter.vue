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
  data: () => ({})
};
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
  padding: 0.5rem 0;
  font-family: InfoDisplay;
  background-color: #2a2b3d;
  color: white;
  &::before {
    
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      left: 0px;
      width: 100%;
      height: 2rem;
      background: radial-gradient(circle, pink, pink 2rem, transparent 6px);
      background-size: 10px 10px;
  }
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
