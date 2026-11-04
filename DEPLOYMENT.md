# 线上部署信息

最后核实：2026-11-04。继续部署时，先查阅本文件并通过 SSH 确认服务器的实际状态；下面的版本号是本次发布记录，后续发布后需要更新。

## 站点与当前版本

| 项目 | 信息 |
| --- | --- |
| 线上首页 | <https://english.tlpy8.com> |
| 阅读页面 | <https://english.tlpy8.com/reading/> |
| 使用指南 | <https://english.tlpy8.com/guides/> |
| 第一期教程 | <https://english.tlpy8.com/guides/anki-setup/> |
| 第二期教程 | <https://english.tlpy8.com/guides/phonetics-practice/> |
| 第三期教程 | <https://english.tlpy8.com/guides/reading-and-viewing/> |
| 配套资源 | <https://english.tlpy8.com/resources/> |
| 学习交流群 | <https://english.tlpy8.com/#community> |
| GitHub 仓库 | <https://github.com/haimingyue/english-again> |
| 发布分支 | `main` |
| 当前线上源码 | `9436d6c0959026269ad37cd8df1cea61138fa8fa` 加之前已上线的页面、指南与资源更新；本次替换用户最终提供的语法、句子牌组，新增《小王子》Day 07 和 Day 08，并同步集数、卡片数、文件大小及下载缓存版本。这些已上线代码与资源已于 2026-11-05 整理提交至 `main`；发布时的源码快照与文件哈希保存在服务器备份目录 |
| 当前发布目录 | `/var/www/english-again/releases/decks-prince-20261104` |
| 上一版（可回滚） | `/var/www/english-again/releases/resources-guides-20261025` |

公众网站采用 Nuxt 静态生成，Nginx 提供 `.output/public/` 中的文件。访问管理后台由同机 Python/Gunicorn 服务和 SQLite 数据库提供，入口为 <https://english.tlpy8.com/admin/>。服务器无需 Node、PM2 或 Docker。详见 [后台说明](backend/README.md)。

GitHub Actions 的 `Build and verify website` 目前只负责构建、验收并上传 `english-again-static` 产物，保留 7 天；**没有配置自动 SSH 发布**。Actions 成功或点击 `Re-run all jobs` 都不会更新线上网站，仍需上传产物并切换发布目录。

## 已验证的 SSH 连接

- 服务器：`47.120.46.32`，Ubuntu 26.04，2 核 / 2 GB。
- 用户：`root`，端口：`22`。
- 本机密钥：`/Users/simoon/Desktop/project/英语自学指北/_simoonqian2c2g.pem`，位于项目上一级目录。
- 此连接最初记录在“为项目命名”会话，2026-10-07 已再次登录并完成发布。
- `~/.ssh/config` 中没有对应别名，使用下面的完整命令即可。本机已有服务器的 `known_hosts` 记录。

在当前 Mac 的终端运行：

```bash
ssh -i '/Users/simoon/Desktop/project/英语自学指北/_simoonqian2c2g.pem' \
  -o IdentitiesOnly=yes \
  -o BatchMode=yes \
  -o ConnectTimeout=15 \
  -o StrictHostKeyChecking=yes \
  root@47.120.46.32
```

只记录密钥位置，不将私钥内容或 PEM 文件提交到仓库。换电脑时需通过安全方式准备密钥，并核实服务器指纹。

## 服务器目录

| 用途 | 路径 |
| --- | --- |
| 各次发布产物 | `/var/www/english-again/releases/<版本号>` |
| Nginx 当前网站目录（符号链接） | `/var/www/english-again/current` |
| Nginx 站点配置 | `/etc/nginx/sites-available/english-again` |
| Nginx 公共配置 | `/etc/nginx/snippets/english-again-static.conf` |
| 文件校验清单、发布记录与配置备份 | `/var/backups/english-again` |
| 发布锁 | `/var/lock/english-again-deploy.lock` |
| HTTPS 证书验证目录 | `/var/www/letsencrypt/.well-known/acme-challenge` |
| 访问日志 | `/var/log/nginx/english-again.access.log` |
| 错误日志 | `/var/log/nginx/english-again.error.log` |

