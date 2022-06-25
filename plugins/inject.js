import Statics from '@/assets/resource/statics.js'
import config from '@/config'
// import ColorThief from "";

export default ({ app }, inject) => {
  // 静态资源位置
  inject('config', config)
  inject('static', 'https://cdn.jsdelivr.net/gh/tsukiseele/awsl.re/static') 
}
