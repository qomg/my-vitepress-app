import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'HarmonyOS',
        items: [
          { text: 'ArkTS基础语法', link: '/ArkTS基础语法' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/my-vitepress-app/',
  lang: 'zh-CN',
  head: [
    [
      'link', 
      { rel: 'icon', href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
    // [
    //   'script',
    //   { id: 'register-sw' },
    //   `;(() => {
    //     if ('serviceWorker' in navigator) {
    //       navigator.serviceWorker.register('/sw.js')
    //     }
    //   })()`
    // ],
    // [
    //   'script',
    //   { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }
    // ],
    // [
    //   'script',
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'TAG_ID');`
    // ]
  ],
  srcExclude: ['**/README.md', '**/TODO.md'],
  assetsDir: 'static',
  // ignoreDeadLinks: true,
  ignoreDeadLinks: [
    // 忽略精确网址 "/playground"
    '/playground',
    // 忽略所有 localhost 链接
    /^https?:\/\/localhost/,
    // 忽略所有包含 "/repl/" 的链接
    /\/repl\//,
    // 自定义函数，忽略所有包含 "ignore "的链接
    (url) => {
      return url.toLowerCase().includes('ignore')
    }
  ],
  async buildEnd(siteConfig) {
    // ...
  },
  async postRender(context) {
    // ...
  },
  async transformHead(context) {
    // ...
  },
  // async transformPageData(pageData, { siteConfig }) {
  //   pageData.contributors = await getPageContributors(pageData.relativePath)
  // }
  // // 或返回要合并的数据
  // async transformPageData(pageData, { siteConfig }) {
  //   return {
  //     contributors: await getPageContributors(pageData.relativePath)
  //   }
  // },
  // transformPageData(pageData) {
  //   const canonicalUrl = `https://example.com/${pageData.relativePath}`
  //     .replace(/index\.md$/, '')
  //     .replace(/\.md$/, '.html')

  //   pageData.frontmatter.head ??= []
  //   pageData.frontmatter.head.push([
  //     'link',
  //     { rel: 'canonical', href: canonicalUrl }
  //   ])
  // },
  // async transformHtml(code, id, context) {
  //   // ...
  // },
})