登录服务器后，先确认线上实际版本：

```bash
readlink -f /var/www/english-again/current
cat /var/backups/english-again/decks-prince-20261104.release
```

第二条命令读取当前发布记录；后续发布应读取对应版本的 `.release` 文件。

## 后续发布步骤

1. 确认要发布的源码提交。可从对应成功的 Actions 运行下载 `english-again-static`，或在本地项目根目录构建：

   ```bash
   git lfs pull
   npm ci
   npm run check
   npm run generate
   npm run check:static
   ```

   本机构建前停止开发服务器，避免共用 `.nuxt` 目录。发布的是 `.output/public/` 的全部内容，保留子目录结构；`site/*.html` 是历史原型。

2. 使用上面的 SSH 连接，通过 rsync 将产物上传到一个新的 `/var/www/english-again/releases/<版本号>/`。不要直接覆盖 `current`，也不要复用已有发布目录；目录权限为 755、文件为 644。
3. 对上传文件进行 SHA-256 比对，确认页面、`404.html`、`_nuxt/`、音频和下载资源齐全。将旧版本 `_nuxt/` 中新版本尚未包含的文件复制过去，保障已打开的页面仍能加载旧资源。
4. 获取发布锁，记录 `current` 原先指向的目录；用临时符号链接和 `mv -Tf` 原子切换到新版本。只更新静态文件不需要重启 Nginx。
5. 检查 HTTPS、HTTP 跳转、全部 13 个页面及旧 `.html` 地址、404、音频、六个 Anki 下载和阅读练习交互。失败时将 `current` 原子切回之前记录的目录。
6. 至少保留最近两版；在 `/var/backups/english-again/` 保存 `<版本号>.sha256`、`<版本号>.previous` 和 `<版本号>.release`，并更新本文件的日期、提交和发布目录。

Nginx 配置、证书续期和通用发布说明见 [deploy/README.md](deploy/README.md)。

## 阅读页发布与回滚记录（2026-10-07，历史）

- 已上线提交 `1044386`，阅读页按书中方法和例句更新。
- 185 个上传文件通过 SHA-256 比对；22 个页面地址（11 个路由及对应旧 HTML 地址）、六个 Anki 下载、404 和 HTTP 跳转检查通过。
- 公网阅读页 HTML 与本次构建一致，线上阅读提示及五组练习的浏览器交互验收通过。
- 上一版 `d8787e9-20261006` 已保留。本次切换前的目录保存在 `/var/backups/english-again/1044386-20261007.previous`。

如需撤回本次发布，在服务器上先确认 `current` 仍指向 `1044386-20261007`，再把它原子切回 `.previous` 记录的目录，并复查线上页面。若线上已是更新的版本，应使用那个版本的回滚记录，不要直接套用本次记录。


## 访问后台发布（2026-10-07）

- 前端最终发布版本：`analytics-20261007-2`，前端 187 个文件通过 SHA-256 校验，之前的 `_nuxt` 文件已保留用于兼容打开中的页面。
- 后端：`/opt/english-again-analytics/releases/analytics-20261007`；`current` 链接指向此目录。服务 `english-again-analytics` 已设为开机启动，仅监听 `127.0.0.1:8091`，使用无登录权限的 `english-analytics` 账号。
- 数据库：`/var/lib/english-again-analytics/analytics.sqlite3`，WAL 模式，权限 600；与发布目录分离。
- 备份：`english-again-analytics-backup.timer` 每天北京时间 03:15 左右运行；备份在 `/var/backups/english-again-analytics/`，保留最近 14 份。
- 管理员初始登录信息保存在本机忽略目录 `.data/analytics-admin.json`，权限 600；不上传、不提交该文件。可在后台修改密码，遗失时通过 `backend/manage.py reset-password` 从标准输入重置。
- Nginx 原配置备份：`/var/backups/english-again/analytics-20261007.nginx.previous`。
- 最近一版回滚目标记录：`/var/backups/english-again/analytics-20261007-2.previous`；如需回到后台上线前的版本，使用 `analytics-20261007.previous` 中的 `1044386-20261007`。回滚静态目录后后台和数据库可以继续保留；如需同时撤回后台入口，恢复本次 Nginx 备份并执行 `nginx -t`、重载 Nginx。不要删除数据库。
- 访问后台源码、测试和部署配置与本文件一同提交；线上基于这批代码构建。Git 提交与服务器发布分别进行，后续发布时应保留后台和采集代码。


