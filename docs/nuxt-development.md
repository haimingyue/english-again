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

建议静态部署 `.output/public`，不发布项目根目录。预渲染产物不包含 `node_modules` 或开发服务器。域名确定后可补充站点 canonical、绝对社交分享图和 sitemap；当前不虚构部署域名。

客户端 0.4.19 已提供 Windows x64、macOS ARM64 和 macOS x64 三种安装包；不提供 Windows 32 位版。发布时更新 `app/data/downloads.json`，同步版本号和真实地址；最低系统版本未确认，保持空值。识别到 32 位 Windows 时不自动选择 64 位安装包。

浏览器测试不会访问外部视频站播放，也不安装 Anki/客户端；覆盖本地入口、真实资源响应、浏览器音频、学习状态和下载可用性规则。

## 原设计和历史文档

`site/`、`docs/development.md` 和整理记录仍可用于追溯原型。新功能应修改 `app/`，历史 HTML 修改不会自动进入 Nuxt。

## 重现截图验收

启动原型端口 4176 与 `.output/public` 静态预览端口 4177，运行 `node scripts/capture-qa.mjs`。脚本以相同的 1440×1000 和 390×1000 视口截图，等待懒加载图片，记录溢出、资源与浏览器错误。原始 PNG 不进入 Git；可用安装 Pillow 的 Python 运行 `scripts/compare-qa.py`，生成并排 JPG。每组左为原设计，右为 Nuxt。

2026-10-06 安装时，`npm audit` 报告构建依赖链 14 项高危/严重告警，涉及 Nuxt 开发工具间接引入的 simple-git、braces、node-forge 等。当前上游组合没有兼容的一键修复；未采用 audit 建议的 Nuxt 3 降级。此记录不代表告警已修复。发布静态产物不携带这些 Node 包；升级工具链时应重新审查锁文件与兼容性。
