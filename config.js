export default {
  // 标题
  title: 'さとうしお - 砂糖的糖果罐',
  // 描述
  details: '',
  // 音乐接口
  musicAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',
  // 一言接口（可选，填写后会显示在subtitle)
  hitokitoAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',
  // 博客配置
  blog: {
    // base64编码的Github token
    token: 'Z2hwX2UzbXo0eDFzMW1JeTlYYjJBYzZoc3lvMVA5eFpLaTN0ZnoxbA==',
    // Github 用户名
    username: 'tsukiseele',
    // username: 'chanshiyucx',
    // Github 存储文章的仓库名
    repository: 'archives',
    // repository: 'blog',
  },
  // 评论配置
  vssue: {
    owner: 'tsukiseele',
    repo: 'comment',
    clientId: '438b1621c4f3d263f557',
    clientSecret: 'cd03774c329435a40f7363d2d9817593bf576e79',
  },
  // 导航
  nav: {
    title: 'さとうしお',
    // title: '乙女のキャンディ缶',
    // title: 'TsukiSeele\'s Blog',
    // subtitle: 'しおちゃんがいる場所が、私のハッピーシュガーライフ',
    subtitle: "TsukiSeele's Blog",
    owner: 'TsukiSeele',
    introduction: '知りたいよ、愛がどういう物か知りたい。だって分からないんだもん。愛してるってささやかれても、肌を合わせても、な～んにも感じないの',
    // introduction: 'でもさとちゃんが来てくれた。さとちゃんに出会って、一緒に暮らせて、幸せで',
    // introduction: 'It shines so brightly, it’s sweeter than all the cakes in the world, it smooths the mind, this feeling is all I know, how can I possibly describe it in words?',
    // introduction: '很高兴见到你！这里TsukiSeele的个人网站主题HSL（ハッピーシュガーライフ）。<br/>目前正在摸鱼开发中，砂糖ちゃん！我的砂糖ちゃん！！！',
    decorateText: 'SWEET',
    drawer: false,
    drawerBannerBackground: 'https://cdn.jsdelivr.net/gh/tsukiseele/ImageHosting/upload/826f66f94e3ebf1f62cff7c9109bb118.jpeg',
    nav: [
      { name: 'Home', icon: 'home', to: '/' },
      { name: 'Project', icon: 'project', to: '/projects' },
      { name: 'Blog', icon: 'blog', to: '/post' },
      { name: 'Experience', icon: 'experience', to: '/experience' },
      { name: 'About', icon: 'about', to: '/about' },
    ],
    links: [
      { icon: 'github', to: 'https://github.com/tsukiseele' },
      { icon: 'twitter', to: 'https://twitter.com/tsukiseele' },
      { icon: 'mail', to: 'mailto:tsukiseele@gmail.com' },
    ],
  },
  // 页面元数据
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no',
    },
    {
      hid: 'description',
      name: 'description',
      content: '这里 TsukiSeele 的个人网站主题 HSL ，请多关照',
    },
  ],
}