### 最终验收

- 后端 7 项接口测试通过；前端类型检查、单元测试、11 个页面静态检查通过。
- 原网站 26 项浏览器回归通过；最终标题修正后重验阅读页、工具页、手机导航和旧 HTML 地址 4 项通过。
- 独立数据库的后台浏览器验收通过：真实 SPA 浏览与下载采集、登录、筛选、分页、全部 CSV 导出、记录详情、访客轨迹、修改密码、退出、无障碍与手机布局。
- 公网 HTTPS 验收通过：管理员登录、Secure/HttpOnly cookie、旧 HTML 入口、站内切换、正确页面标题、真实客户端 IP、下载点击、查询、详情、CSV 导出、未登录拒绝访问、CSRF 和退出。
- 线上 26 个页面/后台资源地址可访问；6 个后端核心文件与本地已验证源码哈希一致。
- 重启后台后记录保留；SQLite 备份文件已独立打开并检查完整性、比对记录。验收专用记录与测试会话已清理。
- 本次源码快照：`/var/backups/english-again/analytics-20261007-source.tar.gz`，不含密码、数据库或本机私钥。

## 全站大 PNG 优化（2026-10-14）

- 当前版本 `webp-20261014-2` 于北京时间 10:02 原子切换上线。前一版 `webp-20261014` 已上线 WebP，本次补充小尺寸平台图标；优化前的 `analytics-20261007-2` 保留。
- 将 `site/assets/images/` 和 `public/` 中超过 100 KiB 的 61 张 PNG 的页面引用改为 WebP，保留原尺寸和透明度。对应资源体积从 69,979,584 字节降至 29,695,262 字节，减少 57.57%。原 PNG 保留供旧页面和原始素材校验使用。
- 59 张截图、笔记、书封及页面标志采用无损 WebP，逐张验证 RGBA 像素完全一致。首页照片和词汇页插图采用质量 94，RGB PSNR 分别为 45.658 dB、42.870 dB；均保留原尺寸，并完成桌面与手机视觉检查。
- 首页主图 1,692,031 → 147,682 字节；词汇主图 1,340,132 → 112,544 字节。页面中的切换卡片、图片弹窗、24 张完整周笔记、12 张工具图库截图和外部封面失败后的本地回退均使用对应 WebP。
- 从原标志单独生成 32×32 PNG favicon（1,836 字节）和 180×180 Apple touch icon（17,631 字节），避免浏览器图标继续请求 385,338 字节的原标志。页面标志使用同尺寸无损 WebP。
- 类型检查、7 项单元测试（含 21 项平台断言）、296 条原素材完整性校验、61 张图片及平台图标验证、11 条静态路由与旧 HTML 别名及 986 个本地引用检查通过。完整浏览器回归 29 项通过；补充图标后再次验证全站响应式与无障碍、工具图库和全部旧 HTML 链接，13 项通过。
- 最终 250 个上传文件逐一通过 SHA-256 比对。切换后 95 项 HTTP 检查通过，涵盖 22 个页面/旧链接、61 张 WebP 的 MIME/体积/缓存、两个平台图标、六套 Anki 下载、旧 PNG 兼容、后台入口和 404；HTTP 跳转及后台健康检查通过。Nginx 和统计后台保持正常运行。
- 公网 Chrome 在 1440 和 390 像素视口完成首页、词汇页真实加载与截图验证；工具图库原尺寸图片及切换、手机菜单通过，无页面脚本错误。验收记录为 `webp-20261014-2.public-browser.json`。公网传输速度仍有波动，单次 curl 耗时不代表所有并发页面加载的耗时。
- 发布使用增量上传和硬链接复用相同资源，并保留旧 `_nuxt` 中的 68 个哈希文件，兼容已打开的页面。未更改 Nginx 配置或统计数据库。
- 发布记录：`/var/backups/english-again/webp-20261014-2.release`；SHA-256 清单：`webp-20261014-2.sha256`；图片质量清单：`webp-20261014-2.images.json`；逐项 HTTP 验收：`webp-20261014-2.validation.json`。
- 前端源码快照：`/var/backups/english-again/webp-20261014-2-source.tar.gz`，不含凭据、数据库或密钥。媒体原件和 WebP 位于对应发布目录；本地压缩工具与报告见 `scripts/optimize_pngs.py`、`docs/maintenance/generated/png-webp.json`。
- 最近一次回滚目标记录：`/var/backups/english-again/webp-20261014-2.previous`。回滚前先确认 `current` 仍指向 `webp-20261014-2`，再用临时符号链接和 `mv -Tf` 原子切回记录中的目录；仅静态文件切换无需重启服务。

