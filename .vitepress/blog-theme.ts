import { getThemeConfig } from '@sugarat/theme/node'
import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://raynard.lol'

// RSS feed configuration
const RSS: Theme.RSSOptions = {
  title: "raynardの小窩",
  baseUrl,
  description: "raynard's blog",
  id: baseUrl,
  link: baseUrl,
  language: 'zh-TW',
  favicon: `${baseUrl}/favicon/favicon.ico`,
  copyright: `Copyright (c) ${new Date().getFullYear()}, RAYNARD`,
  url: `${baseUrl}/feed.rss`,
  limit: 20,
  feed: `${baseUrl}/feed.rss`,
}

export const blogTheme = getThemeConfig({
  tabs: false,
  mermaid: false,
  timeline: false,
  themeColor: 'el-blue',
  RSS: [RSS],
  author: 'RAYNARD',

  // --- Announcement Popover ---
  popover: {
    title: 'good to see u',
    body: [
      {
        type: 'text',
        content: '我開悟了，我已經超脫競爭的零和遊戲。但我仍保持謙卑，既然你來了 就與我共飲一杯茶吧。'
      },
      {
        type: 'button',
        content: '關於我',
        link: '/aboutme'
      },
    ],
    duration: -1,
    twinkle: true
  },

  // --- Search ---
  search: {
    showDate: true,
    pageResultCount: 4
  },

  // --- Author ---
  authorList: [
    {
      nickname: 'RAYNARD',
      url: 'https://raynard.lol/aboutme.html',
      des: 'its not hard. its just new.'
    }
  ],

  // --- Footer ---
  footer: {
    copyright: `RAYNARD 2018 - ${new Date().getFullYear()}`,
    message: 'CC BY-NC-SA 4.0'
  },

  recommend: false,
  hotArticle: false,

  // --- Comment (disabled by default, uncomment to enable Giscus) ---
  // comment: {
  //   repo: 'beluga11716/note',
  //   repoId: 'YOUR_REPO_ID',
  //   category: 'Announcements',
  //   categoryId: 'YOUR_CATEGORY_ID',
  //   inputPosition: 'top'
  // },
})
