export default {
  // 标题
  title: '',
  // 描述
  details: '',
  // token base64lize
  token: 'Z2hwX2UzbXo0eDFzMW1JeTlYYjJBYzZoc3lvMVA5eFpLaTN0ZnoxbA==',
  // Github 用户名
  username: 'tsukiseele',
  // username: 'chanshiyucx',
  // Github 文章仓库名
  repository: 'blog',
  // Github 评论仓库名
  commentRepository: 'comment',
  // 音乐接口
  musicAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',
  // 一言接口（可选，填写后会显示在subtitle)
  hitokitoAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',

  // 导航
  nav: {
    title: 'さとうしお',
    subtitle: "Let's search for tomorrow",
    introduction: '很高兴见到你！这里是Happy Suger Life（ハッピーシュガーライフ）的个人网站主题。<br/>目前正在摸鱼开发中，砂糖ちゃん！我的砂糖ちゃん！！！',
    decorateText: 'SWEET',
    drawer: false,
    drawerBannerBackground: 'https://cdn.jsdelivr.net/gh/tsukiseele/ImageHosting/upload/826f66f94e3ebf1f62cff7c9109bb118.jpeg',
    nav: [
      { name: 'Home', icon: 'mdi-home', to: '/' },
      { name: 'Projects', icon: 'mdi-lightbulb-on-outline', to: '/projects' },
      { name: 'Blog', icon: 'mdi-clipboard-text-outline', to: '/post' },
      { name: 'About', icon: 'mdi-information', to: '/about' },
    ],
    links: [
      { icon: 'mdi-github', to: 'https://github.com/tsukiseele' },
      { icon: 'mdi-twitter', to: 'https://twitter.com/tsukiseele' },
      { icon: 'mdi-gmail', to: 'mailto:tsukiseele@gmail.com' },
    ],
  },
}