## 使用指南栏目与第一期教程（2026-10-18）

- 版本 `guides-20261018` 于北京时间 19:19:01 原子切换上线；上一版 `webp-20261014-2` 保留，可通过对应 `.previous` 记录回滚。
- 所有页面的顶部导航、手机菜单和页脚增加“使用指南”。栏目地址 `/guides/`，第一期地址 `/guides/anki-setup/`；同时保留 `/guides.html` 和 `/guides/anki-setup.html`。
- 第一期采用原文五段结构的单栏图文文章，使用用户提供的 8 张设计图，保持 596×395 原尺寸、无损 WebP 和点击放大；图中的版本与价格只作演示。
- 发布前对照旧版本源码快照，确认现有页面代码与线上一致；类型检查、7 项单元测试（含 21 项平台断言）、296 条原素材校验、61 张既有 WebP 质量校验、13 条静态路由及别名和 1206 个本地引用检查通过。对最终静态产物运行的 33 项浏览器回归全部通过。
- 266 个上传文件和前端源码快照逐一完成 SHA-256 校验；增量上传实际发送 746,414 字节，复用既有资源，并保留上一版的 72 个 `_nuxt` 文件。获取发布锁后检查 `current` 仍指向预期旧版本，再原子切换；服务器本机 HTTPS 的 4 个新增页面地址内容哈希一致，后台健康检查通过。
- 切换后完成 43 项公网 HTTP 检查：26 个页面与 HTML 别名、8 张配图的完整内容哈希/MIME/缓存、6 套 Anki 下载响应、HTTP 跳转、404 和后台健康。公网浏览器的 4 项检查通过，覆盖栏目进入文章、全部 8 张图片加载、图片放大与焦点恢复、资源区跳转、HTML 别名、手机菜单，以及 320 至 1440 像素的响应式和无障碍检查。
- 发布记录：`/var/backups/english-again/guides-20261018.release`；上传文件清单：`guides-20261018.sha256`；源码快照：`guides-20261018-source.tar.gz`；公网验证：`guides-20261018.validation.json`；回滚目标：`guides-20261018.previous`。本次只切换静态发布目录，Nginx 与统计后台继续正常运行。

## 安卓 APK 下载入口（2026-10-18）

