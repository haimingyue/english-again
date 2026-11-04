# Nuxt 重写说明

## 技术选择

Nuxt 4.6.0 负责路由、SEO 与静态预渲染；Vue 3.5.43 负责交互；TypeScript 严格模式。Tailwind CSS 4.3.3 通过官方 `@tailwindcss/vite` 插件集成，并使用 `@import "tailwindcss"`、`@theme` 和 `@utility`，不使用旧版 Nuxt Tailwind 模块。

网站以公开学习内容为主，预渲染保留首屏正文和可索引页面。搜索、听音、练习、选项卡和预览在客户端增强，不需要数据库或额外 API。

## 组件与数据

公共布局统一导航和页脚。`UiTabs` 提供左右键、Home/End 与 roving tabindex；`UiDialog` 使用原生 dialog 的焦点约束、Esc、遮罩关闭和关闭后焦点恢复。图片预览通过单例状态共享。音频在用户操作后创建，切换和卸载时停止，播放失败有可见反馈。

`SeriesPage` 统一四个专栏的搜索、排序、分类和空状态，`VideoCard` 统一视频封面与笔记。首页课程弹窗读取同一份 `series.ts`。其他练习根据学习任务拆分为独立组件；内容保持 TypeScript 对象，不注入 HTML 字符串，不加载旧 DOM 操作脚本。

媒体维持 `site/assets` 单一来源；Nitro `publicAssets` 映射为 `/assets`。旧 `.html` 别名已加入显式预渲染，避免静态主机直接访问返回 404。小型页面 payload 内联，避免 `.html/_payload.json` 这类文件与目录冲突。

原设计的尺寸、断点和图片位置转为 Tailwind 工具类。少量伪元素与状态规则保存在 `interaction-states.css`，按页面限定作用域。共享颜色、字体和基础样式集中在 `main.css`。

## 发布与维护

使用指南目录为 `/guides`，各期教程放在 `app/pages/guides/`。发布新一期时，在 `app/data/guides.ts` 的 `guideEpisodes` 增加期号、slug、标题、简介与主题，再新增对应的 Vue 页面；目录会自动显示已发布的教程。不要提前加入没有正文的条目。正文可复用 `GuideArticle`（单栏文章框架）和 `GuideFigure`（图片放大）。

栏目首屏右侧集中展示六套卡牌资源。标签、文件名和下载文件名在同一文件的 `guideDeckResources` 中维护，统一指向 `site/assets/downloads/anki/` 中已有的 `.apkg` 文件。

第一期是 `/guides/anki-setup`，基于 Obsidian 的“使用指南 2/index.md”整理，对外编号为第 01 期。保留原文的五段结构，只作必要文字优化，不增加侧栏目录、步骤卡片或完成清单。8 张设计图从 Obsidian 原始 Excalidraw 图稿重新导出，嵌入高清原始截图，保留元素坐标、文字、裁剪、笔触、背景与边框。使用本机 Obsidian Excalidraw 插件 2.29.0 的原生渲染器（通用 Excalidraw 0.18.1 不支持部分 `strokeOptions`，会改变手绘线宽），导出时 padding=10、scale=2/4。正文加载 `site/assets/images/guides/anki-*-2x.webp`（1192×791），显示宽度仍不超过 596 CSS 像素；`GuideFigure.previewSrc` 指向 `anki-*-hd.webp`（2385×1581），点击预览及“查看原图”使用高清版。两种规格均为无损 WebP，逐张与原生 PNG 比较 RGBA 像素完全一致。新文件名避免命中旧图片缓存，旧 596×395 文件保留以兼容已打开的页面。素材路径、原文件哈希、导出规格与校验见 `docs/maintenance/generated/guide-images-hd.json`。官方安装、同步及暂停说明在 2026-10-18 核对；图中的价格与版本只作演示，实际信息以官方页面为准。

新增教程沿用 `.html` 别名时，也要加入 `nuxt.config.ts` 的显式预渲染列表；同时更新 `scripts/check-nuxt.mjs` 和 `tests/e2e/site.spec.ts` 的路由列表，确保新页面与旧式地址都进入验收。

第一期的安卓安装包存放在 `site/assets/downloads/android/AnkiDroid-2.25.2-arm64-v8a.apk`，在 GitHub 下载地址下方提供本站下载按钮。APK 使用 Git LFS；更换版本时同步更新文件、按钮链接、文件名和版本说明，并核对官方文件哈希。

建议静态部署 `.output/public`，不发布项目根目录。预渲染产物不包含 `node_modules` 或开发服务器。域名确定后可补充站点 canonical、绝对社交分享图和 sitemap；当前不虚构部署域名。

客户端提供 Windows x64 0.4.25、macOS ARM64 和 macOS x64 0.4.24 安装包；不提供 Windows 32 位版。发布时更新 `app/data/downloads.json`，按平台核实并同步版本号和真实地址；最低系统版本未确认，保持空值。识别到 32 位 Windows 时不自动选择 64 位安装包。

浏览器测试不会访问外部视频站播放，也不安装 Anki/客户端；覆盖本地入口、真实资源响应、浏览器音频、学习状态和下载可用性规则。

## 原设计和历史文档

`site/`、`docs/development.md` 和整理记录仍可用于追溯原型。新功能应修改 `app/`，历史 HTML 修改不会自动进入 Nuxt。

## 重现截图验收

启动原型端口 4176 与 `.output/public` 静态预览端口 4177，运行 `node scripts/capture-qa.mjs`。脚本以相同的 1440×1000 和 390×1000 视口截图，等待懒加载图片，记录溢出、资源与浏览器错误。原始 PNG 不进入 Git；可用安装 Pillow 的 Python 运行 `scripts/compare-qa.py`，生成并排 JPG。每组左为原设计，右为 Nuxt。

2026-10-06 安装时，`npm audit` 报告构建依赖链 14 项高危/严重告警，涉及 Nuxt 开发工具间接引入的 simple-git、braces、node-forge 等。当前上游组合没有兼容的一键修复；未采用 audit 建议的 Nuxt 3 降级。此记录不代表告警已修复。发布静态产物不携带这些 Node 包；升级工具链时应重新审查锁文件与兼容性。

## 配套资源与完结指南（2026-10-25）

- `/resources` 与 `/resources.html` 提供 Obsidian 专栏原始 ZIP 和两个 Google TTS APK，元数据在 `app/data/resources.ts`。ZIP 用 Git LFS 管理；原始文件及二维码逐一核对 SHA-256，未执行 APK 或笔记库插件。两份 APK 的包名均为 `com.google.android.tts`，版本分别为 103.12.8 与 3.15.18.200023596，页面说明二选一，并提供系统 TTS 设置步骤和 Google 官方帮助链接。
- 首页的 `HomeResources` 与 `CommunityGroups` 展示资源入口及三个群。二维码原图完整保留；方形预览仅以 CSS 显示二维码区域，点击复用全站图片预览。原图有效期为 11 月 1 日前，群码到期后替换 `site/assets/images/community/` 资源并更新文案。
- 第二期 `/guides/phonetics-practice` 对应 `BV1zXHw6cE2p`，第三期 `/guides/reading-and-viewing` 对应 `BV1ohHg67E6q`，保留 HTML 别名。`GuideVideo` 点击后才加载 B 站播放器，`autoplay=0`，并始终保留 B 站观看入口。三期系列标注已完结。
- 新增页面同时维护 `nuxt.config.ts` 的 HTML 别名预渲染、`scripts/check-nuxt.mjs` 静态路由清单及浏览器路由验收。资源页可从首页、专栏、指南及页脚到达。
