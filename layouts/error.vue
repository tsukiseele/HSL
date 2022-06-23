<template lang="pug">
.__nuxt-error-page
    .e404(v-if="statusCode == 404") 
      span.error-code {{ statusCode }} 
      span.error-text ー 页面找不到
    .e5xx(v-else-if="statusCode.toString().startsWith(5)") 
      span.error-code {{ statusCode }} 
      span.error-text ー 服务器内部错误，请联系网站管理员
    NuxtLink.back(to="/") 返回主页
//-   <div class="error">
//-     <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
//-       <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
//-     </svg>

//-     <div class="title">{{ message }}</div>
//-     <p v-if="statusCode === 404" class="description">
//-       <a v-if="typeof $route === 'undefined'" class="error-link" href="/">返回主页</a>
//-       <NuxtLink v-else class="error-link" to="/">返回主页</NuxtLink>
//-     </p>
//-     <p class="description" v-else>error</p>

//-     <div class="logo">
//-       <a href="https://nuxtjs.org" target="_blank" rel="noopener">NUXT.JS</a>
//-     </div>
//-   </div>
//- </div>
</template>

<script>
export default {
  layout: 'blank',
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    },
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.__nuxt-error-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #47494e;
  background: #f7f8fb;
}

.error-code {
  color: var(--color-primary);
  font-family: var(--font-coquettec);
  font-size: 6rem;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.12);
}
.error-text {
  font-family: var(--font-sans-serif);
  font-size: 2rem;
}
.e404,
.e5xx {
  font-style: italic;
}

.back {
  color: var(--color-primary);
  border-bottom: 2px solid transparent;
  font-size: 1.5rem;
  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }
}
</style>