- 版本 `guides-apk-20261018` 于北京时间 19:28:00 原子切换上线，上一版为 `guides-20261018`。
- 在第一期教程的 AnkiDroid GitHub 地址下方新增“下载安卓版本”按钮，链接为 `/assets/downloads/android/AnkiDroid-2.25.2-arm64-v8a.apk`，标明 2.25.2 与 ARM64，并设置浏览器下载文件名。
- 用户提供的 APK 为 41,173,711 字节；ZIP 完整性通过，SHA-256 为 `430ff81da13f9afe965b2d6e474663324a3d84c72dbdb066bdbcd8b5317e4c4a`，与 GitHub 官方 2.25.2 发布资产的 digest 一致。仓库中 `*.apk` 使用 Git LFS。
- 类型检查、7 项单元测试、静态生成、13 条路由及别名、1208 个本地引用和 4 项使用指南浏览器检查通过；下载入口位置、download 属性与本地 APK 响应大小已验证。
- 267 个上传文件与源码快照通过 SHA-256 校验，保留 76 个旧 Nuxt 资源；持发布锁并核对旧版本后原子切换。本机 HTTPS 的文章内容、APK HEAD、1024 字节 Range 下载及后台健康检查通过。
- 切换后 8 项公网检查通过：栏目和文章的 4 个页面及别名内容哈希、APK HEAD/Range、后台健康和 404。APK 完整文件在服务器上校验哈希，公网验证返回完整大小与 `206 Partial Content`；未将安装测试计入验收。
- 服务器发布资料前缀为 `/var/backups/english-again/guides-apk-20261018`：`.release` 发布记录、`.sha256` 文件清单、`-source.tar.gz` 前端源码快照、`.validation.json` 公网验证和 `.previous` 回滚目标。APK 二进制保存在对应静态发布目录中。

## 统一卡牌资源入口（2026-10-18）

- 版本 `guides-resources-20261018` 于北京时间 19:31:46 原子切换上线；上一版 `guides-apk-20261018` 保留以便回滚。
- 将 `/guides/` 首屏右侧区域改为“卡牌资源”，提供音标、语法、句子、COCA30000、生词和短语六套卡牌的直接下载入口，复用现有 `.apkg` 文件和下载文件名。资源信息集中维护在 `app/data/guides.ts` 的 `guideDeckResources`。
- 对照上一版源码快照，只有 `app/data/guides.ts` 与 `app/pages/guides/index.vue` 的前端内容变化。类型检查、7 项单元测试、静态生成、13 条路由及别名、1220 个本地引用和 4 项使用指南浏览器检查通过；桌面视觉预览和 320 至 1440 像素响应式/无障碍检查通过。
- 267 个上传文件与前端源码快照通过 SHA-256 校验，保留 82 个旧 Nuxt 资源；持发布锁并核对旧版本后原子切换。本机 HTTPS 的 4 个栏目/文章地址与 6 套卡牌 HEAD 响应检查通过，后台健康正常。
- 切换后 19 项公网检查通过：栏目与文章 4 个地址内容哈希、六套卡牌的 HEAD 与 1024 字节 Range 响应、安卓 APK 下载 HEAD、后台健康和 404。六套卡牌均返回正确完整大小、`206 Partial Content` 和匹配的文件前缀；完整文件哈希在服务器上传校验阶段核对。
- 发布资料前缀为 `/var/backups/english-again/guides-resources-20261018`：`.release`、`.sha256`、`-source.tar.gz`、`.validation.json` 和 `.previous`。Nginx 与统计后台继续正常运行。


## 第一期高清配图重新导出（2026-10-18）

