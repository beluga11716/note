import { defineConfig } from 'vitepress'
import { blogTheme } from './blog-theme'

export default defineConfig({
  extends: blogTheme,
  metaChunk: true,
  srcExclude: ['CHANGELOG.md'],
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://raynard.lol',
  },
  lang: 'zh_TW',
  title: 'raynardの小窩',
  description: "raynard's blog, a static blog built with VitePress & @sugarat/theme.",
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon/favicon.ico', type: 'image/png' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon/favicon.ico',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', { name: 'author', content: 'RAYNARD' }],
    ['link', { rel: 'mask-icon', href: '/favicon/favicon.ico', color: '#ffffff' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon/favicon.ico', sizes: '180x180' }
    ],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return ['center'].includes(tag.toLocaleLowerCase())
        }
      }
    }
  },
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目錄'
    },
    lastUpdatedText: '上次更新於',
    logo: '/logo.png',
    nav: [
      { text: '首頁', link: '/' },
      { text: '文章', link: '/hello-world' },
      { text: '關於', link: '/aboutme' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/beluga11716' },
      { icon: 'x', link: 'https://x.com/raynard11716' }
    ]
  }
})
