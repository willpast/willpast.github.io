// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
import dayjs from "dayjs";

// docs/.vuepress/config/baiduCode.ts
var baiduCode_default = "503f098e7e5b3a5b5d8c5fc2938af002";

// docs/.vuepress/config/htmlModules.ts
var htmlModule = {
  homeSidebarB: `<div style="padding: 0.95rem">
    <p style="
      color: var(--textColor);
      opacity: 0.9;
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 8px 0;
    ">\u516C\u4F17\u53F7</p>
    <img src="https://open.weixin.qq.com/qr/code?username=gh_28fdf20db5d6"  style="width:100%;" />
    \u5173\u6CE8\u516C\u4F17\u53F7
    </p>
    </div>`
};
var htmlModules_default = htmlModule;

// docs/.vuepress/config.ts
import MarkdownItKatex from "markdown-it-katex";

// docs/.vuepress/webSiteInfo/readFile.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import chalk from "chalk";
var log = console.log;
var docsRoot = path.join("/Users/work/git/willpast/lion/willpast.github.io/docs/.vuepress/webSiteInfo", "..", "..", "..", "docs");
function readFileList(excludeFiles = [""], dir = docsRoot, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (!(excludeFiles instanceof Array)) {
      log(chalk.yellow(`error: \u4F20\u5165\u7684\u53C2\u6570\u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4\u3002`));
    }
    excludeFiles.forEach((excludeFile) => {
      if (stat.isDirectory() && item !== ".vuepress" && item !== "@pages" && item !== excludeFile) {
        readFileList(excludeFiles, path.join(dir, item), filesList);
      } else {
        if (path.basename(dir) !== "docs") {
          const fileNameArr = path.basename(filePath).split(".");
          let name = null, type = null;
          if (fileNameArr.length === 2) {
            name = fileNameArr[0];
            type = fileNameArr[1];
          } else if (fileNameArr.length === 3) {
            name = fileNameArr[1];
            type = fileNameArr[2];
          } else {
            log(chalk.yellow(`warning: \u8BE5\u6587\u4EF6 "${filePath}" \u6CA1\u6709\u6309\u7167\u7EA6\u5B9A\u547D\u540D\uFF0C\u5C06\u5FFD\u7565\u751F\u6210\u76F8\u5E94\u6570\u636E\u3002`));
            return;
          }
          if (type === "md") {
            filesList.push({
              name,
              filePath
            });
          }
        }
      }
    });
  });
  return filesList;
}
function readEachFileWords(excludeFiles = [""], cn, en) {
  const filesListWords = [];
  const filesList = readFileList(excludeFiles);
  filesList.forEach((item) => {
    const content = getContent(item.filePath);
    let len = counter(content);
    let readingTime = readTime(len, cn, en);
    let wordsCount = 0;
    wordsCount = len[0] + len[1];
    if (wordsCount >= 1e3) {
      wordsCount = Math.round(wordsCount / 100) / 10 + "k";
    }
    const fileMatterObj = matter(content, {});
    const matterData = fileMatterObj.data;
    filesListWords.push({ ...item, wordsCount, readingTime, ...matterData });
  });
  return filesListWords;
}
function readTime(len, cn = 300, en = 160) {
  let readingTime = len[0] / cn + len[1] / en;
  if (readingTime > 60 && readingTime < 60 * 24) {
    let hour = Math.trunc(readingTime / 60);
    let minute = Math.trunc(readingTime - hour * 60);
    if (minute === 0) {
      return hour + "h";
    }
    return hour + "h" + minute + "m";
  } else if (readingTime > 60 * 24) {
    let day = Math.trunc(readingTime / (60 * 24));
    let hour = Math.trunc((readingTime - day * 24 * 60) / 60);
    if (hour === 0) {
      return day + "d";
    }
    return day + "d" + hour + "h";
  }
  return readingTime < 1 ? "1" : Math.trunc(readingTime * 10) / 10 + "m";
}
function getContent(filePath) {
  return fs.readFileSync(filePath, "utf8");
}
function counter(content) {
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (content.replace(/[\u4E00-\u9FA5]/g, "").match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
  return [cn, en];
}

// docs/.vuepress/config.ts
var DOMAIN_NAME = "willpast.github.io";
var WEB_SITE = `https://${DOMAIN_NAME}`;
var config_default = defineConfig4CustomTheme({
  theme: "vdoing",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Cyan's blog",
      description: "\u4E2A\u4EBA\u535A\u5BA2"
    }
  },
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5BFC\u8BFB", link: "/overview/" },
      {
        text: "Java",
        link: "/java/",
        items: [
          {
            text: "Java\u57FA\u7840 - \u57FA\u7840\u77E5\u8BC6",
            items: [
              { text: "\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/overview/#\u9762\u5411\u5BF9\u8C61\u4E0Ejava\u57FA\u7840" },
              { text: "\u9762\u5411\u5BF9\u8C61", link: "/pages/java-basic-oop/" },
              { text: "\u77E5\u8BC6\u70B9", link: "/pages/java-basic-lan-basic/" }
            ]
          },
          {
            text: "Java\u8FDB\u9636 - \u96C6\u5408\u6846\u67B6",
            items: [
              { text: "\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/overview/#java\u8FDB\u9636-\u96C6\u5408\u6846\u67B6" },
              { text: "Collection - \u7C7B\u5173\u7CFB\u56FE", link: "/pages/java-collection-overview/" }
            ]
          },
          {
            text: "Java\u8FDB\u9636 - \u5E76\u53D1\u6846\u67B6",
            items: [
              { text: "\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/pages/java-thread-x-overview/" },
              { text: "Java \u5E76\u53D1 - \u7406\u8BBA\u57FA\u7840", link: "/pages/java-thread-x-theorty/" },
              { text: "Java \u5E76\u53D1 - \u7EBF\u7A0B\u57FA\u7840", link: "/pages/java-thread-x-thread-basic/" },
              { text: "JUC - \u7C7B\u6C47\u603B", link: "/pages/java-thread-x-juc-overview/" }
            ]
          },
          {
            text: "Java\u8FDB\u9636 - IO\u6846\u67B6",
            items: [
              { text: "\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/pages/java-io-overview/" },
              { text: "IO \u57FA\u7840", link: "/pages/java-io-basic-usage/" },
              { text: "BIO \u57FA\u7840", link: "/pages/java-io-bio/" },
              { text: "NIO \u57FA\u7840", link: "/pages/java-io-nio/" },
              { text: "AIO \u57FA\u7840", link: "/pages/java-io-aio/" }
            ]
          },
          {
            text: "Java\u8FDB\u9636 - JVM\u76F8\u5173",
            items: [
              { text: "\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/pages/java-jvm-overview/" },
              { text: "Java \u7C7B\u5B57\u8282\u7801", link: "/pages/java-jvm-class/" },
              { text: "JVM \u5185\u5B58\u6A21\u578B", link: "/pages/java-jvm-jmm/" },
              { text: "JVM \u5783\u573E\u56DE\u6536", link: "/pages/java-jvm-gc/" },
              { text: "Java \u8C03\u8BD5\u6392\u9519", link: "/pages/java-jvm-param/" }
            ]
          },
          {
            text: "Java\u8FDB\u9636 - \u65B0\u7248\u672C\u7279\u6027",
            items: [
              { text: "java 8 \u65B0\u7279\u6027\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/pages/java8-overview/" },
              { text: "Java 8+ \u7279\u6027\u77E5\u8BC6\u4F53\u7CFB\u5BFC\u8BFB", link: "/pages/java8+-overview/" },
              { text: "Java 8 \u5347Java 11 \u91CD\u8981\u7279\u6027\u5FC5\u8BFB", link: "/pages/java9-11/" },
              { text: "Java 11 \u5347Java 17 \u91CD\u8981\u7279\u6027\u5FC5\u8BFB", link: "/pages/java12-17/" }
            ]
          }
        ]
      },
      {
        text: "\u7B97\u6CD5",
        link: "/algorithm/",
        items: [
          {
            text: "\u57FA\u7840\u7B97\u6CD5",
            items: [
              { text: "\u6570\u636E\u7ED3\u6784\u57FA\u7840\u5BFC\u8BFB", link: "/pages/alg-basic-overview/" },
              { text: "\u6570\u636E\u7ED3\u6784\u8FDB\u9636\u5BFC\u8BFB", link: "/pages/ef847c/" },
              { text: "\u5E38\u89C1\u6392\u5E8F\u7B97\u6CD5\u5BFC\u8BFB", link: "/pages/alg-sort-overview/" },
              { text: "\u7B97\u6CD5\u601D\u60F3\u5BFC\u8BFB", link: "/pages/alg-core-overview/" }
            ]
          },
          {
            text: "\u9886\u57DF\u7B97\u6CD5",
            items: [
              { text: "\u9886\u57DF\u7B97\u6CD5\u5BFC\u8BFB", link: "/pages/alg-domain-overview/" },
              { text: "\u5B89\u5168\u7B97\u6CD5", link: "/pages/alg-domain-security-degist/" },
              { text: "\u5B57\u7B26\u4E32\u5339\u914D\u7B97\u6CD5", link: "/pages/alg-domain-char-match-overview/" },
              { text: "\u5927\u6570\u636E\u5904\u7406\u7B97\u6CD5", link: "/pages/alg-domain-bigdata-overview/" },
              { text: "\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7B97\u6CD5", link: "/pages/alg-domain-distribute-overview/" },
              { text: "\u5176\u5B83\u7B97\u6CD5\u76F8\u5173", link: "/pages/alg-other-mind/" }
            ]
          }
        ]
      },
      {
        text: "\u6280\u672F",
        link: "/technology/",
        items: [
          {
            text: "\u57FA\u7840\u6280\u80FD",
            items: [
              { text: "\u3010\u6570\u636E\u7ED3\u6784\u3011", link: "/base/struct/" },
              { text: "\u3010\u5E38\u7528\u5DE5\u5177\u3011", link: "/base/tool/" }
            ]
          },
          {
            text: "\u6570\u636E\u5F00\u53D1",
            items: [
              { text: "\u6570\u636E\u91C7\u96C6", link: "/data/collect/" },
              { text: "\u6570\u636E\u4F20\u8F93", link: "/data/transmit/" },
              { text: "\u6570\u636E\u5B58\u50A8", link: "/data/storage/" },
              { text: "\u6570\u636E\u5904\u7406", link: "/data/process/" },
              { text: "\u6570\u636E\u6CBB\u7406", link: "/data/govern/" }
            ]
          }
        ]
      },
      {
        text: "\u9879\u76EE",
        link: "/project/",
        items: [
          { text: "\u4ED6\u5C71\u4E4B\u7389-\u7814\u5B66", link: "/pages/f2a556/" },
          { text: "\u53EF\u4EE5\u653B\u77F3-\u5B9E\u6218", link: "/pages/f2a556/" }
        ]
      },
      {
        text: "\u66F4\u591A",
        link: "/more/",
        items: [
          { text: "\u5B66\u4E60", link: "/pages/f2a556/" },
          { text: "\u9762\u8BD5", link: "/pages/576b1f/" },
          { text: "\u5FC3\u60C5\u6742\u8D27", link: "/pages/2d615df9a36a98ed/" },
          { text: "\u53CB\u60C5\u94FE\u63A5", link: "/friends/" }
        ]
      },
      {
        text: "\u6536\u85CF",
        link: "/pages/beb6c0bd8a66cea6/"
      },
      {
        text: "\u7D22\u5F15",
        link: "/archives/",
        items: [
          { text: "\u5206\u7C7B", link: "/categories/" },
          { text: "\u6807\u7B7E", link: "/tags/" },
          { text: "\u5F52\u6863", link: "/archives/" }
        ]
      }
    ],
    sidebarDepth: 2,
    logo: "/img/e-logo-head.png",
    repo: "willpast/willpast.github.io",
    searchMaxSuggestions: 10,
    lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "\u7F16\u8F91",
    sidebar: "structuring",
    author: {
      name: "Cyan",
      link: "https://github.com/willpast"
    },
    blogger: {
      avatar: "/img/e-logo.png",
      name: "Cyan",
      slogan: "This too shall pass"
    },
    social: {
      icons: [
        {
          iconClass: "icon-youjian",
          title: "\u53D1\u90AE\u4EF6",
          link: "mailto:lhhd_llz@163.com"
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/willpast"
        },
        {
          iconClass: "icon-erji",
          title: "\u542C\u97F3\u4E50",
          link: "https://music.163.com/"
        }
      ]
    },
    footer: {
      createYear: 2014,
      copyrightInfo: 'Cyan | <a href="https://github.com/willpast/willpast.github.io/blob/master/LICENSE" target="_blank">MIT License</a>'
    },
    extendFrontmatter: {
      author: {
        name: "Cyan",
        link: "https://github.com/willpast"
      }
    },
    htmlModules: htmlModules_default,
    blogInfo: {
      blogCreate: "2024-04-16",
      indexView: true,
      pageView: true,
      readingTime: true,
      eachFileWords: readEachFileWords([""], 300, 160),
      mdFileCountType: "archives",
      totalWords: "archives",
      moutedEvent: ".tags-wrapper",
      indexIteration: 2500,
      pageIteration: 2500
    }
  },
  head: [
    ["link", { rel: "icon", href: "/img/e-logo-ico.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u4E2A\u4EBA\u535A\u5BA2,\u6280\u672F,\u5B66\u4E60"
      }
    ],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }],
    ["meta", { name: "theme-color", content: "#11a8cd" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],
    ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css" }],
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }]
  ],
  plugins: [
    [
      "sitemap",
      {
        hostname: WEB_SITE
      }
    ],
    "vuepress-plugin-baidu-autopush",
    [
      "vuepress-plugin-baidu-tongji",
      {
        hm: baiduCode_default
      }
    ],
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "\u5728MDN\u4E2D\u641C\u7D22",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=",
            behindUrl: ""
          },
          {
            title: "\u5728Runoob\u4E2D\u641C\u7D22",
            frontUrl: "https://www.runoob.com/?s="
          },
          {
            title: "\u5728Vue API\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.vuejs.org/v2/api/#"
          },
          {
            title: "\u5728Bing\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.bing.com/search?q="
          },
          {
            title: "\u901A\u8FC7\u767E\u5EA6\u641C\u7D22\u672C\u7AD9\u7684",
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`
          }
        ]
      }
    ],
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "demo-block",
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false
        }
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "3fd6a59736f73d4e2f1e",
          clientSecret: "dae90fdb2a54c9f91c8ecc1e1f9e8dca9e59309b",
          repo: "willpast.github.io",
          owner: "willpast",
          admin: ["willpast"],
          pagerDirection: "last",
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",
          title: "\u300C\u8BC4\u8BBA\u300D<%- frontmatter.title %>",
          labels: ["gitalk"],
          body: "\u9875\u9762\uFF1A<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>"
        }
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        }
      }
    ],
    [
      {
        name: "custom-plugins",
        globalUIComponents: ["PageInfo"]
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    extendMarkdown: (md) => {
      md.use(MarkdownItKatex);
    }
  },
  extraWatchFiles: [
    ".vuepress/config.ts",
    ".vuepress/config/htmlModules.ts"
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9iYWlkdUNvZGUudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL2h0bWxNb2R1bGVzLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3dlYlNpdGVJbmZvL3JlYWRGaWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFx1NjNEMFx1NzkzQVx1RkYxQVx1NTk4Mlx1NjBBOFx1NjBGM1x1NEY3Rlx1NzUyOEpTXHU3MjQ4XHU2NzJDXHU3Njg0XHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU1M0VGXHU1M0MyXHU4MDAzXHVGRjFBaHR0cHM6Ly9naXRodWIuY29tL3h1Z2FveWkvdnVlcHJlc3MtdGhlbWUtdmRvaW5nL3RyZWUvYTJmMDNlOTkzZGQyZjJhM2FmZGM1N2NmNzJhZGZjNmYxYjZiMGMzMi9kb2NzLy52dWVwcmVzc1xuICovXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSwgVXNlclBsdWdpbnMgfSBmcm9tICd2dWVwcmVzcy9jb25maWcnXG5pbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlcydcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBiYWlkdUNvZGUgZnJvbSAnLi9jb25maWcvYmFpZHVDb2RlJyAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFobVx1NzgwMVxuaW1wb3J0IGh0bWxNb2R1bGVzIGZyb20gJy4vY29uZmlnL2h0bWxNb2R1bGVzJyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTc2ODRodG1sXHU1NzU3XG5pbXBvcnQgTWFya2Rvd25JdEthdGV4IGZyb20gJ21hcmtkb3duLWl0LWthdGV4JzsgLy8gXHU2NTcwXHU2MzZFXHU1MTZDXHU1RjBGXHU2NjNFXHU3OTNBXG5pbXBvcnQgeyByZWFkRmlsZUxpc3QsIHJlYWRUb3RhbEZpbGVXb3JkcywgcmVhZEVhY2hGaWxlV29yZHMgfSBmcm9tICcuL3dlYlNpdGVJbmZvL3JlYWRGaWxlJztcblxuY29uc3QgRE9NQUlOX05BTUUgPSAnd2lsbHBhc3QuZ2l0aHViLmlvJyAvLyBcdTU3REZcdTU0MEQgKFx1NEUwRFx1NUUyNmh0dHBzKVxuY29uc3QgV0VCX1NJVEUgPSBgaHR0cHM6Ly8ke0RPTUFJTl9OQU1FfWAgLy8gXHU3RjUxXHU1NzQwXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZTxWZG9pbmdUaGVtZUNvbmZpZz4oe1xuICB0aGVtZTogJ3Zkb2luZycsIC8vIFx1NEY3Rlx1NzUyOG5wbVx1NEUzQlx1OTg5OFx1NTMwNVxuICAvLyB0aGVtZTogcmVzb2x2ZShcIi9Vc2Vycy93b3JrL2dpdC93aWxscGFzdC9saW9uL3dpbGxwYXN0LmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzc1wiLCAnLi4vLi4vdmRvaW5nJyksIC8vIFx1NEY3Rlx1NzUyOFx1NjcyQ1x1NTczMFx1NEUzQlx1OTg5OFx1NTMwNVxuXG4gIGxvY2FsZXM6IHtcbiAgICAnLyc6IHtcbiAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICB0aXRsZTogXCJDeWFuJ3MgYmxvZ1wiLFxuICAgICAgZGVzY3JpcHRpb246ICdcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTInLFxuICAgIH1cbiAgfSxcbiAgLy8gYmFzZTogJy8nLCAvLyBcdTlFRDhcdThCQTQnLydcdTMwMDJcdTU5ODJcdTY3OUNcdTRGNjBcdTYwRjNcdTVDMDZcdTRGNjBcdTc2ODRcdTdGNTFcdTdBRDlcdTkwRThcdTdGNzJcdTUyMzBcdTU5ODIgaHR0cHM6Ly9mb28uZ2l0aHViLmlvL2Jhci9cdUZGMENcdTkwQTNcdTRFNDggYmFzZSBcdTVFOTRcdThCRTVcdTg4QUJcdThCQkVcdTdGNkVcdTYyMTAgXCIvYmFyL1wiLFx1RkYwOFx1NTQyNlx1NTIxOVx1OTg3NVx1OTc2Mlx1NUMwNlx1NTkzMVx1NTNCQlx1NjgzN1x1NUYwRlx1N0I0OVx1NjU4N1x1NEVGNlx1RkYwOVxuXG4gIC8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuICB0aGVtZUNvbmZpZzoge1xuICAgIC8vIFx1NUJGQ1x1ODIyQVx1OTE0RFx1N0Y2RVxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nfSxcbiAgICAgIHsgdGV4dDogJ1x1NUJGQ1x1OEJGQicsIGxpbms6ICcvb3ZlcnZpZXcvJyB9LFxuICAgICAge1xuXHQgICAgICB0ZXh0OiAnSmF2YScsXG5cdCAgICAgIGxpbms6ICcvamF2YS8nLFxuXHQgICAgICBpdGVtczogW1xuXHQgICAgICAgIHsgdGV4dDogJ0phdmFcdTU3RkFcdTc4NDAgLSBcdTU3RkFcdTc4NDBcdTc3RTVcdThCQzYnLFxuXHQgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU3N0U1XHU4QkM2XHU0RjUzXHU3Q0ZCXHU1QkZDXHU4QkZCJywgbGluazogJy9vdmVydmlldy8jXHU5NzYyXHU1NDExXHU1QkY5XHU4QzYxXHU0RTBFamF2YVx1NTdGQVx1Nzg0MCcgfSxcblx0ICAgICAgICAgICAgeyB0ZXh0OiAnXHU5NzYyXHU1NDExXHU1QkY5XHU4QzYxJywgbGluazogJy9wYWdlcy9qYXZhLWJhc2ljLW9vcC8nIH0sXG5cdCAgICAgICAgXHQgIHsgdGV4dDogJ1x1NzdFNVx1OEJDNlx1NzBCOScsIGxpbms6ICcvcGFnZXMvamF2YS1iYXNpYy1sYW4tYmFzaWMvJyB9LFxuXHQgICAgICAgICAgXVxuXHQgICAgICAgIH0sXG5cdFx0ICAgICAgeyB0ZXh0OiAnSmF2YVx1OEZEQlx1OTYzNiAtIFx1OTZDNlx1NTQwOFx1Njg0Nlx1NjdCNicsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTc3RTVcdThCQzZcdTRGNTNcdTdDRkJcdTVCRkNcdThCRkInLCBsaW5rOiAnL292ZXJ2aWV3LyNqYXZhXHU4RkRCXHU5NjM2LVx1OTZDNlx1NTQwOFx1Njg0Nlx1NjdCNicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnQ29sbGVjdGlvbiAtIFx1N0M3Qlx1NTE3M1x1N0NGQlx1NTZGRScsIGxpbms6ICcvcGFnZXMvamF2YS1jb2xsZWN0aW9uLW92ZXJ2aWV3LycgfSxcbiAgICAgICAgICAgIF1cblx0XHQgICAgICB9LFxuXHRcdCAgICAgIHsgdGV4dDogJ0phdmFcdThGREJcdTk2MzYgLSBcdTVFNzZcdTUzRDFcdTY4NDZcdTY3QjYnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU3N0U1XHU4QkM2XHU0RjUzXHU3Q0ZCXHU1QkZDXHU4QkZCJywgbGluazogJy9wYWdlcy9qYXZhLXRocmVhZC14LW92ZXJ2aWV3LycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnSmF2YSBcdTVFNzZcdTUzRDEgLSBcdTc0MDZcdThCQkFcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL3BhZ2VzL2phdmEtdGhyZWFkLXgtdGhlb3J0eS8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0phdmEgXHU1RTc2XHU1M0QxIC0gXHU3RUJGXHU3QTBCXHU1N0ZBXHU3ODQwJywgbGluazogJy9wYWdlcy9qYXZhLXRocmVhZC14LXRocmVhZC1iYXNpYy8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0pVQyAtIFx1N0M3Qlx1NkM0N1x1NjAzQicsIGxpbms6ICcvcGFnZXMvamF2YS10aHJlYWQteC1qdWMtb3ZlcnZpZXcvJyB9LFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cblx0XHQgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ0phdmFcdThGREJcdTk2MzYgLSBJT1x1Njg0Nlx1NjdCNicsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTc3RTVcdThCQzZcdTRGNTNcdTdDRkJcdTVCRkNcdThCRkInLCBsaW5rOiAnL3BhZ2VzL2phdmEtaW8tb3ZlcnZpZXcvJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdJTyBcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL3BhZ2VzL2phdmEtaW8tYmFzaWMtdXNhZ2UvJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdCSU8gXHU1N0ZBXHU3ODQwJywgbGluazogJy9wYWdlcy9qYXZhLWlvLWJpby8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ05JTyBcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL3BhZ2VzL2phdmEtaW8tbmlvLycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnQUlPIFx1NTdGQVx1Nzg0MCcsIGxpbms6ICcvcGFnZXMvamF2YS1pby1haW8vJyB9LFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cblx0XHQgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ0phdmFcdThGREJcdTk2MzYgLSBKVk1cdTc2RjhcdTUxNzMnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU3N0U1XHU4QkM2XHU0RjUzXHU3Q0ZCXHU1QkZDXHU4QkZCJywgbGluazogJy9wYWdlcy9qYXZhLWp2bS1vdmVydmlldy8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0phdmEgXHU3QzdCXHU1QjU3XHU4MjgyXHU3ODAxJywgbGluazogJy9wYWdlcy9qYXZhLWp2bS1jbGFzcy8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0pWTSBcdTUxODVcdTVCNThcdTZBMjFcdTU3OEInLCBsaW5rOiAnL3BhZ2VzL2phdmEtanZtLWptbS8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0pWTSBcdTU3ODNcdTU3M0VcdTU2REVcdTY1MzYnLCBsaW5rOiAnL3BhZ2VzL2phdmEtanZtLWdjLycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnSmF2YSBcdThDMDNcdThCRDVcdTYzOTJcdTk1MTknLCBsaW5rOiAnL3BhZ2VzL2phdmEtanZtLXBhcmFtLycgfSwgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXVxuXHRcdCAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSmF2YVx1OEZEQlx1OTYzNiAtIFx1NjVCMFx1NzI0OFx1NjcyQ1x1NzI3OVx1NjAyNycsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdqYXZhIDggXHU2NUIwXHU3Mjc5XHU2MDI3XHU3N0U1XHU4QkM2XHU0RjUzXHU3Q0ZCXHU1QkZDXHU4QkZCJywgbGluazogJy9wYWdlcy9qYXZhOC1vdmVydmlldy8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0phdmEgOCsgXHU3Mjc5XHU2MDI3XHU3N0U1XHU4QkM2XHU0RjUzXHU3Q0ZCXHU1QkZDXHU4QkZCJywgbGluazogJy9wYWdlcy9qYXZhOCstb3ZlcnZpZXcvJyB9LCAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7IHRleHQ6ICdKYXZhIDggXHU1MzQ3SmF2YSAxMSBcdTkxQ0RcdTg5ODFcdTcyNzlcdTYwMjdcdTVGQzVcdThCRkInLCBsaW5rOiAnL3BhZ2VzL2phdmE5LTExLycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnSmF2YSAxMSBcdTUzNDdKYXZhIDE3IFx1OTFDRFx1ODk4MVx1NzI3OVx1NjAyN1x1NUZDNVx1OEJGQicsIGxpbms6ICcvcGFnZXMvamF2YTEyLTE3LycgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cblx0XHQgICAgICB9LCAgICAgICAgICBcblx0ICAgICAgXSxcblx0ICAgIH0sXG4gICAgICB7XG5cdCAgICAgIHRleHQ6ICdcdTdCOTdcdTZDRDUnLFxuXHQgICAgICBsaW5rOiAnL2FsZ29yaXRobS8nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1N0I5N1x1NkNENScsIFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge3RleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTU3RkFcdTc4NDBcdTVCRkNcdThCRkInLCBsaW5rOiAnL3BhZ2VzL2FsZy1iYXNpYy1vdmVydmlldy8nfSxcbiAgICAgICAgICAgICAge3RleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdThGREJcdTk2MzZcdTVCRkNcdThCRkInLCBsaW5rOiAnL3BhZ2VzL2VmODQ3Yy8nfSxcbiAgICAgICAgICAgICAge3RleHQ6ICdcdTVFMzhcdTg5QzFcdTYzOTJcdTVFOEZcdTdCOTdcdTZDRDVcdTVCRkNcdThCRkInLCBsaW5rOiAnL3BhZ2VzL2FsZy1zb3J0LW92ZXJ2aWV3Lyd9LFxuICAgICAgICAgICAgICB7dGV4dDogJ1x1N0I5N1x1NkNENVx1NjAxRFx1NjBGM1x1NUJGQ1x1OEJGQicsIGxpbms6ICcvcGFnZXMvYWxnLWNvcmUtb3ZlcnZpZXcvJ30sICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBdXG5cdFx0ICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTk4ODZcdTU3REZcdTdCOTdcdTZDRDUnLCBcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1OTg4Nlx1NTdERlx1N0I5N1x1NkNENVx1NUJGQ1x1OEJGQicsIGxpbms6ICcvcGFnZXMvYWxnLWRvbWFpbi1vdmVydmlldy8nfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1Qjg5XHU1MTY4XHU3Qjk3XHU2Q0Q1JywgbGluazogJy9wYWdlcy9hbGctZG9tYWluLXNlY3VyaXR5LWRlZ2lzdC8nfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1QjU3XHU3QjI2XHU0RTMyXHU1MzM5XHU5MTREXHU3Qjk3XHU2Q0Q1JywgbGluazogJy9wYWdlcy9hbGctZG9tYWluLWNoYXItbWF0Y2gtb3ZlcnZpZXcvJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTU5MjdcdTY1NzBcdTYzNkVcdTU5MDRcdTc0MDZcdTdCOTdcdTZDRDUnLCBsaW5rOiAnL3BhZ2VzL2FsZy1kb21haW4tYmlnZGF0YS1vdmVydmlldy8nfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1MjA2XHU1RTAzXHU1RjBGXHU3Q0ZCXHU3RURGXHU3Qjk3XHU2Q0Q1JywgbGluazogJy9wYWdlcy9hbGctZG9tYWluLWRpc3RyaWJ1dGUtb3ZlcnZpZXcvJ30sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTE3Nlx1NUI4M1x1N0I5N1x1NkNENVx1NzZGOFx1NTE3MycsIGxpbms6ICcvcGFnZXMvYWxnLW90aGVyLW1pbmQvJ30sICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cblx0XHQgICAgICB9LFxuXG4gICAgICAgIF0sXG5cdCAgICB9LFxuXHQgICAge1xuXHQgICAgICB0ZXh0OiAnXHU2MjgwXHU2NzJGJyxcblx0ICAgICAgbGluazogJy90ZWNobm9sb2d5LycsXG5cdCAgICAgIGl0ZW1zOiBbXG5cdCAgICAgICAgeyB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU2MjgwXHU4MEZEJyxcblx0ICAgICAgICAgIGl0ZW1zOiBbXG5cdCAgICAgICAgICAgIHsgdGV4dDogJ1x1MzAxMFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1MzAxMScsIGxpbms6ICcvYmFzZS9zdHJ1Y3QvJyB9LFxuXHQgICAgICAgIFx0ICB7IHRleHQ6ICdcdTMwMTBcdTVFMzhcdTc1MjhcdTVERTVcdTUxNzdcdTMwMTEnLCBsaW5rOiAnL2Jhc2UvdG9vbC8nIH0sXG5cdCAgICAgICAgICBdXG5cdCAgICAgICAgfSxcblx0XHQgICAgICB7IHRleHQ6ICdcdTY1NzBcdTYzNkVcdTVGMDBcdTUzRDEnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU5MUM3XHU5NkM2JywgbGluazogJy9kYXRhL2NvbGxlY3QvJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY1NzBcdTYzNkVcdTRGMjBcdThGOTMnLCBsaW5rOiAnL2RhdGEvdHJhbnNtaXQvJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY1NzBcdTYzNkVcdTVCNThcdTUwQTgnLCBsaW5rOiAnL2RhdGEvc3RvcmFnZS8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNicsIGxpbms6ICcvZGF0YS9wcm9jZXNzLycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU2Q0JCXHU3NDA2JywgbGluazogJy9kYXRhL2dvdmVybi8nIH0sXG4gICAgICAgICAgICBdXG5cdFx0ICAgICAgfVxuXHQgICAgICBdLFxuXHQgICAgfSxcblx0ICAgIHtcblx0XHQgICAgdGV4dDogJ1x1OTg3OVx1NzZFRScsXG5cdFx0ICAgIGxpbms6ICcvcHJvamVjdC8nLFxuXHRcdCAgICBpdGVtczogW1xuXHRcdCAgICAgIHsgdGV4dDogJ1x1NEVENlx1NUM3MVx1NEU0Qlx1NzM4OS1cdTc4MTRcdTVCNjYnLCBsaW5rOiAnL3BhZ2VzL2YyYTU1Ni8nIH0sXG5cdFx0ICAgICAgeyB0ZXh0OiAnXHU1M0VGXHU0RUU1XHU2NTNCXHU3N0YzLVx1NUI5RVx1NjIxOCcsIGxpbms6ICcvcGFnZXMvZjJhNTU2LycgfSxcblx0XHQgICAgXSwgXG5cdCAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2NkY0XHU1OTFBJyxcbiAgICAgICAgbGluazogJy9tb3JlLycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1QjY2XHU0RTYwJywgbGluazogJy9wYWdlcy9mMmE1NTYvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1OTc2Mlx1OEJENScsIGxpbms6ICcvcGFnZXMvNTc2YjFmLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGQzNcdTYwQzVcdTY3NDJcdThEMjcnLCBsaW5rOiAnL3BhZ2VzLzJkNjE1ZGY5YTM2YTk4ZWQvJyB9LCAgICAgICAgICAgXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1JywgbGluazogJy9mcmllbmRzLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sICAgICAgXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTY1MzZcdTg1Q0YnLFxuICAgICAgICBsaW5rOiAnL3BhZ2VzL2JlYjZjMGJkOGE2NmNlYTYvJyxcbiAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgLy8gICB7IHRleHQ6ICdcdTdGNTFcdTdBRDknLCBsaW5rOiAnL3BhZ2VzL2JlYjZjMGJkOGE2NmNlYTYvJyB9LFxuICAgICAgICAvLyAgIHsgdGV4dDogJ1x1OEQ0NFx1NkU5MCcsIGxpbms6ICcvcGFnZXMvZWVlODNhOTIxMWE3MGY5ZC8nIH0sXG4gICAgICAgIC8vICAgeyB0ZXh0OiAnVnVlXHU4RDQ0XHU2RTkwJywgbGluazogJy9wYWdlcy8xMmRmOGFjZTUyZDQ5M2Y2LycgfSxcbiAgICAgICAgLy8gXSxcbiAgICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1N0QyMlx1NUYxNScsXG4gICAgICAgIGxpbms6ICcvYXJjaGl2ZXMvJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTUyMDZcdTdDN0InLCBsaW5rOiAnL2NhdGVnb3JpZXMvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NjgwN1x1N0I3RScsIGxpbms6ICcvdGFncy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RjUyXHU2ODYzJywgbGluazogJy9hcmNoaXZlcy8nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgc2lkZWJhckRlcHRoOiAyLCAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTY2M0VcdTc5M0FcdTZERjFcdTVFQTZcdUZGMENcdTlFRDhcdThCQTQxXHVGRjBDXHU2NzAwXHU1OTI3Mlx1RkYwOFx1NjYzRVx1NzkzQVx1NTIzMGgzXHU2ODA3XHU5ODk4XHVGRjA5XG4gICAgbG9nbzogJy9pbWcvZS1sb2dvLWhlYWQucG5nJywgLy8gXHU1QkZDXHU4MjJBXHU2ODBGbG9nb1xuICAgIHJlcG86ICd3aWxscGFzdC93aWxscGFzdC5naXRodWIuaW8nLCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTUzRjNcdTRGQTdcdTc1MUZcdTYyMTBHaXRodWJcdTk0RkVcdTYzQTUgLFx1ODJFNVx1NkNFOFx1OTFDQVx1NTIxOVx1NjU4N1x1NEVGNlx1NEUyRFx1N0YxNlx1OEY5MVx1NEUwRFx1NjYzRVx1NzkzQVxuICAgIHNlYXJjaE1heFN1Z2dlc3Rpb25zOiAxMCwgLy8gXHU2NDFDXHU3RDIyXHU3RUQzXHU2NzlDXHU2NjNFXHU3OTNBXHU2NzAwXHU1OTI3XHU2NTcwXG4gICAgbGFzdFVwZGF0ZWQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjAnLCAvLyBcdTVGMDBcdTU0MkZcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdUZGMENcdTVFNzZcdTkxNERcdTdGNkVcdTUyNERcdTdGMDBcdTY1ODdcdTVCNTcgICBzdHJpbmcgfCBib29sZWFuIChcdTUzRDZcdTUwM0NcdTRFM0FnaXRcdTYzRDBcdTRFQTRcdTY1RjZcdTk1RjQpXG4gICAgZG9jc0RpcjogJ2RvY3MnLCAvLyBcdTdGMTZcdThGOTFcdTc2ODRcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICAvLyBkb2NzQnJhbmNoOiAnbWFzdGVyJywgLy8gXHU3RjE2XHU4RjkxXHU3Njg0XHU2NTg3XHU0RUY2XHU2MjQwXHU1NzI4XHU1MjA2XHU2NTJGXHVGRjBDXHU5RUQ4XHU4QkE0bWFzdGVyXHUzMDAyIFx1NkNFOFx1NjEwRlx1RkYxQVx1NTk4Mlx1Njc5Q1x1NEY2MFx1NzY4NFx1NTIwNlx1NjUyRlx1NjYyRm1haW5cdTUyMTlcdTRGRUVcdTY1MzlcdTRFM0FtYWluXG4gICAgZWRpdExpbmtzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTdGMTZcdThGOTFcbiAgICBlZGl0TGlua1RleHQ6ICdcdTdGMTZcdThGOTEnLFxuXG4gICAgLy8qKiogXHU0RUU1XHU0RTBCXHU2NjJGVmRvaW5nXHU0RTNCXHU5ODk4XHU3NkY4XHU1MTczXHU5MTREXHU3RjZFXHVGRjBDXHU2NTg3XHU2ODYzXHVGRjFBaHR0cHM6Ly9kb2MueHVnYW95aS5jb20vcGFnZXMvYTIwY2U4LyAqKiovL1xuXG4gICAgLy8gY2F0ZWdvcnk6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTUyMDZcdTdDN0JcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gdGFnOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU2ODA3XHU3QjdFXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxuICAgIC8vIGFyY2hpdmU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGNTJcdTY4NjNcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gY2F0ZWdvcnlUZXh0OiAnXHU5NjhGXHU3QjE0JywgLy8gXHU3ODhFXHU3MjQ3XHU1MzE2XHU2NTg3XHU3QUUwXHVGRjA4X3Bvc3RzXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU2NTg3XHU3QUUwXHVGRjA5XHU5ODg0XHU4QkJFXHU3NTFGXHU2MjEwXHU3Njg0XHU1MjA2XHU3QzdCXHU1MDNDXHVGRjBDXHU5RUQ4XHU4QkE0J1x1OTY4Rlx1N0IxNCdcblxuICAgIC8vIHBhZ2VTdHlsZTogJ2xpbmUnLCAvLyBcdTk4NzVcdTk3NjJcdTk4Q0VcdTY4M0NcdUZGMENcdTUzRUZcdTkwMDlcdTUwM0NcdUZGMUEnY2FyZCdcdTUzNjFcdTcyNDcgfCAnbGluZScgXHU3RUJGXHVGRjA4XHU2NzJBXHU4QkJFXHU3RjZFYm9keUJnSW1nXHU2NUY2XHU2MjREXHU3NTFGXHU2NTQ4XHVGRjA5XHVGRjBDIFx1OUVEOFx1OEJBNCdjYXJkJ1x1MzAwMiBcdThCRjRcdTY2MEVcdUZGMUFjYXJkXHU2NUY2XHU4MENDXHU2NjZGXHU2NjNFXHU3OTNBXHU3MDcwXHU4MjcyXHU4ODZDXHU2MjU4XHU1MUZBXHU1MzYxXHU3MjQ3XHU2ODM3XHU1RjBGXHVGRjBDbGluZVx1NjVGNlx1ODBDQ1x1NjY2Rlx1NjYzRVx1NzkzQVx1N0VBRlx1ODI3Mlx1RkYwQ1x1NUU3Nlx1NEUxNFx1OTBFOFx1NTIwNlx1NkEyMVx1NTc1N1x1NUUyNlx1N0VCRlx1Njc2MVx1OEZCOVx1Njg0NlxuXG4gICAgLy8gYm9keUJnSW1nOiBbXG4gICAgLy8gICAnaHR0cHM6Ly9qc2QuY2RuLnp6a28uY24vZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODI4LmpwZWcnLFxuICAgIC8vICAgJ2h0dHBzOi8vanNkLmNkbi56emtvLmNuL2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTg0NS5qcGVnJyxcbiAgICAvLyAgICdodHRwczovL2pzZC5jZG4uenprby5jbi9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDA1MDcxNzU4NDYuanBlZydcbiAgICAvLyBdLCAvLyBib2R5XHU4MENDXHU2NjZGXHU1OTI3XHU1NkZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NUUwXHUzMDAyIFx1NTM1NVx1NUYyMFx1NTZGRVx1NzI0NyBTdHJpbmcgfCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDcgQXJyYXksIFx1NTkxQVx1NUYyMFx1NTZGRVx1NzI0N1x1NjVGNlx1OTY5NGJvZHlCZ0ltZ0ludGVydmFsXHU1MjA3XHU2MzYyXHU0RTAwXHU1RjIwXHUzMDAyXG4gICAgLy8gYm9keUJnSW1nT3BhY2l0eTogMC41LCAvLyBib2R5XHU4MENDXHU2NjZGXHU1NkZFXHU5MDBGXHU2NjBFXHU1RUE2XHVGRjBDXHU5MDA5XHU1MDNDIDAuMX4xLjAsIFx1OUVEOFx1OEJBNDAuNVxuICAgIC8vIGJvZHlCZ0ltZ0ludGVydmFsOiAxNSwgLy8gYm9keVx1NTkxQVx1NUYyMFx1ODBDQ1x1NjY2Rlx1NTZGRVx1NjVGNlx1NzY4NFx1NTIwN1x1NjM2Mlx1OTVGNFx1OTY5NCwgXHU5RUQ4XHU4QkE0MTVcdUZGMENcdTUzNTVcdTRGNERzXG4gICAgLy8gdGl0bGVCYWRnZTogZmFsc2UsIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NzY4NFx1NTZGRVx1NjgwN1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyB0aXRsZUJhZGdlSWNvbnM6IFsgLy8gXHU2NTg3XHU3QUUwXHU2ODA3XHU5ODk4XHU1MjREXHU1NkZFXHU2ODA3XHU3Njg0XHU1NzMwXHU1NzQwXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XG4gICAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMScsXG4gICAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMidcbiAgICAvLyBdLFxuICAgIC8vIGNvbnRlbnRCZ1N0eWxlOiAxLCAvLyBcdTY1ODdcdTdBRTBcdTUxODVcdTVCQjlcdTU3NTdcdTc2ODRcdTgwQ0NcdTY2NkZcdTk4Q0VcdTY4M0NcdUZGMENcdTlFRDhcdThCQTRcdTY1RTAuIDEgXHU2NUI5XHU2ODNDIHwgMiBcdTZBMkFcdTdFQkYgfCAzIFx1N0FENlx1N0VCRiB8IDQgXHU1REU2XHU2NTlDXHU3RUJGIHwgNSBcdTUzRjNcdTY1OUNcdTdFQkYgfCA2IFx1NzBCOVx1NzJCNlxuXG4gICAgLy8gdXBkYXRlQmFyOiB7IC8vIFx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1NjgwRlxuICAgIC8vICAgc2hvd1RvQXJ0aWNsZTogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU1MjMwXHU2NTg3XHU3QUUwXHU5ODc1XHU1RTk1XHU5MEU4XHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxuICAgIC8vICAgbW9yZUFydGljbGU6ICcvYXJjaGl2ZXMnIC8vIFx1MjAxQ1x1NjZGNFx1NTkxQVx1NjU4N1x1N0FFMFx1MjAxRFx1OERGM1x1OEY2Q1x1NzY4NFx1OTg3NVx1OTc2Mlx1RkYwQ1x1OUVEOFx1OEJBNCcvYXJjaGl2ZXMnXG4gICAgLy8gfSxcbiAgICAvLyByaWdodE1lbnVCYXI6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTUzRjNcdTRGQTdcdTY1ODdcdTdBRTBcdTU5MjdcdTdFQjJcdTY4MEZcdUZGMENcdTlFRDhcdThCQTR0cnVlIChcdTVDNEZcdTVCQkRcdTVDMEZcdTRFOEUxMzAwcHhcdTRFMEJcdTY1RTBcdThCQkFcdTU5ODJcdTRGNTVcdTkwRkRcdTRFMERcdTY2M0VcdTc5M0EpXG4gICAgLy8gc2lkZWJhck9wZW46IGZhbHNlLCAvLyBcdTUyMURcdTU5Q0JcdTcyQjZcdTYwMDFcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVERTZcdTRGQTdcdThGQjlcdTY4MEZcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gcGFnZUJ1dHRvbjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NUZFQlx1NjM3N1x1N0ZGQlx1OTg3NVx1NjMwOVx1OTRBRVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcblxuICAgIC8vIFx1OUVEOFx1OEJBNFx1NTkxNlx1ODlDMlx1NkEyMVx1NUYwRlx1RkYwOFx1NzUyOFx1NjIzN1x1NjcyQVx1NTcyOFx1OTg3NVx1OTc2Mlx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVx1OEZDN1x1NkEyMVx1NUYwRlx1NjVGNlx1NjI0RFx1NzUxRlx1NjU0OFx1RkYwQ1x1NTQyNlx1NTIxOVx1NEVFNVx1NzUyOFx1NjIzN1x1OEJCRVx1N0Y2RVx1NzY4NFx1NkEyMVx1NUYwRlx1NEUzQVx1NTFDNlx1RkYwOVx1RkYwQ1x1NTNFRlx1OTAwOVx1RkYxQSdhdXRvJyB8ICdsaWdodCcgfCAnZGFyaycgfCAncmVhZCdcdUZGMENcdTlFRDhcdThCQTQnYXV0bydcdTMwMDJcbiAgICAvLyBkZWZhdWx0TW9kZTogJ2F1dG8nLFxuXG4gICAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGICAnc3RydWN0dXJpbmcnIHwgeyBtb2RlOiAnc3RydWN0dXJpbmcnLCBjb2xsYXBzYWJsZTogQm9vbGVhbn0gfCAnYXV0bycgfCA8XHU4MUVBXHU1QjlBXHU0RTQ5PiAgICBcdTZFMjlcdTk5QThcdTYzRDBcdTc5M0FcdUZGMUFcdTc2RUVcdTVGNTVcdTk4NzVcdTY1NzBcdTYzNkVcdTRGOURcdThENTZcdTRFOEVcdTdFRDNcdTY3ODRcdTUzMTZcdTc2ODRcdTRGQTdcdThGQjlcdTY4MEZcdTY1NzBcdTYzNkVcdUZGMENcdTU5ODJcdTY3OUNcdTRGNjBcdTRFMERcdThCQkVcdTdGNkVcdTRFM0Enc3RydWN0dXJpbmcnLFx1NUMwNlx1NjVFMFx1NkNENVx1NEY3Rlx1NzUyOFx1NzZFRVx1NUY1NVx1OTg3NVxuICAgIHNpZGViYXI6ICdzdHJ1Y3R1cmluZycsXG5cbiAgICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTc2ODRcdTRGNUNcdTgwMDVcdTRGRTFcdTYwNkZcdUZGMEMoXHU1M0VGXHU1NzI4bWRcdTY1ODdcdTRFRjZcdTRFMkRcdTUzNTVcdTcyRUNcdTkxNERcdTdGNkVcdTZCNjRcdTRGRTFcdTYwNkYpIHN0cmluZyB8IHtuYW1lOiBzdHJpbmcsIGxpbms/OiBzdHJpbmd9XG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnQ3lhbicsIC8vIFx1NUZDNVx1OTcwMFxuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS93aWxscGFzdCcsIC8vIFx1NTNFRlx1OTAwOVx1NzY4NFxuICAgIH0sXG5cbiAgICAvLyBcdTUzNUFcdTRFM0JcdTRGRTFcdTYwNkYgKFx1NjYzRVx1NzkzQVx1NTcyOFx1OTk5Nlx1OTg3NVx1NEZBN1x1OEZCOVx1NjgwRilcbiAgICBibG9nZ2VyOiB7XG4gICAgICAvLyBhdmF0YXI6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvd2lsbHBhc3QvaW1hZ2UvYmxvZy9zdGFyZmlzaC5wbmcnLFxuXHQgIGF2YXRhcjogJy9pbWcvZS1sb2dvLnBuZycsXG4gICAgICBuYW1lOiAnQ3lhbicsXG4gICAgICBzbG9nYW46ICdUaGlzIHRvbyBzaGFsbCBwYXNzJyxcbiAgICB9LFxuXG4gICAgLy8gXHU3OTNFXHU0RUE0XHU1NkZFXHU2ODA3IChcdTY2M0VcdTc5M0FcdTRFOEVcdTUzNUFcdTRFM0JcdTRGRTFcdTYwNkZcdTY4MEZcdTU0OENcdTk4NzVcdTgxMUFcdTY4MEZcdTMwMDJcdTUxODVcdTdGNkVcdTU2RkVcdTY4MDdcdUZGMUFodHRwczovL2RvYy54dWdhb3lpLmNvbS9wYWdlcy9hMjBjZTgvI3NvY2lhbClcbiAgICBzb2NpYWw6IHtcbiAgICAgIC8vIGljb25mb250Q3NzRmlsZTogJy8vYXQuYWxpY2RuLmNvbS90L3h4eC5jc3MnLCAvLyBcdTUzRUZcdTkwMDlcdUZGMENcdTk2M0ZcdTkxQ0NcdTU2RkVcdTY4MDdcdTVFOTNcdTU3MjhcdTdFQkZjc3NcdTY1ODdcdTRFRjZcdTU3MzBcdTU3NDBcdUZGMENcdTVCRjlcdTRFOEVcdTRFM0JcdTk4OThcdTZDQTFcdTY3MDlcdTc2ODRcdTU2RkVcdTY4MDdcdTUzRUZcdTgxRUFcdTVERjFcdTZERkJcdTUyQTBcdTMwMDJcdTk2M0ZcdTkxQ0NcdTU2RkVcdTcyNDdcdTVFOTNcdUZGMUFodHRwczovL3d3dy5pY29uZm9udC5jbi9cbiAgICAgIGljb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uQ2xhc3M6ICdpY29uLXlvdWppYW4nLFxuICAgICAgICAgIHRpdGxlOiAnXHU1M0QxXHU5MEFFXHU0RUY2JyxcbiAgICAgICAgICBsaW5rOiAnbWFpbHRvOmxoaGRfbGx6QDE2My5jb20nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbkNsYXNzOiAnaWNvbi1naXRodWInLFxuICAgICAgICAgIHRpdGxlOiAnR2l0SHViJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3dpbGxwYXN0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb25DbGFzczogJ2ljb24tZXJqaScsXG4gICAgICAgICAgdGl0bGU6ICdcdTU0MkNcdTk3RjNcdTRFNTAnLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL211c2ljLjE2My5jb20vJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIC8vIFx1OTg3NVx1ODExQVx1NEZFMVx1NjA2RlxuICAgIGZvb3Rlcjoge1xuICAgICAgY3JlYXRlWWVhcjogMjAxNCwgLy8gXHU1MzVBXHU1QkEyXHU1MjFCXHU1RUZBXHU1RTc0XHU0RUZEXG4gICAgICBjb3B5cmlnaHRJbmZvOlxuICAgICAgICAnQ3lhbiB8IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2lsbHBhc3Qvd2lsbHBhc3QuZ2l0aHViLmlvL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5NSVQgTGljZW5zZTwvYT4nLCAvLyBcdTUzNUFcdTVCQTJcdTcyNDhcdTY3NDNcdTRGRTFcdTYwNkZcdTMwMDFcdTU5MDdcdTY4NDhcdTRGRTFcdTYwNkZcdTdCNDlcdUZGMENcdTY1MkZcdTYzMDFhXHU2ODA3XHU3QjdFXHU2MjE2XHU2MzYyXHU4ODRDXHU2ODA3XHU3QjdFPC9icj5cbiAgICB9LFxuXG4gICAgLy8gXHU2MjY5XHU1QzU1XHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwZnJvbnRtYXR0ZXJcdTMwMDJcdUZGMDhcdTVGNTNtZFx1NjU4N1x1NEVGNlx1NzY4NGZyb250bWF0dGVyXHU0RTBEXHU1QjU4XHU1NzI4XHU3NkY4XHU1RTk0XHU3Njg0XHU1QjU3XHU2QkI1XHU2NUY2XHU1QzA2XHU4MUVBXHU1MkE4XHU2REZCXHU1MkEwXHUzMDAyXHU0RTBEXHU0RjFBXHU4OTg2XHU3NkQ2XHU1REYyXHU2NzA5XHU3Njg0XHU2NTcwXHU2MzZFXHUzMDAyXHVGRjA5XG4gICAgZXh0ZW5kRnJvbnRtYXR0ZXI6IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBuYW1lOiAnQ3lhbicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2lsbHBhc3QnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OWhtdGwoXHU1RTdGXHU1NDRBKVx1NkEyMVx1NTc1N1xuICAgIGh0bWxNb2R1bGVzLFxuXG4gICAgLy8gXHU3QUQ5XHU3MEI5XHU5MTREXHU3RjZFXHVGRjA4XHU5OTk2XHU5ODc1ICYgXHU2NTg3XHU3QUUwXHU5ODc1XHVGRjA5XG4gICAgYmxvZ0luZm86IHtcbiAgICAgIGJsb2dDcmVhdGU6ICcyMDI0LTA0LTE2JywgLy8gXHU1MzVBXHU1QkEyXHU1MjFCXHU1RUZBXHU2NUY2XHU5NUY0XG4gICAgICBpbmRleFZpZXc6IHRydWUsICAvLyBcdTVGMDBcdTU0MkZcdTk5OTZcdTk4NzVcdTc2ODRcdThCQkZcdTk1RUVcdTkxQ0ZcdTU0OENcdTYzOTJcdTU0MERcdTdFREZcdThCQTFcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZVx1RkYwOFx1NUYwMFx1NTQyRlx1RkYwOVxuICAgICAgcGFnZVZpZXc6IHRydWUsICAvLyBcdTVGMDBcdTU0MkZcdTY1ODdcdTdBRTBcdTk4NzVcdTc2ODRcdTZENEZcdTg5QzhcdTkxQ0ZcdTdFREZcdThCQTFcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZVx1RkYwOFx1NUYwMFx1NTQyRlx1RkYwOVxuICAgICAgcmVhZGluZ1RpbWU6IHRydWUsICAvLyBcdTVGMDBcdTU0MkZcdTY1ODdcdTdBRTBcdTk4NzVcdTc2ODRcdTk4ODRcdThCQTFcdTk2MDVcdThCRkJcdTY1RjZcdTk1RjRcdUZGMENcdTY3NjFcdTRFRjZcdUZGMUFcdTVGMDBcdTU0MkYgZWFjaEZpbGVXb3Jkc1x1RkYwQ1x1OUVEOFx1OEJBNCB0cnVlXHVGRjA4XHU1RjAwXHU1NDJGXHVGRjA5XHUzMDAyXHU1M0VGXHU1NzI4IGVhY2hGaWxlV29yZHMgXHU3Njg0IHJlYWRFYWNoRmlsZVdvcmRzIFx1NzY4NFx1N0IyQ1x1NEU4Q1x1NEUyQVx1NTQ4Q1x1N0IyQ1x1NEUwOVx1NEUyQVx1NTNDMlx1NjU3MFx1ODFFQVx1NUI5QVx1NEU0OVx1RkYwQ1x1OUVEOFx1OEJBNCAxIFx1NTIwNlx1OTQ5RiAzMDAgXHU0RTJEXHU2NTg3XHUzMDAxMTYwIFx1ODJGMVx1NjU4N1xuICAgICAgZWFjaEZpbGVXb3JkczogcmVhZEVhY2hGaWxlV29yZHMoWycnXSwgMzAwLCAxNjApLCAgLy8gXHU1RjAwXHU1NDJGXHU2QkNGXHU0RTJBXHU2NTg3XHU3QUUwXHU5ODc1XHU3Njg0XHU1QjU3XHU2NTcwXHUzMDAycmVhZEVhY2hGaWxlV29yZHMoWyd4eCddKSBcdTUxNzNcdTk1RUQgeHggXHU3NkVFXHU1RjU1XHVGRjA4XHU1M0VGXHU1OTFBXHU0RTJBXHVGRjBDXHU1M0VGXHU0RTBEXHU0RjIwXHU1M0MyXHU2NTcwXHVGRjA5XHU0RTBCXHU3Njg0XHU2NTg3XHU3QUUwXHU5ODc1XHU1QjU3XHU2NTcwXHU1NDhDXHU5NjA1XHU4QkZCXHU2NUY2XHU5NTdGXHVGRjBDXHU1NDBFXHU5NzYyXHU0RTI0XHU0RTJBXHU1M0MyXHU2NTcwXHU1MjA2XHU1MjJCXHU2NjJGIDEgXHU1MjA2XHU5NDlGXHU5MUNDXHU4MEZEXHU5NjA1XHU4QkZCXHU3Njg0XHU0RTJEXHU2NTg3XHU1QjU3XHU2NTcwXHU1NDhDXHU4MkYxXHU2NTg3XHU1QjU3XHU2NTcwXHUzMDAyXHU2NUUwXHU5RUQ4XHU4QkE0XHU1MDNDXHUzMDAycmVhZEVhY2hGaWxlV29yZHMoKSBcdTY1QjlcdTZDRDVcdTlFRDhcdThCQTRcdTYzOTJcdTk2NjRcdTRFODYgYXJ0aWNsZSBcdTRFM0EgZmFsc2UgXHU3Njg0XHU2NTg3XHU3QUUwXG4gICAgICBtZEZpbGVDb3VudFR5cGU6ICdhcmNoaXZlcycsICAvLyBcdTVGMDBcdTU0MkZcdTY1ODdcdTY4NjNcdTY1NzBcdTMwMDIxLiBhcmNoaXZlcyBcdTgzQjdcdTUzRDZcdTVGNTJcdTY4NjNcdTc2ODRcdTY1ODdcdTY4NjNcdTY1NzBcdUZGMDhcdTlFRDhcdThCQTRcdUZGMDlcdTMwMDIyLiBcdTY1NzBcdTdFQzQgcmVhZEZpbGVMaXN0KFsneHgnXSkgXHU2MzkyXHU5NjY0IHh4IFx1NzZFRVx1NUY1NVx1RkYwOFx1NTNFRlx1NTkxQVx1NEUyQVx1RkYwQ1x1NTNFRlx1NEUwRFx1NEYyMFx1NTNDMlx1NjU3MFx1RkYwOVx1RkYwQ1x1ODNCN1x1NTNENlx1NTE3Nlx1NEVENlx1NzZFRVx1NUY1NVx1NzY4NFx1NjU4N1x1Njg2M1x1NjU3MFx1MzAwMlx1NjNEMFx1NzkzQVx1RkYxQXJlYWRGaWxlTGlzdCgpIFx1ODNCN1x1NTNENiBkb2NzIFx1NEUwQlx1NjI0MFx1NjcwOVx1NzY4NCBtZCBcdTY1ODdcdTY4NjNcdUZGMDhcdTk2NjRcdTRFODYgYC52dWVwcmVzc2AgXHU1NDhDIGBAcGFnZXNgIFx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NFx1NjU4N1x1Njg2M1x1RkYwOVxuICAgICAgdG90YWxXb3JkczogJ2FyY2hpdmVzJywgIC8vIFx1NUYwMFx1NTQyRlx1NjcyQ1x1N0FEOVx1NjU4N1x1Njg2M1x1NjAzQlx1NUI1N1x1NjU3MFx1MzAwMjEuIGFyY2hpdmVzIFx1ODNCN1x1NTNENlx1NUY1Mlx1Njg2M1x1NzY4NFx1NjU4N1x1Njg2M1x1NjU3MFx1RkYwOFx1NEY3Rlx1NzUyOCBhcmNoaXZlcyBcdTY3NjFcdTRFRjZcdUZGMUFcdTRGMjBcdTUxNjUgZWFjaEZpbGVXb3Jkc1x1RkYwQ1x1NTQyNlx1NTIxOVx1NjJBNVx1OTUxOVx1RkYwOVx1MzAwMjIuIHJlYWRUb3RhbEZpbGVXb3JkcyhbJ3h4J10pIFx1NjM5Mlx1OTY2NCB4eCBcdTc2RUVcdTVGNTVcdUZGMDhcdTUzRUZcdTU5MUFcdTRFMkFcdUZGMENcdTUzRUZcdTRFMERcdTRGMjBcdTUzQzJcdTY1NzBcdUZGMDlcdUZGMENcdTgzQjdcdTUzRDZcdTUxNzZcdTRFRDZcdTc2RUVcdTVGNTVcdTc2ODRcdTY1ODdcdTdBRTBcdTVCNTdcdTY1NzBcdTMwMDJcdTY1RTBcdTlFRDhcdThCQTRcdTUwM0NcbiAgICAgIG1vdXRlZEV2ZW50OiAnLnRhZ3Mtd3JhcHBlcicsICAgLy8gXHU5OTk2XHU5ODc1XHU3Njg0XHU3QUQ5XHU3MEI5XHU2QTIxXHU1NzU3XHU2MzAyXHU4RjdEXHU1NzI4XHU2N0QwXHU0RTJBXHU1MTQzXHU3RDIwXHU1NDBFXHU5NzYyXHVGRjA4XHU2NTJGXHU2MzAxXHU1OTFBXHU3OUNEXHU5MDA5XHU2MkU5XHU1NjY4XHVGRjA5XHVGRjBDXHU2MzA3XHU3Njg0XHU2NjJGXHU2MzAyXHU4RjdEXHU1NzI4XHU1NEVBXHU0RTJBXHU1MTQ0XHU1RjFGXHU1MTQzXHU3RDIwXHU3Njg0XHU1NDBFXHU5NzYyXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGXHU3MEVEXHU5NUU4XHU2ODA3XHU3QjdFICcudGFncy13cmFwcGVyJyBcdTRFMEJcdTk3NjJcdUZGMENcdTYzRDBcdTc5M0FcdUZGMUEnLmNhdGVnb3JpZXMtd3JhcHBlcicgXHU0RjFBXHU2MzAyXHU4RjdEXHU1NzI4XHU2NTg3XHU3QUUwXHU1MjA2XHU3QzdCXHU0RTBCXHU5NzYyXHUzMDAyJy5ibG9nZ2VyLXdyYXBwZXInIFx1NEYxQVx1NjMwMlx1OEY3RFx1NTcyOFx1NTM1QVx1NUJBMlx1NTkzNFx1NTBDRlx1NkEyMVx1NTc1N1x1NEUwQlx1OTc2MlxuICAgICAgLy8gXHU0RTBCXHU5NzYyXHU0RTI0XHU0RTJBXHU5MDA5XHU5ODc5XHVGRjFBXHU3QjJDXHU0RTAwXHU2QjIxXHU4M0I3XHU1M0Q2XHU4QkJGXHU5NUVFXHU5MUNGXHU1OTMxXHU4RDI1XHU1NDBFXHU3Njg0XHU4RkVEXHU0RUUzXHU2NUY2XHU5NUY0XG4gICAgICBpbmRleEl0ZXJhdGlvbjogMjUwMCwgICAvLyBcdTU5ODJcdTY3OUNcdTk5OTZcdTk4NzVcdTgzQjdcdTUzRDZcdThCQkZcdTk1RUVcdTkxQ0ZcdTU5MzFcdThEMjVcdUZGMENcdTUyMTlcdTZCQ0ZcdTk2OTRcdTU5MUFcdTVDMTFcdTY1RjZcdTk1RjRcdTU0MEVcdTgzQjdcdTUzRDZcdTRFMDBcdTZCMjFcdThCQkZcdTk1RUVcdTkxQ0ZcdUZGMENcdTc2RjRcdTUyMzBcdTgzQjdcdTUzRDZcdTYyMTBcdTUyOUZcdTYyMTZcdTgzQjdcdTUzRDYgMTAgXHU2QjIxXHU1NDBFXHUzMDAyXHU5RUQ4XHU4QkE0IDMgXHU3OUQyXHUzMDAyXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1OTJBXHU0RjRFXHVGRjBDXHU1M0VGXHU4MEZEXHU1QkZDXHU4MUY0XHU4QkJGXHU5NUVFXHU5MUNGICsgMlx1MzAwMSsgMyAuLi4uLi5cbiAgICAgIHBhZ2VJdGVyYXRpb246IDI1MDAsICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NjU4N1x1N0FFMFx1OTg3NVx1ODNCN1x1NTNENlx1OEJCRlx1OTVFRVx1OTFDRlx1NTkzMVx1OEQyNVx1RkYwQ1x1NTIxOVx1NkJDRlx1OTY5NFx1NTkxQVx1NUMxMVx1NjVGNlx1OTVGNFx1NTQwRVx1ODNCN1x1NTNENlx1NEUwMFx1NkIyMVx1OEJCRlx1OTVFRVx1OTFDRlx1RkYwQ1x1NzZGNFx1NTIzMFx1ODNCN1x1NTNENlx1NjIxMFx1NTI5Rlx1NjIxNlx1ODNCN1x1NTNENiAxMCBcdTZCMjFcdTU0MEVcdTMwMDJcdTlFRDhcdThCQTQgMyBcdTc5RDJcdTMwMDJcdTZDRThcdTYxMEZcdUZGMUFcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTU5MkFcdTRGNEVcdUZGMENcdTUzRUZcdTgwRkRcdTVCRkNcdTgxRjRcdThCQkZcdTk1RUVcdTkxQ0YgKyAyXHUzMDAxKyAzIC4uLi4uLlxuICAgICAgLy8gXHU4QkY0XHU2NjBFXHVGRjFBXHU2MjEwXHU1MjlGXHU4M0I3XHU1M0Q2XHU0RTAwXHU2QjIxXHU4QkJGXHU5NUVFXHU5MUNGXHVGRjBDXHU4QkJGXHU5NUVFXHU5MUNGICsgMVx1RkYwQ1x1NjI0MFx1NEVFNVx1N0IyQ1x1NEUwMFx1NkIyMVx1ODNCN1x1NTNENlx1NTkzMVx1OEQyNVx1NTQwRVx1RkYwQ1x1OEJCRVx1N0Y2RVx1NzY4NFx1NkJDRlx1NEUyQVx1OTY5NFx1NkJCNVx1OTFDRFx1NjVCMFx1ODNCN1x1NTNENlx1NjVGNlx1OTVGNFx1RkYwQ1x1NUMwNlx1NEYxQVx1NUY3MVx1NTRDRFx1OEJCRlx1OTVFRVx1OTFDRlx1NzY4NFx1NkIyMVx1NjU3MFx1MzAwMlx1NTk4MiAxMDAgXHU1M0VGXHU4MEZEXHU2QkNGXHU2QjIxXHU4M0I3XHU1M0Q2XHU4QkJGXHU5NUVFXHU5MUNGICsgM1xuICAgIH0sXG5cbiAgfSxcblxuICAvLyBcdTZDRThcdTUxNjVcdTUyMzBcdTk4NzVcdTk3NjI8aGVhZD5cdTRFMkRcdTc2ODRcdTY4MDdcdTdCN0VcdUZGMENcdTY4M0NcdTVGMEZbdGFnTmFtZSwgeyBhdHRyTmFtZTogYXR0clZhbHVlIH0sIGlubmVySFRNTD9dXG4gIGhlYWQ6IFtcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ltZy9lLWxvZ28taWNvLnBuZycgfV0sIC8vZmF2aWNvbnNcdUZGMENcdThENDRcdTZFOTBcdTY1M0VcdTU3MjhwdWJsaWNcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICBbXG4gICAgICAnbWV0YScsXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICAgIGNvbnRlbnQ6ICdcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTIsXHU2MjgwXHU2NzJGLFx1NUI2Nlx1NEU2MCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAnYmFpZHUtc2l0ZS12ZXJpZmljYXRpb24nLCBjb250ZW50OiAnN0Y1NXdlWkREYycgfV0sIC8vIFx1NzY3RVx1NUVBNlx1N0VERlx1OEJBMVx1NzY4NFx1N0FEOVx1OTU3Rlx1OUE4Q1x1OEJDMVx1RkYwOFx1NEY2MFx1NTNFRlx1NEVFNVx1NTNCQlx1NjM4OVx1RkYwOVxuICAgIFsnbWV0YScsIHsgbmFtZTogJ3RoZW1lLWNvbG9yJywgY29udGVudDogJyMxMWE4Y2QnIH1dLCAvLyBcdTc5RkJcdTUyQThcdTZENEZcdTg5QzhcdTU2NjhcdTRFM0JcdTk4OThcdTk4OUNcdTgyNzJcbiAgICAvLyBbXG4gICAgLy8gICAnc2NyaXB0JyxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgJ2RhdGEtYWQtY2xpZW50JzogJ2NhLXB1Yi03ODI4MzMzNzI1OTkzNTU0JyxcbiAgICAvLyAgICAgYXN5bmM6ICdhc3luYycsXG4gICAgLy8gICAgIHNyYzogJ2h0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSwgLy8gXHU3RjUxXHU3QUQ5XHU1MTczXHU4MDU0R29vZ2xlIEFkU2Vuc2UgXHU0RTBFIGh0bWxcdTY4M0NcdTVGMEZcdTVFN0ZcdTU0NEFcdTY1MkZcdTYzMDFcdUZGMDhcdTRGNjBcdTUzRUZcdTRFRTVcdTUzQkJcdTYzODlcdUZGMDlcblxuICAgIFsnbGluaycsIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9LYVRlWC8wLjcuMS9rYXRleC5taW4uY3NzJyB9XSwgICAgICAvLyBcdThCQTltZFx1NjUyRlx1NjMwMVx1NjU3MFx1NUI2Nlx1NTE2Q1x1NUYwRlxuICAgIFsnbGluaycsIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9naXRodWItbWFya2Rvd24tY3NzLzIuMTAuMC9naXRodWItbWFya2Rvd24ubWluLmNzc1wiIH1dLCAgLy8gXHU4QkE5bWRcdTY1MkZcdTYzMDFcdTY1NzBcdTVCNjZcdTUxNkNcdTVGMEZcblxuICAgIFsnbGluaycsIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzMwNzczMDVfcHQ4dW1ocm40azkuY3NzJyB9XSwgLy8gXHU5NjNGXHU5MUNDXHU1NzI4XHU3RUJGXHU3N0UyXHU5MUNGXHU1NkZFXG4gICAgWydtZXRhJywgeyBuYW1lOiAncmVmZXJyZXInLCBjb250ZW50OiAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnIH1dLCAvLyBcdTg5RTNcdTUxQjMgY2hyb21lIFx1N0Y1MVx1N0FEOVx1N0VERlx1OEJBMVx1NEUwRFx1NTFDNlx1Nzg2RVx1OTVFRVx1OTg5OFxuXG4gIF0sXG5cblxuICAvLyBcdTYzRDJcdTRFRjZcdTkxNERcdTdGNkVcbiAgcGx1Z2luczogPFVzZXJQbHVnaW5zPltcbiAgICBbXG4gICAgICBcInNpdGVtYXBcIiwgLy8gXHU3RjUxXHU3QUQ5XHU1NzMwXHU1NkZFXG4gICAgICB7XG4gICAgICAgIGhvc3RuYW1lOiBXRUJfU0lURSxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgICd2dWVwcmVzcy1wbHVnaW4tYmFpZHUtYXV0b3B1c2gnLCAvLyBcdTc2N0VcdTVFQTZcdTgxRUFcdTUyQThcdTYzQThcdTkwMDFcbiAgICBbXG4gICAgICAndnVlcHJlc3MtcGx1Z2luLWJhaWR1LXRvbmdqaScsIC8vIFx1NzY3RVx1NUVBNlx1N0VERlx1OEJBMVxuICAgICAge1xuICAgICAgICBobTogYmFpZHVDb2RlLFxuICAgICAgfSxcbiAgICBdLFxuXG4gICAgLy8gXHU1MTY4XHU2NTg3XHU2NDFDXHU3RDIyXHUzMDAyIFx1MjZBMFx1RkUwRlx1NkNFOFx1NjEwRlx1RkYxQVx1NkI2NFx1NjNEMlx1NEVGNlx1NEYxQVx1NTcyOFx1NjI1M1x1NUYwMFx1N0Y1MVx1N0FEOVx1NjVGNlx1NTkxQVx1NTJBMFx1OEY3RFx1OTBFOFx1NTIwNmpzXHU2NTg3XHU0RUY2XHU3NTI4XHU0RThFXHU2NDFDXHU3RDIyXHVGRjBDXHU1QkZDXHU4MUY0XHU1MjFEXHU2QjIxXHU4QkJGXHU5NUVFXHU3RjUxXHU3QUQ5XHU1M0Q4XHU2MTYyXHUzMDAyXHU1OTgyXHU1NzI4XHU2MTBGXHU1MjFEXHU2QjIxXHU4QkJGXHU5NUVFXHU5MDFGXHU1RUE2XHU3Njg0XHU4QkREXHU1M0VGXHU0RUU1XHU0RTBEXHU0RjdGXHU3NTI4XHU2QjY0XHU2M0QyXHU0RUY2XHVGRjAxXHVGRjA4XHU2M0E4XHU4MzUwXHVGRjFBdnVlcHJlc3MtcGx1Z2luLXRoaXJkcGFydHktc2VhcmNoXHVGRjA5XG4gICAgLy8gJ2Z1bGx0ZXh0LXNlYXJjaCcsXG5cbiAgICAvLyBcdTUzRUZcdTRFRTVcdTZERkJcdTUyQTBcdTdCMkNcdTRFMDlcdTY1QjlcdTY0MUNcdTdEMjJcdTk0RkVcdTYzQTVcdTc2ODRcdTY0MUNcdTdEMjJcdTY4NDZcdUZGMDhcdTdFRTdcdTYyN0ZcdTUzOUZcdTVCOThcdTY1QjlcdTY0MUNcdTdEMjJcdTY4NDZcdTc2ODRcdTkxNERcdTdGNkVcdTUzQzJcdTY1NzBcdUZGMDlcbiAgICBbXG4gICAgICAndGhpcmRwYXJ0eS1zZWFyY2gnLFxuICAgICAge1xuICAgICAgICB0aGlyZHBhcnR5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdcdTU3MjhNRE5cdTRFMkRcdTY0MUNcdTdEMjInLFxuICAgICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9zZWFyY2g/cT0nLCAvLyBcdTY0MUNcdTdEMjJcdTk0RkVcdTYzQTVcdTc2ODRcdTUyNERcdTk3NjJcdTkwRThcdTUyMDZcbiAgICAgICAgICAgIGJlaGluZFVybDogJycsIC8vIFx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NTQwRVx1OTc2Mlx1OTBFOFx1NTIwNlx1RkYwQ1x1NTNFRlx1OTAwOVx1RkYwQ1x1OUVEOFx1OEJBNCAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdcdTU3MjhSdW5vb2JcdTRFMkRcdTY0MUNcdTdEMjInLFxuICAgICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL3d3dy5ydW5vb2IuY29tLz9zPScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1x1NTcyOFZ1ZSBBUElcdTRFMkRcdTY0MUNcdTdEMjInLFxuICAgICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL2NuLnZ1ZWpzLm9yZy92Mi9hcGkvIycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1x1NTcyOEJpbmdcdTRFMkRcdTY0MUNcdTdEMjInLFxuICAgICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1x1OTAxQVx1OEZDN1x1NzY3RVx1NUVBNlx1NjQxQ1x1N0QyMlx1NjcyQ1x1N0FEOVx1NzY4NCcsXG4gICAgICAgICAgICBmcm9udFVybDogYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPXNpdGUlM0Eke0RPTUFJTl9OQU1FfSUyMGAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICBdLFxuXG4gICAgW1xuICAgICAgJ29uZS1jbGljay1jb3B5JywgLy8gXHU0RUUzXHU3ODAxXHU1NzU3XHU1OTBEXHU1MjM2XHU2MzA5XHU5NEFFXG4gICAgICB7XG4gICAgICAgIGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLCAvLyBTdHJpbmcgb3IgQXJyYXlcbiAgICAgICAgY29weU1lc3NhZ2U6ICdcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUYnLCAvLyBkZWZhdWx0IGlzICdDb3B5IHN1Y2Nlc3NmdWxseSBhbmQgdGhlbiBwYXN0ZSBpdCBmb3IgdXNlLidcbiAgICAgICAgZHVyYXRpb246IDEwMDAsIC8vIHByb21wdCBtZXNzYWdlIGRpc3BsYXkgdGltZS5cbiAgICAgICAgc2hvd0luTW9iaWxlOiBmYWxzZSwgLy8gd2hldGhlciB0byBkaXNwbGF5IG9uIHRoZSBtb2JpbGUgc2lkZSwgZGVmYXVsdDogZmFsc2UuXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAnZGVtby1ibG9jaycsIC8vIGRlbW9cdTZGMTRcdTc5M0FcdTZBMjFcdTU3NTcgaHR0cHM6Ly9naXRodWIuY29tL3hpZ3VheGlndWEvdnVlcHJlc3MtcGx1Z2luLWRlbW8tYmxvY2tcbiAgICAgIHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAvLyBqc0xpYjogWydodHRwOi8veHh4J10sIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qihqc2ZpZGRsZSwgY29kZXBlbilcdTRFMkRcdTc2ODRqc1x1NEY5RFx1OEQ1NlxuICAgICAgICAgIC8vIGNzc0xpYjogWydodHRwOi8veHh4J10sIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qlx1NEUyRFx1NzY4NGNzc1x1NEY5RFx1OEQ1NlxuICAgICAgICAgIC8vIHZ1ZTogJ2h0dHBzOi8vanNkLmNkbi56emtvLmNuL25wbS92dWUvZGlzdC92dWUubWluLmpzJywgLy8gXHU1NzI4XHU3RUJGXHU3OTNBXHU0RjhCXHU0RTJEXHU3Njg0dnVlXHU0RjlEXHU4RDU2XG4gICAgICAgICAganNmaWRkbGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0EganNmaWRkbGUgXHU5NEZFXHU2M0E1XG4gICAgICAgICAgY29kZXBlbjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBIGNvZGVwZW4gXHU5NEZFXHU2M0E1XG4gICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NEUzQVx1NkEyQVx1NTQxMVx1NjgzN1x1NUYwRlxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICd2dWVwcmVzcy1wbHVnaW4tem9vbWluZycsIC8vIFx1NjUzRVx1NTkyN1x1NTZGRVx1NzI0N1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJy50aGVtZS12ZG9pbmctY29udGVudCBpbWc6bm90KC5uby16b29tKScsIC8vIFx1NjM5Mlx1OTY2NGNsYXNzXHU2NjJGbm8tem9vbVx1NzY4NFx1NTZGRVx1NzI0N1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMC42KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgJ3Z1ZXByZXNzLXBsdWdpbi1jb21tZW50JywgLy8gXHU4QkM0XHU4QkJBXG4gICAgICB7XG4gICAgICAgIGNob29zZW46ICdnaXRhbGsnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgY2xpZW50SUQ6ICczZmQ2YTU5NzM2ZjczZDRlMmYxZScsXG4gICAgICAgICAgY2xpZW50U2VjcmV0OiAnZGFlOTBmZGIyYTU0YzlmOTFjOGVjYzFlMWY5ZThkY2E5ZTU5MzA5YicsXG4gICAgICAgICAgcmVwbzogJ3dpbGxwYXN0LmdpdGh1Yi5pbycsIC8vIEdpdEh1YiBcdTRFRDNcdTVFOTNcbiAgICAgICAgICBvd25lcjogJ3dpbGxwYXN0JywgLy8gR2l0SHViXHU0RUQzXHU1RTkzXHU2MjQwXHU2NzA5XHU4MDA1XG4gICAgICAgICAgYWRtaW46IFsnd2lsbHBhc3QnXSwgLy8gXHU1QkY5XHU0RUQzXHU1RTkzXHU2NzA5XHU1MTk5XHU2NzQzXHU5NjUwXHU3Njg0XHU0RUJBXG4gICAgICAgICAgLy8gZGlzdHJhY3Rpb25GcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICBwYWdlckRpcmVjdGlvbjogJ2xhc3QnLCAvLyAnZmlyc3QnXHU2QjYzXHU1RThGIHwgJ2xhc3QnXHU1MDEyXHU1RThGXG4gICAgICAgICAgaWQ6ICc8JS0gKGZyb250bWF0dGVyLnBlcm1hbGluayB8fCBmcm9udG1hdHRlci50by5wYXRoKS5zbGljZSgtMTYpICU+JywgLy8gIFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTUyRlx1NEUwMFx1NjgwN1x1OEJDNixcdTk1N0ZcdTVFQTZcdTRFMERcdTgwRkRcdThEODVcdThGQzc1MFxuICAgICAgICAgIHRpdGxlOiAnXHUzMDBDXHU4QkM0XHU4QkJBXHUzMDBEPCUtIGZyb250bWF0dGVyLnRpdGxlICU+JywgLy8gR2l0SHViIGlzc3VlIFx1NzY4NFx1NjgwN1x1OTg5OFxuICAgICAgICAgIGxhYmVsczogWydnaXRhbGsnXSwgLy8gR2l0SHViIGlzc3VlIFx1NzY4NFx1NjgwN1x1N0I3RVxuICAgICAgICAgIGJvZHk6XG4gICAgICAgICAgICAnXHU5ODc1XHU5NzYyXHVGRjFBPCUtIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAoZnJvbnRtYXR0ZXIudG8ucGF0aCB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpICU+JywgLy8gR2l0SHViIGlzc3VlIFx1NzY4NFx1NTE4NVx1NUJCOVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdAdnVlcHJlc3MvbGFzdC11cGRhdGVkJywgLy8gXCJcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcIlx1NjVGNlx1OTVGNFx1NjgzQ1x1NUYwRlxuICAgICAge1xuICAgICAgICB0cmFuc2Zvcm1lcjogKHRpbWVzdGFtcCwgbGFuZykgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXlqcyh0aW1lc3RhbXApLmZvcm1hdCgnWVlZWS9NTS9ERCwgSEg6bW06c3MnKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICBcdHtcbiAgICAgICAgXHRuYW1lOiAnY3VzdG9tLXBsdWdpbnMnLFxuICAgICAgICBcdGdsb2JhbFVJQ29tcG9uZW50czogW1wiUGFnZUluZm9cIl0gLy8gMi54IFx1NzI0OFx1NjcyQyBnbG9iYWxVSUNvbXBvbmVudHMgXHU2NTM5XHU1NDBEXHU0RTNBIGNsaWVudEFwcFJvb3RDb21wb25lbnRGaWxlc1xuICAgIFx0fVxuICAgIF0sXG4gIF0sIFxuXG4gIG1hcmtkb3duOiB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgZXh0cmFjdEhlYWRlcnM6IFsnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSwgLy8gXHU2M0QwXHU1M0Q2XHU2ODA3XHU5ODk4XHU1MjMwXHU0RkE3XHU4RkI5XHU2ODBGXHU3Njg0XHU3RUE3XHU1MjJCXHVGRjBDXHU5RUQ4XHU4QkE0WydoMicsICdoMyddXG4gICAgZXh0ZW5kTWFya2Rvd246IChtZCkgPT4ge1xuICAgICAgbWQudXNlKE1hcmtkb3duSXRLYXRleCk7XG4gICAgICAvLyBtZC5saW5raWZ5LnNldCh7IGZ1enp5RW1haWw6IGZhbHNlIH0pOyAvLyBtZFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1OTRGRVx1NjNBNVx1N0Y2RVx1NEUzQWZhbHNlXG4gICAgfSxcblxuICB9LFxuXG4gIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTNEOFx1NTMxNlx1NUU3Nlx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVxuICBleHRyYVdhdGNoRmlsZXM6IFtcbiAgICAnLnZ1ZXByZXNzL2NvbmZpZy50cycsXG4gICAgJy52dWVwcmVzcy9jb25maWcvaHRtbE1vZHVsZXMudHMnLFxuICBdXG59KVxuIiwgImV4cG9ydCBkZWZhdWx0ICc1MDNmMDk4ZTdlNWIzYTViNWQ4YzVmYzI5MzhhZjAwMidcbiIsICJpbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlcydcblxuLyoqIFx1NjNEMlx1NTE2NVx1ODFFQVx1NUI5QVx1NEU0OWh0bWxcdTZBMjFcdTU3NTcgKFx1NTNFRlx1NzUyOFx1NEU4RVx1NjNEMlx1NTE2NVx1NUU3Rlx1NTQ0QVx1NkEyMVx1NTc1N1x1N0I0OSlcbiAqIHtcbiAqICAgaG9tZVNpZGViYXJCOiBodG1sU3RyaW5nLCBcdTk5OTZcdTk4NzVcdTRGQTdcdThGQjlcdTY4MEZcdTVFOTVcdTkwRThcbiAqXG4gKiAgIHNpZGViYXJUOiBodG1sU3RyaW5nLCBcdTYyNDBcdTY3MDlcdTVERTZcdTRGQTdcdThGQjlcdTY4MEZcdTk4NzZcdTkwRThcbiAqICAgc2lkZWJhckI6IGh0bWxTdHJpbmcsIFx1NjI0MFx1NjcwOVx1NURFNlx1NEZBN1x1OEZCOVx1NjgwRlx1NUU5NVx1OTBFOFxuICpcbiAqICAgcGFnZVQ6IGh0bWxTdHJpbmcsIFx1OTg3NVx1OTc2Mlx1OTg3Nlx1OTBFOFxuICogICBwYWdlQjogaHRtbFN0cmluZywgXHU5ODc1XHU5NzYyXHU1RTk1XHU5MEU4XG4gKiAgIHBhZ2VUc2hvd01vZGU6IHN0cmluZywgXHU5ODc1XHU5NzYyXHU5ODc2XHU5MEU4LVx1NjYzRVx1NzkzQVx1NjVCOVx1NUYwRlx1RkYxQVx1NjcyQVx1OTE0RFx1N0Y2RVx1OUVEOFx1OEJBNFx1NjI0MFx1NjcwOVx1OTg3NVx1OTc2Mlx1RkYxQidhcnRpY2xlJyA9PiBcdTRFQzVcdTY1ODdcdTdBRTBcdTk4NzVcdTI0NjBcdUZGMUIgJ2N1c3RvbScgPT4gXHU0RUM1XHU4MUVBXHU1QjlBXHU0RTQ5XHU5ODc1XHUyNDYwXG4gKiAgIHBhZ2VCc2hvd01vZGU6IHN0cmluZywgXHU5ODc1XHU5NzYyXHU1RTk1XHU5MEU4LVx1NjYzRVx1NzkzQVx1NjVCOVx1NUYwRlx1RkYxQVx1NjcyQVx1OTE0RFx1N0Y2RVx1OUVEOFx1OEJBNFx1NjI0MFx1NjcwOVx1OTg3NVx1OTc2Mlx1RkYxQidhcnRpY2xlJyA9PiBcdTRFQzVcdTY1ODdcdTdBRTBcdTk4NzVcdTI0NjBcdUZGMUIgJ2N1c3RvbScgPT4gXHU0RUM1XHU4MUVBXHU1QjlBXHU0RTQ5XHU5ODc1XHUyNDYwXG4gKlxuICogICB3aW5kb3dMQjogaHRtbFN0cmluZywgXHU1MTY4XHU1QzQwXHU3QTk3XHU1M0UzXHU1REU2XHU0RTBCXHU4OUQyXHUyNDYxXG4gKiAgIHdpbmRvd1JCOiBodG1sU3RyaW5nLCBcdTUxNjhcdTVDNDBcdTdBOTdcdTUzRTNcdTUzRjNcdTRFMEJcdTg5RDJcdTI0NjFcbiAqIH1cbiAqXG4gKiBcdTI0NjBcdTZDRThcdUZGMUFcdTU3MjgubWRcdTY1ODdcdTRFRjZmcm9udCBtYXR0ZXJcdTkxNERcdTdGNkVgYXJ0aWNsZTogZmFsc2VgXHU3Njg0XHU5ODc1XHU5NzYyXHU2NjJGXHU4MUVBXHU1QjlBXHU0RTQ5XHU5ODc1XHVGRjBDXHU2NzJBXHU5MTREXHU3RjZFXHU3Njg0XHU5RUQ4XHU4QkE0XHU2NjJGXHU2NTg3XHU3QUUwXHU5ODc1XHVGRjA4XHU5OTk2XHU5ODc1XHU5NjY0XHU1OTE2XHVGRjA5XHUzMDAyXG4gKiBcdTI0NjFcdTZDRThcdUZGMUF3aW5kb3dMQiBcdTU0OEMgd2luZG93UkJcdUZGMUExLlx1NUM1NVx1NzkzQVx1NTMzQVx1NTc1N1x1NjcwMFx1NTkyN1x1NUJCRFx1OUFEODIwMHB4KjQwMHB4XHUzMDAyMi5cdThCRjdcdTdFRDlcdTgxRUFcdTVCOUFcdTRFNDlcdTUxNDNcdTdEMjBcdTVCOUFcdTRFMDBcdTRFMkFcdTRFMERcdThEODVcdThGQzcyMDBweCo0MDBweFx1NzY4NFx1NUJCRFx1OUFEOFx1MzAwMjMuXHU1NzI4XHU1QzRGXHU1RTU1XHU1QkJEXHU1RUE2XHU1QzBGXHU0RThFOTYwcHhcdTY1RjZcdTY1RTBcdThCQkFcdTU5ODJcdTRGNTVcdTkwRkRcdTRFMERcdTRGMUFcdTY2M0VcdTc5M0FcdTMwMDJcbiAqL1xuY29uc3QgaHRtbE1vZHVsZTogVmRvaW5nVGhlbWVDb25maWdbJ2h0bWxNb2R1bGVzJ10gPSB7XG4gIGhvbWVTaWRlYmFyQjpcbiAgICBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDAuOTVyZW1cIj5cbiAgICA8cCBzdHlsZT1cIlxuICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIFwiPlx1NTE2Q1x1NEYxN1x1NTNGNzwvcD5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vb3Blbi53ZWl4aW4ucXEuY29tL3FyL2NvZGU/dXNlcm5hbWU9Z2hfMjhmZGYyMGRiNWQ2XCIgIHN0eWxlPVwid2lkdGg6MTAwJTtcIiAvPlxuICAgIFx1NTE3M1x1NkNFOFx1NTE2Q1x1NEYxN1x1NTNGN1xuICAgIDwvcD5cbiAgICA8L2Rpdj5gLFxuICAgIC8vIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMC45NXJlbTsgZm9udC1zaXplOiAwLjg3NXJlbTtcIj5cbiAgICAvLyAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjODg4OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogMCAwIDEwcHggMDtcIj5cbiAgICAvLyAgICAgPGkgY2xhc3M9XCJpY29uZm9udCBpY29uLWF3YXJkXCIgc3R5bGU9XCJmb250LXNpemU6IDAuODc1cmVtOyBmb250LXdlaWdodDogOTAwO3dpZHRoOiAxLjI1ZW07XCI+PC9pPlxuICAgIC8vICAgICA8c3Bhbj5cdTdBRDlcdTcwQjlcdTRGRTFcdTYwNkY8L3NwYW4+XG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyAgIDxkaXYgY2xhc3M9XCJ3ZWJpbmZvLWl0ZW1cIiBzdHlsZT1cInBhZGRpbmc6IDhweCAwIDA7IG1hcmdpbjogMDtcIj5cbiAgICAvLyAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5cbiAgICAvLyAgICAgICBcdTY1ODdcdTdBRTBcdTY1NzBcdTc2RUVcdUZGMUFcbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZsb2F0OiByaWdodDtcIj5cbiAgICAvLyAgICAgICAxMyBcdTdCQzdcbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICA8L2Rpdj5cblxuICAgIC8vICAgPGRpdiBjbGFzcz1cIndlYmluZm8taXRlbVwiIHN0eWxlPVwicGFkZGluZzogOHB4IDAgMDsgbWFyZ2luOiAwO1wiPlxuICAgIC8vICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgIC8vICAgICAgIFx1NURGMlx1OEZEMFx1ODg0Q1x1NjVGNlx1OTVGNFx1RkYxQVxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgZmxvYXQ6IHJpZ2h0O1wiPlxuICAgIC8vICAgICAgIDE4OSBcdTU5MjlcbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICA8L2Rpdj5cblxuICAgIC8vICAgPGRpdiBjbGFzcz1cIndlYmluZm8taXRlbVwiIHN0eWxlPVwicGFkZGluZzogOHB4IDAgMDsgbWFyZ2luOiAwO1wiPlxuICAgIC8vICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgIC8vICAgICAgIFx1NjcyQ1x1N0FEOVx1NjAzQlx1NUI1N1x1NjU3MFx1RkYxQVxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgZmxvYXQ6IHJpZ2h0O1wiPlxuICAgIC8vICAgICAgIDQ1LjVrIFx1NUI1N1xuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgIDwvZGl2PlxuXG4gICAgLy8gICA8ZGl2IGNsYXNzPVwid2ViaW5mby1pdGVtXCIgc3R5bGU9XCJwYWRkaW5nOiA4cHggMCAwOyBtYXJnaW46IDA7XCI+XG4gICAgLy8gICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgLy8gICAgICAgXHU2NzJDXHU3QUQ5XHU4OEFCXHU4QkJGXHU5NUVFXHU0RTg2XHVGRjFBXG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHQ7XCI+XG4gICAgLy8gICAgICAgMTIwMiBcdTZCMjFcbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICA8L2Rpdj5cblxuICAgIC8vICAgPGRpdiBjbGFzcz1cIndlYmluZm8taXRlbVwiIHN0eWxlPVwicGFkZGluZzogOHB4IDAgMDsgbWFyZ2luOiAwO1wiPlxuICAgIC8vICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgIC8vICAgICAgIFx1NjcwMFx1NTQwRVx1NkQzQlx1NTJBOFx1NjVGNlx1OTVGNFx1RkYxQVxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgZmxvYXQ6IHJpZ2h0O1wiPlxuICAgIC8vICAgICAgIDIgXHU1OTI5XHU1MjREXG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gPC9kaXY+YCxcbiAgLy8gYDwhLS0gXHU3RUI1XHU1NDExXHU4MUVBXHU5MDAyXHU1RTk0IC0tPlxuICAvLyA8aW5zIGNsYXNzPVwiYWRzYnlnb29nbGVcIlxuICAvLyAgICAgc3R5bGU9XCJkaXNwbGF5OmJsb2NrO3BhZGRpbmc6IDAuOTVyZW07XCJcbiAgLy8gICAgIGRhdGEtYWQtY2xpZW50PVwiY2EtcHViLTc4MjgzMzM3MjU5OTM1NTRcIlxuICAvLyAgICAgZGF0YS1hZC1zbG90PVwiNzgwMjY1NDU4MlwiXG4gIC8vICAgICBkYXRhLWFkLWZvcm1hdD1cImF1dG9cIlxuICAvLyAgICAgZGF0YS1mdWxsLXdpZHRoLXJlc3BvbnNpdmU9XCJ0cnVlXCI+PC9pbnM+XG4gIC8vIDxzY3JpcHQ+XG4gIC8vICAgICAoYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pO1xuICAvLyA8L3NjcmlwdD5gLFxuICAvLyBzaWRlYmFyVDpcbiAgLy8gICBgPCEtLSAgXHU1NkZBXHU1QjlBMTAwJSAqIDE1MHB4XHU1M0VGXHU2NjNFXHU3OTNBXHVGRjBDbWF4LWhlaWdodDoxNTBweCBcdTY3MkFcdTg5QzFcdTY2M0VcdTc5M0EtLT5cbiAgLy8gICA8aW5zIGNsYXNzPVwiYWRzYnlnb29nbGVcIlxuICAvLyAgICAgICAgIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjE1MHB4XCJcbiAgLy8gICAgICAgICBkYXRhLWFkLWNsaWVudD1cImNhLXB1Yi03ODI4MzMzNzI1OTkzNTU0XCJcbiAgLy8gICAgICAgICBkYXRhLWFkLXNsb3Q9XCI2NjI1MzA0Mjg0XCI+PC9pbnM+XG4gIC8vICAgICA8c2NyaXB0PlxuICAvLyAgICAgICAgIChhZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSk7XG4gIC8vICAgICA8L3NjcmlwdD5gLFxuICAvLyBzaWRlYmFyQjpcbiAgLy8gICBgPCEtLSBcdTZCNjNcdTY1QjlcdTVGNjIgLS0+XG4gIC8vICAgICA8aW5zIGNsYXNzPVwiYWRzYnlnb29nbGVcIlxuICAvLyAgICAgICAgIHN0eWxlPVwiZGlzcGxheTpibG9ja1wiXG4gIC8vICAgICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNzgyODMzMzcyNTk5MzU1NFwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1zbG90PVwiMzUwODc3MzA4MlwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1mb3JtYXQ9XCJhdXRvXCJcbiAgLy8gICAgICAgICBkYXRhLWZ1bGwtd2lkdGgtcmVzcG9uc2l2ZT1cInRydWVcIj48L2lucz5cbiAgLy8gICAgIDxzY3JpcHQ+XG4gIC8vICAgICAgICAgKGFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdKS5wdXNoKHt9KTtcbiAgLy8gICAgIDwvc2NyaXB0PmAsXG4gIC8vIHBhZ2VUOlxuICAvLyAgIGA8IS0tIFx1NTZGQVx1NUI5QTEwMCUgKiA5MHB4XHU1M0VGXHU2NjNFXHU3OTNBXHVGRjBDbWF4LWhlaWdodDo5MHB4XHU2NzJBXHU4OUMxXHU2NjNFXHU3OTNBLS0+XG4gIC8vICAgIDxpbnMgY2xhc3M9XCJhZHNieWdvb2dsZVwiXG4gIC8vICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO21heC1oZWlnaHQ6OTBweFwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNzgyODMzMzcyNTk5MzU1NFwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1zbG90PVwiNjYyNTMwNDI4NFwiPjwvaW5zPlxuICAvLyAgICAgPHNjcmlwdD5cbiAgLy8gICAgICAgICAoYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pO1xuICAvLyAgICAgPC9zY3JpcHQ+YCxcbiAgLy8gcGFnZVRzaG93TW9kZTogJ2FydGljbGUnLFxuICAvLyBwYWdlQjpcbiAgLy8gICBgPCEtLSBcdTZBMkFcdTU0MTFcdTgxRUFcdTkwMDJcdTVFOTQgLS0+XG4gIC8vICAgICA8aW5zIGNsYXNzPVwiYWRzYnlnb29nbGVcIlxuICAvLyAgICAgICAgIHN0eWxlPVwiZGlzcGxheTpibG9ja1wiXG4gIC8vICAgICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNzgyODMzMzcyNTk5MzU1NFwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1zbG90PVwiNjYyMDI0NTQ4OVwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1mb3JtYXQ9XCJhdXRvXCJcbiAgLy8gICAgICAgICBkYXRhLWZ1bGwtd2lkdGgtcmVzcG9uc2l2ZT1cInRydWVcIj48L2lucz5cbiAgLy8gICAgIDxzY3JpcHQ+XG4gIC8vICAgICAgICAgKGFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdKS5wdXNoKHt9KTtcbiAgLy8gICAgIDwvc2NyaXB0PmAsXG4gIC8vIHBhZ2VCc2hvd01vZGU6ICdhcnRpY2xlJyxcbiAgLy8gd2luZG93TEI6IC8vIFx1NEYxQVx1OTA2RVx1NjMyMVx1OTBFOFx1NTIwNlx1NEZBN1x1OEZCOVx1NjgwRlxuICAvLyAgIGA8IS0tIFx1NTZGQVx1NUI5QTIwMCoyMDBweCAtLT5cbiAgLy8gICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIj48L3NjcmlwdD5cbiAgLy8gICAgIDxpbnMgY2xhc3M9XCJhZHNieWdvb2dsZVwiXG4gIC8vICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDBweDtoZWlnaHQ6MjAwcHhcIlxuICAvLyAgICAgICAgIGRhdGEtYWQtY2xpZW50PVwiY2EtcHViLTc4MjgzMzM3MjU5OTM1NTRcIlxuICAvLyAgICAgICAgIGRhdGEtYWQtc2xvdD1cIjY2MjUzMDQyODRcIj48L2lucz5cbiAgLy8gICAgIDxzY3JpcHQ+XG4gIC8vICAgICAgICAgKGFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdKS5wdXNoKHt9KTtcbiAgLy8gICAgIDwvc2NyaXB0PmAsXG4gIC8vIHdpbmRvd1JCOlxuICAvLyAgIGA8IS0tIFx1NTZGQVx1NUI5QTE2MCoxNjBweCAtLT5cbiAgLy8gICAgIDxpbnMgY2xhc3M9XCJhZHNieWdvb2dsZVwiXG4gIC8vICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6MTYwcHg7bWF4LWhlaWdodDoxNjBweFwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNzgyODMzMzcyNTk5MzU1NFwiXG4gIC8vICAgICAgICAgZGF0YS1hZC1zbG90PVwiODM3NzM2OTY1OFwiPjwvaW5zPlxuICAvLyAgICAgPHNjcmlwdD5cbiAgLy8gICAgICAgICAoYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pO1xuICAvLyAgICAgPC9zY3JpcHQ+XG4gIC8vICAgICBgLFxufVxuXG5cbi8vIGNvbnN0IGh0bWxNb2R1bGUgPSB7XG4vLyAgIGhvbWVTaWRlYmFyQjogYDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDBweDtjb2xvcjojZmZmO2JhY2tncm91bmQ6ICNlZWU7XCI+XHU4MUVBXHU1QjlBXHU0RTQ5XHU2QTIxXHU1NzU3XHU2RDRCXHU4QkQ1PC9kaXY+YCxcbi8vICAgc2lkZWJhclQ6IGA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6MTAwcHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiAjZWVlO1wiPlx1ODFFQVx1NUI5QVx1NEU0OVx1NkEyMVx1NTc1N1x1NkQ0Qlx1OEJENTwvZGl2PmAsXG4vLyAgIHNpZGViYXJCOiBgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjEwMHB4O2NvbG9yOiNmZmY7YmFja2dyb3VuZDogI2VlZTtcIj5cdTgxRUFcdTVCOUFcdTRFNDlcdTZBMjFcdTU3NTdcdTZENEJcdThCRDU8L2Rpdj5gLFxuLy8gICBwYWdlVDogYDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDBweDtjb2xvcjojZmZmO2JhY2tncm91bmQ6ICNlZWU7XCI+XHU4MUVBXHU1QjlBXHU0RTQ5XHU2QTIxXHU1NzU3XHU2RDRCXHU4QkQ1PC9kaXY+YCxcbi8vICAgcGFnZUI6IGA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6MTAwcHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiAjZWVlO1wiPlx1ODFFQVx1NUI5QVx1NEU0OVx1NkEyMVx1NTc1N1x1NkQ0Qlx1OEJENTwvZGl2PmAsXG4vLyAgIHdpbmRvd0xCOiBgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjEwMHB4O2NvbG9yOiNmZmY7YmFja2dyb3VuZDogI2VlZTtcIj5cdTgxRUFcdTVCOUFcdTRFNDlcdTZBMjFcdTU3NTdcdTZENEJcdThCRDU8L2Rpdj5gLFxuLy8gICB3aW5kb3dSQjogYDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDBweDtjb2xvcjojZmZmO2JhY2tncm91bmQ6ICNlZWU7XCI+XHU4MUVBXHU1QjlBXHU0RTQ5XHU2QTIxXHU1NzU3XHU2RDRCXHU4QkQ1PC9kaXY+YCxcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBodG1sTW9kdWxlXG4iLCAiaW1wb3J0IGZzIGZyb20gJ2ZzJzsgLy8gXHU2NTg3XHU0RUY2XHU2QTIxXHU1NzU3XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJzsgLy8gXHU4REVGXHU1Rjg0XHU2QTIxXHU1NzU3XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJzsgLy8gRnJvbnRNYXR0ZXJcdTg5RTNcdTY3OTBcdTU2NjggaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvZ3JheS1tYXR0ZXJcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaycgLy8gXHU1NDdEXHU0RUU0XHU4ODRDXHU2MjUzXHU1MzcwXHU3RjhFXHU1MzE2XG5jb25zdCBsb2cgPSBjb25zb2xlLmxvZ1xuY29uc3QgZG9jc1Jvb3QgPSBwYXRoLmpvaW4oXCIvVXNlcnMvd29yay9naXQvd2lsbHBhc3QvbGlvbi93aWxscGFzdC5naXRodWIuaW8vZG9jcy8udnVlcHJlc3Mvd2ViU2l0ZUluZm9cIiwgJy4uJywgJy4uJywgJy4uJywgJ2RvY3MnKTsgLy8gZG9jc1x1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NjcyQ1x1N0FEOVx1NzY4NFx1NjU4N1x1N0FFMFx1NjU3MFx1NjM2RVxuICogXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU3Njg0IG1kIFx1NjU4N1x1Njg2M1x1RkYwQ1x1NTNFRlx1NEVFNVx1NjM5Mlx1OTY2NFx1NjMwN1x1NUI5QVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NFx1NjU4N1x1Njg2M1xuICovXG5mdW5jdGlvbiByZWFkRmlsZUxpc3QoZXhjbHVkZUZpbGVzOiBBcnJheTxzdHJpbmc+ID0gWycnXSwgZGlyOiBzdHJpbmcgPSBkb2NzUm9vdCwgZmlsZXNMaXN0OiBBcnJheTxPYmplY3Q+ID0gW10pIHtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhkaXIpO1xuICBmaWxlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXIsIGl0ZW0pO1xuICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XG4gICAgaWYgKCEoZXhjbHVkZUZpbGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBsb2coY2hhbGsueWVsbG93KGBlcnJvcjogXHU0RjIwXHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHU0RTBEXHU2NjJGXHU0RTAwXHU0RTJBXHU2NTcwXHU3RUM0XHUzMDAyYCkpXG4gICAgfVxuICAgIGV4Y2x1ZGVGaWxlcy5mb3JFYWNoKChleGNsdWRlRmlsZSkgPT4ge1xuICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSAmJiBpdGVtICE9PSAnLnZ1ZXByZXNzJyAmJiBpdGVtICE9PSAnQHBhZ2VzJyAmJiBpdGVtICE9PSBleGNsdWRlRmlsZSkge1xuICAgICAgICByZWFkRmlsZUxpc3QoZXhjbHVkZUZpbGVzLCBwYXRoLmpvaW4oZGlyLCBpdGVtKSwgZmlsZXNMaXN0KTsgIC8vXHU5MDEyXHU1RjUyXHU4QkZCXHU1M0Q2XHU2NTg3XHU0RUY2XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0aC5iYXNlbmFtZShkaXIpICE9PSAnZG9jcycpIHsgLy8gXHU4RkM3XHU2RUU0IGRvY3NcdTc2RUVcdTVGNTVcdTdFQTdcdTRFMEJcdTc2ODRcdTY1ODdcdTRFRjZcblxuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lQXJyID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCkuc3BsaXQoJy4nKVxuICAgICAgICAgIGxldCBuYW1lID0gbnVsbCwgdHlwZSA9IG51bGw7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lQXJyLmxlbmd0aCA9PT0gMikgeyAvLyBcdTZDQTFcdTY3MDlcdTVFOEZcdTUzRjdcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgICAgICAgIG5hbWUgPSBmaWxlTmFtZUFyclswXVxuICAgICAgICAgICAgdHlwZSA9IGZpbGVOYW1lQXJyWzFdXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWxlTmFtZUFyci5sZW5ndGggPT09IDMpIHsgLy8gXHU2NzA5XHU1RThGXHU1M0Y3XHU3Njg0XHU2NTg3XHU0RUY2XG4gICAgICAgICAgICBuYW1lID0gZmlsZU5hbWVBcnJbMV1cbiAgICAgICAgICAgIHR5cGUgPSBmaWxlTmFtZUFyclsyXVxuICAgICAgICAgIH0gZWxzZSB7IC8vIFx1OEQ4NVx1OEZDN1x1NEUyNFx1NEUyQVx1MjAxOC5cdTIwMTlcdTc2ODRcbiAgICAgICAgICAgIGxvZyhjaGFsay55ZWxsb3coYHdhcm5pbmc6IFx1OEJFNVx1NjU4N1x1NEVGNiBcIiR7ZmlsZVBhdGh9XCIgXHU2Q0ExXHU2NzA5XHU2MzA5XHU3MTY3XHU3RUE2XHU1QjlBXHU1NDdEXHU1NDBEXHVGRjBDXHU1QzA2XHU1RkZEXHU3NTY1XHU3NTFGXHU2MjEwXHU3NkY4XHU1RTk0XHU2NTcwXHU2MzZFXHUzMDAyYCkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdtZCcpIHsgLy8gXHU4RkM3XHU2RUU0XHU5NzVFIG1kIFx1NjU4N1x1NEVGNlxuICAgICAgICAgICAgZmlsZXNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBmaWxlUGF0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZXNMaXN0O1xufVxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTdBRDlcdTc2ODRcdTY1ODdcdTdBRTBcdTYwM0JcdTVCNTdcdTY1NzBcbiAqIFx1NTNFRlx1NEVFNVx1NjM5Mlx1OTY2NFx1NjdEMFx1NEUyQVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NCBtZCBcdTY1ODdcdTY4NjNcdTVCNTdcdTY1NzBcbiAqL1xuZnVuY3Rpb24gcmVhZFRvdGFsRmlsZVdvcmRzKGV4Y2x1ZGVGaWxlcyA9IFsnJ10pIHtcbiAgY29uc3QgZmlsZXNMaXN0ID0gcmVhZEZpbGVMaXN0KGV4Y2x1ZGVGaWxlcyk7XG4gIGxldCB3b3JkQ291bnQgPSAwO1xuICBmaWxlc0xpc3QuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoaXRlbS5maWxlUGF0aCk7XG4gICAgbGV0IGxlbiA9IGNvdW50ZXIoY29udGVudCk7XG4gICAgd29yZENvdW50ICs9IGxlblswXSArIGxlblsxXTtcbiAgfSk7XG4gIGlmICh3b3JkQ291bnQgPCAxMDAwKSB7XG4gICAgcmV0dXJuIHdvcmRDb3VudDtcbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZCh3b3JkQ291bnQgLyAxMDApIC8gMTAgKyAnayc7XG59XG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NkJDRlx1NEUwMFx1NEUyQVx1NjU4N1x1N0FFMFx1NzY4NFx1NUI1N1x1NjU3MFxuICogXHU1M0VGXHU0RUU1XHU2MzkyXHU5NjY0XHU2N0QwXHU0RTJBXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0IG1kIFx1NjU4N1x1Njg2M1x1NUI1N1x1NjU3MFxuICovXG5mdW5jdGlvbiByZWFkRWFjaEZpbGVXb3JkcyhleGNsdWRlRmlsZXM6IEFycmF5PHN0cmluZz4gPSBbJyddLCBjbjogbnVtYmVyLCBlbjogbnVtYmVyKSB7XG4gIGNvbnN0IGZpbGVzTGlzdFdvcmRzID0gW107XG4gIGNvbnN0IGZpbGVzTGlzdCA9IHJlYWRGaWxlTGlzdChleGNsdWRlRmlsZXMpO1xuICBmaWxlc0xpc3QuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoaXRlbS5maWxlUGF0aCk7XG4gICAgbGV0IGxlbiA9IGNvdW50ZXIoY29udGVudCk7XG4gICAgLy8gXHU4QkExXHU3Qjk3XHU5ODg0XHU4QkExXHU3Njg0XHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XG4gICAgbGV0IHJlYWRpbmdUaW1lID0gcmVhZFRpbWUobGVuLCBjbiwgZW4pO1xuICAgIGxldCB3b3Jkc0NvdW50OiBhbnkgPSAwO1xuICAgIHdvcmRzQ291bnQgPSBsZW5bMF0gKyBsZW5bMV07XG4gICAgaWYgKHdvcmRzQ291bnQgPj0gMTAwMCkge1xuICAgICAgd29yZHNDb3VudCA9IE1hdGgucm91bmQod29yZHNDb3VudCAvIDEwMCkgLyAxMCArICdrJztcbiAgICB9XG4gICAgLy8gZmlsZU1hdHRlck9iaiA9PiB7Y29udGVudDonXHU1MjU0XHU5NjY0ZnJvbnRtYXR0ZXJcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcdTVCNTdcdTdCMjZcdTRFMzInLCBkYXRhOns8ZnJvbnRtYXR0ZXJcdTVCRjlcdThDNjE+fSwgLi4ufVxuICAgIGNvbnN0IGZpbGVNYXR0ZXJPYmogPSBtYXR0ZXIoY29udGVudCwge30pO1xuICAgIGNvbnN0IG1hdHRlckRhdGEgPSBmaWxlTWF0dGVyT2JqLmRhdGE7XG4gICAgZmlsZXNMaXN0V29yZHMucHVzaCh7IC4uLml0ZW0sIHdvcmRzQ291bnQsIHJlYWRpbmdUaW1lLCAuLi5tYXR0ZXJEYXRhIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZpbGVzTGlzdFdvcmRzO1xufVxuXG4vKipcbiAqIFx1OEJBMVx1N0I5N1x1OTg4NFx1OEJBMVx1NzY4NFx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFxuICovXG5mdW5jdGlvbiByZWFkVGltZShsZW46IEFycmF5PG51bWJlcj4sIGNuOiBudW1iZXIgPSAzMDAsIGVuOiBudW1iZXIgPSAxNjApIHtcbiAgbGV0IHJlYWRpbmdUaW1lID0gbGVuWzBdIC8gY24gKyBsZW5bMV0gLyBlbjtcbiAgaWYgKHJlYWRpbmdUaW1lID4gNjAgJiYgcmVhZGluZ1RpbWUgPCA2MCAqIDI0KSB7ICAgLy8gXHU1OTI3XHU0RThFXHU0RTAwXHU0RTJBXHU1QzBGXHU2NUY2XHVGRjBDXHU1QzBGXHU0RThFXHU0RTAwXHU1OTI5XG4gICAgbGV0IGhvdXIgPSBNYXRoLnRydW5jKHJlYWRpbmdUaW1lIC8gNjApO1xuICAgIGxldCBtaW51dGUgPSBNYXRoLnRydW5jKHJlYWRpbmdUaW1lIC0gaG91ciAqIDYwKTtcbiAgICBpZiAobWludXRlID09PSAwKSB7XG4gICAgICByZXR1cm4gaG91ciArICdoJztcbiAgICB9XG4gICAgcmV0dXJuIGhvdXIgKyAnaCcgKyBtaW51dGUgKyAnbSc7XG4gIH0gZWxzZSBpZiAocmVhZGluZ1RpbWUgPiA2MCAqIDI0KSB7ICAgICAgLy8gXHU1OTI3XHU0RThFXHU0RTAwXHU1OTI5XG4gICAgbGV0IGRheSA9IE1hdGgudHJ1bmMocmVhZGluZ1RpbWUgLyAoNjAgKiAyNCkpO1xuICAgIGxldCBob3VyID0gTWF0aC50cnVuYygocmVhZGluZ1RpbWUgLSBkYXkgKiAyNCAqIDYwKSAvIDYwKTtcbiAgICBpZiAoaG91ciA9PT0gMCkge1xuICAgICAgcmV0dXJuIGRheSArICdkJztcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICdkJyArIGhvdXIgKyAnaCc7XG4gIH1cbiAgcmV0dXJuIHJlYWRpbmdUaW1lIDwgMSA/ICcxJyA6IE1hdGgudHJ1bmMocmVhZGluZ1RpbWUgKiAxMCkgLyAxMCArICdtJzsgICAvLyBcdTUzRDZcdTRFMDBcdTRGNERcdTVDMEZcdTY1NzBcbn1cblxuLyoqXG4gKiBcdThCRkJcdTUzRDZcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGVudChmaWxlUGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4Jyk7XG59XG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVx1NzY4NFx1NUI1N1x1NjU3MFxuICogY25cdUZGMUFcdTRFMkRcdTY1ODdcbiAqIGVuXHVGRjFBXHU0RTAwXHU2NTc0XHU1M0U1XHU4MkYxXHU2NTg3XHVGRjA4XHU2Q0ExXHU2NzA5XHU3QTdBXHU2ODNDXHU5Njk0XHU1RjAwXHU3Njg0XHU4MkYxXHU2NTg3XHU0RTNBIDEgXHU0RTJBXHVGRjA5XG4gKi9cbmZ1bmN0aW9uIGNvdW50ZXIoY29udGVudDogc3RyaW5nKSB7XG4gIGNvbnN0IGNuID0gKGNvbnRlbnQubWF0Y2goL1tcXHU0RTAwLVxcdTlGQTVdL2cpIHx8IFtdKS5sZW5ndGg7XG4gIGNvbnN0IGVuID0gKGNvbnRlbnQucmVwbGFjZSgvW1xcdTRFMDAtXFx1OUZBNV0vZywgJycpLm1hdGNoKC9bYS16QS1aMC05X1xcdTAzOTItXFx1MDNjOVxcdTA0MDAtXFx1MDRGRl0rfFtcXHU0RTAwLVxcdTlGRkZcXHUzNDAwLVxcdTRkYmZcXHVmOTAwLVxcdWZhZmZcXHUzMDQwLVxcdTMwOWZcXHVhYzAwLVxcdWQ3YWZcXHUwNDAwLVxcdTA0RkZdK3xbXFx1MDBFNFxcdTAwQzRcXHUwMEU1XFx1MDBDNVxcdTAwRjZcXHUwMEQ2XSt8XFx3Ky9nKSB8fCBbXSkubGVuZ3RoO1xuICByZXR1cm4gW2NuLCBlbl07XG59XG5cbmV4cG9ydCB7XG4gIHJlYWRGaWxlTGlzdCxcbiAgcmVhZFRvdGFsRmlsZVdvcmRzLFxuICByZWFkRWFjaEZpbGVXb3Jkcyxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFJQTtBQUVBOzs7QUNOQSxJQUFPLG9CQUFROzs7QUNxQmYsSUFBTSxhQUErQztBQUFBLEVBQ25ELGNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvSkosSUFBTyxzQkFBUTs7O0FGbEtmOzs7QUdUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU0sTUFBTSxRQUFRO0FBQ3BCLElBQU0sV0FBVyxLQUFLLEtBQUssK0VBQStFLE1BQU0sTUFBTSxNQUFNO0FBTTVILHNCQUFzQixlQUE4QixDQUFDLEtBQUssTUFBYyxVQUFVLFlBQTJCLElBQUk7QUFDL0csUUFBTSxRQUFRLEdBQUcsWUFBWTtBQUM3QixRQUFNLFFBQVEsQ0FBQyxNQUFNLFVBQVU7QUFDN0IsUUFBSSxXQUFXLEtBQUssS0FBSyxLQUFLO0FBQzlCLFVBQU0sT0FBTyxHQUFHLFNBQVM7QUFDekIsUUFBSSxDQUFFLHlCQUF3QixRQUFRO0FBQ3BDLFVBQUksTUFBTSxPQUFPO0FBQUE7QUFFbkIsaUJBQWEsUUFBUSxDQUFDLGdCQUFnQjtBQUNwQyxVQUFJLEtBQUssaUJBQWlCLFNBQVMsZUFBZSxTQUFTLFlBQVksU0FBUyxhQUFhO0FBQzNGLHFCQUFhLGNBQWMsS0FBSyxLQUFLLEtBQUssT0FBTztBQUFBLGFBQzVDO0FBQ0wsWUFBSSxLQUFLLFNBQVMsU0FBUyxRQUFRO0FBRWpDLGdCQUFNLGNBQWMsS0FBSyxTQUFTLFVBQVUsTUFB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