- 版本 `guides-hd-20261018` 于北京时间 19:46:17 原子切换上线；上一版 `guides-resources-20261018` 保留。
- 从 Obsidian 的 8 份原始 Excalidraw 图稿和对应嵌入原图重新渲染。使用本机 Obsidian Excalidraw 插件 2.29.0 的原生渲染器，保留原来的文字、箭头、手绘笔触、截图裁剪、背景、边框和坐标；未使用旧 596×395 合成图放大代替高清导出。
- 正文加载 `anki-*-2x.webp`（1192×791，8 张合计 844,060 字节），CSS 显示宽度仍为最多 596 像素；点击放大和“查看原图”加载 `anki-*-hd.webp`（2385×1581，8 张合计 2,383,422 字节）。16 个 WebP 均无损编码，与原生 PNG 的 RGBA 像素逐一完全一致。新文件名避免旧缓存；原低分辨率图片保留供已打开的旧页面使用。
- 图稿、嵌入素材的路径、尺寸、SHA-256、渲染器哈希和导出校验见 `docs/maintenance/generated/guide-images-hd.json`。个别原素材较小的图标保持原件；导出分辨率不会增加这些图标本身的细节。
- 与上一版前端源码快照比较，运行时代码只变更 `GuideFigure.vue` 与 `anki-setup.vue`：正文采用 2 倍图，新增可选 `previewSrc` 加载高清预览。文章文案和设计保持现状。
- 类型检查、7 项单元测试（含 21 项平台检查）、静态生成、13 条路由及旧 HTML 别名、1220 个本地 URL 引用检查通过。最终静态产物和公网各 4 项浏览器检查通过，覆盖 8 张正文图的真实加载和分辨率、高清弹窗与原图链接、焦点恢复、栏目导航、手机菜单、320 至 1440 像素布局和无障碍。
- 283 个上传文件和源码快照完成 SHA-256 核对；rsync 实际发送 3,446,378 字节，保留旧 `_nuxt` 中的 85 个哈希资源。切换后服务器本机 HTTPS 的 4 个教程页面地址和 8 张高清图校验通过。
- 58 项公网 HTTP 验证通过：26 个页面及 HTML 别名、16 张新图片完整哈希与 MIME、6 套卡牌和安卓 APK 的 HEAD/范围下载、404 和后台健康；另验证 HTTP 301 跳转。线上浏览器确认高清原图为 2385×1581，并保存截图。Nginx 和统计后台服务正常。
- 发布记录：`/var/backups/english-again/guides-hd-20261018.release`；文件校验清单：`guides-hd-20261018.sha256`；前端源码快照：`guides-hd-20261018-source.tar.gz`；公网验证：`guides-hd-20261018.validation.json`；回滚目标：`guides-hd-20261018.previous`。本次没有创建新 Git 提交。

## 客户端下载更新至 0.4.24（2026-10-22）

- `app/data/downloads.json` 中的 Windows x64、macOS Apple 芯片（ARM64）、macOS Intel（x64）下载地址与版本号统一更新为 0.4.24；同步更新软件页首屏、常见问题、维护文档和现有浏览器测试预期。
- 三个安装包的公网 HTTPS HEAD 请求均返回 200，单字节 Range 请求均返回 206；没有下载或执行完整安装包。
- 发布前与 `guides-hd-20261018` 的源码快照核对，运行时前端仅下载配置与软件页版本文案有差异，既有本地改动保留。类型检查、7 项单元测试（含 21 项平台与链接检查）、28 条路由静态生成、1220 个本地 URL 引用检查和 3 项本地软件页浏览器测试全部通过。
- 版本 `downloads-0.4.24-20261022` 于北京时间 09:16:19 原子切换上线；283 个上传文件及源码快照完成 SHA-256 核对，网站资源未出现额外变更。rsync 实际发送 256,227 字节，沿用上一版未变化的资源，并保留 88 个旧 `_nuxt` 文件。
- 公网 42 项 HTTP 检查和 3 项软件页浏览器测试通过，覆盖 13 个页面及旧 HTML 地址、版本文案、三个精确下载地址、版本切换、响应式与可访问性、32 位 Windows 提示、卡牌与 APK、音频、404 和后台健康状态。Nginx 与 analytics 服务保持正常。
- 发布记录：`/var/backups/english-again/downloads-0.4.24-20261022.release`；同目录保存 `.sha256`、`-source.tar.gz`、`.validation.json`、`.browser.log` 与 `.previous`。上一版 `/var/www/english-again/releases/guides-hd-20261018` 可回滚，本次未创建 Git 提交。

## Windows 客户端下载更新至 0.4.25（2026-10-22）

- Windows x64 下载地址及版本号更新为 0.4.25，已核实服务器更新清单和安装包。两个 macOS 0.4.25 地址返回 404，继续提供已验证可下载的 0.4.24；软件页首屏、常见问题和维护文档明确各平台的版本。
- 与上一版源码快照比较，运行时仅变更 `app/data/downloads.json` 和 `app/pages/tools.vue`。类型检查、7 项单元测试、28 条路由静态生成、13 条路由及别名、1220 个本地引用和 3 项本地软件页浏览器检查通过。
- 版本 `downloads-0.4.25-20261022` 于北京时间 10:02:01 原子切换上线；283 个文件及源码快照通过 SHA-256 校验，224 个媒体与下载资源保持一致，保留 91 个旧 Nuxt 资源。rsync 实际发送 97,705 字节，上一版 `downloads-0.4.24-20261022` 保留，可通过 `.previous` 记录回滚。
- 公网 42 项 HTTP 检查和 3 项软件页浏览器检查通过，覆盖各平台精确下载地址和版本切换、响应式与可访问性、32 位 Windows 提示、13 个页面及旧 HTML 地址、卡牌、APK、音频、404 和后台健康。三个实际下载地址 HEAD 均返回 200、单字节 Range 均返回 206；未下载或执行完整安装包。Nginx 和 analytics 服务正常。
- 发布资料前缀为 `/var/backups/english-again/downloads-0.4.25-20261022`，保存 `.release`、`.sha256`、`-source.tar.gz`、`.validation.json`、`.browser.log` 和 `.previous`。本次未创建 Git 提交。

