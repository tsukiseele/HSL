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
  // repository: 'blog',
  repository: 'archives',
  // Github 评论仓库名
  commentRepository: 'comment',
  // 音乐接口
  musicAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',
  // 一言接口（可选，填写后会显示在subtitle)
  hitokitoAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',

  // 导航
  nav: {
    title: 'さとうしお',
    // title: '乙女のキャンディ缶',
    // title: 'TsukiSeele\'s Blog',
    // subtitle: 'しおちゃんがいる場所が、私のハッピーシュガーライフ',
    subtitle: 'TsukiSeele\'s Blog',
    introduction: '知りたいよ、愛がどういう物か知りたい。だって分からないんだもん。愛してるってささやかれても、肌を合わせても、な～んにも感じないの',
    // introduction: 'でもさとちゃんが来てくれた。さとちゃんに出会って、一緒に暮らせて、幸せで',
    // introduction: 'It shines so brightly, it’s sweeter than all the cakes in the world, it smooths the mind, this feeling is all I know, how can I possibly describe it in words?',
    // introduction: '很高兴见到你！这里TsukiSeele的个人网站主题HSL（ハッピーシュガーライフ）。<br/>目前正在摸鱼开发中，砂糖ちゃん！我的砂糖ちゃん！！！',
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
