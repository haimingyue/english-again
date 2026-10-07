# 英语自学指北 · English Again

从发音到阅读，重新学一次英语。基于现有 11 页设计，以 **Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4** 重写，公众页面默认生成可直接部署的静态网站，访问管理后台由同机独立 Python 服务提供。

线上地址、SSH 连接命令、密钥位置和当前发布版本见根目录 [部署信息](DEPLOYMENT.md)。

## 开始开发

需要 Node.js 24.15+（推荐使用 `.nvmrc`）和 Git LFS。卡组使用 LFS，首次克隆后需拉取完整文件：

```bash
git clone https://github.com/haimingyue/english-again.git
cd english-again
git lfs install
git lfs pull
npm ci
npm run dev
```

打开 http://127.0.0.1:3000 。

```bash
npm run check       # 严格类型检查、搜索与平台识别单元测试
npm run test:e2e    # Chrome：11 页响应式、无障碍和学习交互验收
npm run generate   # 静态产物 .output/public
npm run build      # 可选：Nitro 服务端部署产物
```

本机浏览器验收使用已安装的 Google Chrome；CI 使用 Playwright Chromium。可通过 `PLAYWRIGHT_BASE_URL` 对独立运行的生产预览执行相同测试。构建与开发服务器共用 `.nuxt`，请停止开发服务器后再构建。

## 工程结构

```text
app/
  pages/           11 个页面与旧 .html 地址别名
  layouts/         公共布局
  components/      导航、弹窗、选项卡、学习练习、专栏、工具展示
  composables/     页面 SEO、图片预览、音频生命周期
  data/            类型化课程和练习内容、客户端发布配置
  utils/           纯函数：检索、平台识别、键盘导航
  assets/css/      Tailwind 4 主题与设计交互状态
site/              原 HTML/CSS 设计参照，保留用于对照验收
  assets/          唯一媒体源，由 Nitro 映射至 /assets
tests/            单元测试与 Playwright 浏览器测试
design/           原设计与验收资料
docs/             开发和迁移说明
```

`site/*.html`、旧样式和旧脚本不参与 Nuxt 运行。图片、9 段试听和 6 套 Anki 卡组沿用原文件；构建时复制媒体到静态产物，仓库不额外复制大文件。

## 内容维护与部署

- 页面正文在 `app/pages/`；重复交互在 `app/components/`。
- 47 个视频条目集中在 `app/data/series.ts`，首页和专栏共用。
- 软件下载状态在 `app/data/downloads.json`。只有 `status: "published"` 且 URL 合法时启用真实下载；当前提供 0.4.19 的 Windows x64、macOS ARM64 与 macOS x64 安装包，不提供 Windows 32 位版。
- `npm run generate` 后部署整个 `.output/public/`，保留子目录结构。11 个无扩展名路由和旧 `.html` 路径均预渲染；无需 Node 服务。
- 原型独立预览：`python3 scripts/serve.py --port 4176`。
- 原始素材完整性验证：`python3 scripts/check_project.py`。

详见 [Nuxt 开发说明](docs/nuxt-development.md)、[浏览器验收](design-qa.md) 和 [原始资源目录](resources/README.md)。

## GitHub Actions 构建

每次推送或发起 Pull Request 时，`Build and verify website` 会自动安装依赖与 Git LFS 资源，执行类型检查、单元测试、静态生成、资源检查和浏览器验收。也可以在 GitHub 的 Actions 页面手动运行。

全部通过后，在对应运行记录的 **Artifacts** 中下载 `english-again-static`，解压后上传到新的发布目录，再切换线上目录。产物保留 7 天；当前工作流只生成部署包，不连接服务器。

生产站点：<https://english.tlpy8.com>。连接服务器和发布步骤见 [部署信息](DEPLOYMENT.md)，Nginx 与 HTTPS 配置见 [部署说明](deploy/README.md)。

## 访问管理后台

入口：<https://english.tlpy8.com/admin/>。支持账号登录、访问概览、日期/页面/事件/设备/关键词筛选、访客轨迹、详细记录及全量 CSV 导出。公众站生产构建默认启用统计；数据保存在同机 SQLite，按北京时间查询，每日备份。开发、接口、配置、备份恢复和统计口径见 [后台说明](backend/README.md)。
