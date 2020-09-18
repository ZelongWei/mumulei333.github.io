module.exports = {
  type: 'blog',
  logo: '/favicon.ico',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'MUMU',
  authorAvatar: '/mumu_head.jpg',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2017',
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: '标签'      // 默认文案 “标签”
    }
  },
  friendLink: [
    {
      title: 'linkji',
      desc: '❀欲买桂花同载酒，终不似，少年游。',
      email: 'main@jdkhome.com',
      link: 'https://www.jdkhome.com/'
    },
    {
      title: 'Ben',
      desc: 'Coding · Thinking',
      link: 'https://www.ahxiao.com/'
    },
  ],

  // 搜索
  algolia: {
    apiKey: '97357e58cac743c6de62036cb152f18b',
    indexName: 'vuepress-theme-reco'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },

  // valine 评论以及浏览量
  valineConfig: {
    appId: process.env.VALINE_ID,
    appKey: process.env.VALINE_KEY,
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, //
    recordIP: true,
    showComment: false
  },
  // vssueConfig: {
  //   admins: ['recoluan'],
  //   platform: 'github',
  //   owner: 'vuepress-reco',
  //   repo: 'vuepress-reco.github.io',
  //   clientId: '4d81cea3b3d8aac8e88e',
  //   clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'mumulei333/mumulei333.github.io',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'gh-pages-source',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  mode: 'dark',
  // 默认 true，false 不显示模式调节按钮，true 则显示
  modePicker: true,
  codeTheme: 'okaidia'
}