## 三个平台客户端下载更新至 0.4.27（2026-10-22）

- Windows x64、macOS Apple 芯片（ARM64）与 macOS Intel 芯片（x64）的下载地址和版本号统一更新为 0.4.27；同步更新软件页首屏、常见问题、维护文档及现有浏览器测试预期。三个安装包的公网 HEAD 请求均返回 200，单字节 Range 请求均返回 206；未下载或执行完整安装包。
- 与上一版线上源码快照核对，运行时仅变更 `app/data/downloads.json` 和 `app/pages/tools.vue`，保留其他已有本地改动。类型检查、7 项单元测试、28 条路由静态生成、13 条路由与别名及 1220 个本地引用检查、3 项本地软件页浏览器测试通过。
- 版本 `downloads-0.4.27-20261022` 于北京时间 16:33:11 原子切换上线；283 个上传文件及源码快照通过 SHA-256 校验，224 个媒体与下载资源保持一致，保留 94 个旧 Nuxt 资源。rsync 实际发送 258,172 字节。上一版 `downloads-0.4.25-20261022` 已保留，可通过 `.previous` 记录回滚。
- 公网 42 项 HTTP 检查及 3 项软件页浏览器测试通过，覆盖 13 个页面及旧 HTML 地址、三个平台的精确下载地址与版本切换、响应式与可访问性、32 位 Windows 提示、卡牌、APK、音频、404 和后台健康。首页、软件页及其 HTML 别名、第一期教程的公网内容与本地构建 SHA-256 一致，Nginx 和统计后台保持正常。
- 发布资料前缀为 `/var/backups/english-again/downloads-0.4.27-20261022`，保存 `.release`、`.sha256`、`-source.tar.gz`、`.validation.json`、`.browser.log`、`.installers.json`、`.deployment.md` 和 `.previous`。本次未创建 Git 提交。


## 首页学习群、专栏笔记与完结指南（2026-10-25）

- 首页新增资源工具箱和三个学习群二维码，支持打开完整原图、Escape 关闭及焦点恢复。二维码原图与用户提供的 JPG 一致，方形区域以 CSS 裁剪显示；原图标注“11 月 1 日前有效”，页面保留对应提示。
- `/resources` 与 `/resources.html` 提供原始 Obsidian 专栏 ZIP（235,104,138 字节）、Google TTS 103.12.8 APK（40,859,057 字节）、备用 3.15.18.200023596 APK（16,271,037 字节）。首页、每周专栏、使用指南、页脚提供入口。所有新文件与用户原件 SHA-256 一致；两个 APK 的包名均为 `com.google.android.tts`，页面说明二选一，并提供系统文字转语音、英语语音数据包和试听设置步骤。
- 第二期 `/guides/phonetics-practice` 对应 B 站 `BV1zXHw6cE2p`（15:06），第三期 `/guides/reading-and-viewing` 对应 `BV1ohHg67E6q`（15:09），均保留 HTML 别名。播放器点击后才加载，禁用自动播放，并保留 B 站链接。目录与各期标注三期系列已完结。
- 类型检查、7 项单元测试、34 条路由静态生成、16 条路由及 HTML 别名、1580 个本地引用及 36 项本地浏览器回归通过。额外核对三个二维码原图放大、三个精确下载链接、两个视频的延迟加载配置与 5 个手机页面，并保存桌面及手机截图；没有执行 APK、Obsidian 插件或进行安卓真机安装测试。
- 版本 `resources-guides-20261025` 于北京时间 14:53:33 原子切换上线。303 个上传文件和源码快照通过 SHA-256 校验，224 个既有媒体及下载资源保持不变，保留 108 个旧 Nuxt 资源。限速增量上传实际发送 293,832,175 字节，上一版 `downloads-0.4.27-20261022` 保留可回滚。
- 公网 65 项 HTTP 验证通过，覆盖 16 个页面及 HTML 别名、既有卡牌/APK/音频、404、HTTPS 跳转及后台健康。7 个页面内容与本地构建 SHA-256 一致；3 个新下载文件 HEAD 200、大小正确且单字节 Range 返回 206，4 张新图片公网完整哈希与原件一致。
- 公网 8 项浏览器回归通过，覆盖首页、资源页、完结指南、两个视频页、第一期图文与导航、客户端精确下载链接。额外复验 3 个群码预览、3 个下载链接、2 个播放器配置、5 个手机页面并保存截图，无页面脚本错误；播放器验收确认按需加载与 B 站入口，没有断言外部视频流完整播放。
- 发布资料前缀 `/var/backups/english-again/resources-guides-20261025`，保存 `.release`、`.sha256`、`-source.tar.gz`、`.assets.json`、`.validation.json`、`.browser.log`、`.acceptance.json`、`.deployment.md` 与 `.previous`。Nginx 与统计后台保持健康。


## 卡牌替换与《小王子》更新（2026-11-04）

- `decks-prince-20261104` 于北京时间 22:08:09 原子上线；上一版 `resources-guides-20261025` 保留。
- 使用用户在 22:05–22:06 重新提供的最终文件替换语法、句子牌组；先前撤回的文件未发布。语法 1,627 张、383,291 字节；句子 2,705 张、588,389 字节。两个 ZIP 与 SQLite 完整性检查通过，未执行卡片模板或导入 Anki。
- 语法页与指南页下载地址增加 `?v=20261104`，保留原路径和中文下载文件名；同步卡片数与文件大小。
- 《小王子》新增 Day 07（`BV1BGpJ6LE1d`，13:16）与 Day 08（`BV14dxt6fEbf`，13:46）；标题、封面和时长取自 Bilibili 视频接口。开篇加 Day 01–08 共 9 集，阅读页及专栏导航已同步。
- 静态生成、16 条路由及旧 HTML 别名、1,580 个本地引用检查通过；资源校验确认 292 条原始媒体记录和 4 条替换记录（对应两个文件），无错误。原始迁移哈希保留，替换哈希单独记录在 `resources/asset-replacements.json`。
- 303 个上传文件通过 SHA-256 校验，增量传输发送 1,402,120 字节；保留 124 个旧 Nuxt 资源。持发布锁、核对前版后原子切换，8 项服务器本机 HTTPS 内容哈希与后台健康检查通过。
- 61 项公网 HTTP 验证通过：16 条路由与旧地址、9 个页面的完整哈希、两份牌组原路径及带版本号下载的完整 SHA-256、Range 206、六套牌组响应、音频、HTTP 跳转、404 与后台健康。下载内容与用户最终文件逐字节一致。
- 公网浏览器 3 项检查通过：阅读提示及全部五组练习、小王子搜索/排序/空状态/重置、语法展开与六套牌组下载响应。未验证外部视频完整播放或真实 Anki 导入。
- 发布记录与回滚资料前缀：`/var/backups/english-again/decks-prince-20261104`，包含 `.release`、`.sha256`、`-source.tar.gz`、`.assets.json`、`.validation.json` 和 `.previous`。回滚前先确认当前仍为本版本，再在发布锁内原子切回 `.previous` 中的目录。

最终牌组 SHA-256：

- 句子：`541f901579c99a59b717507621b0f615d6b63104cf58f9f3dbdd5e7ab829ebd2`。
- 语法：`1295a3b2a929b567f5447ddc9b9b7a9e47d4b151a95587f442cfeab2b6840061`。
