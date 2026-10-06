# 开发说明

所有下列代码和素材路径均相对于项目根目录。当前页面入口为 `site/index.html`。

## 页面映射

| 页面 | 文件 |
| --- | --- |
| 首页 | `site/index.html` |
| 项目介绍 | `site/about.html` |
| 音标与听辨 | `site/phonetics.html` |
| 语法 | `site/grammar.html` |
| 词汇 | `site/vocabulary.html` |
| 阅读 | `site/reading.html` |
| 每周课程 | `site/columns.html` |
| Fluent Forever | `site/fluent-forever.html` |
| Make It Stick | `site/make-it-stick.html` |
| 小王子共读 | `site/little-prince.html` |
| 读书会软件 | `site/tools.html` |

页面样式位于 `site/styles/`，浏览器脚本位于 `site/scripts/`。`phonetics.css` 目前兼有共用基础样式，多页引用它；改动时需检查其他页面。首页仍有内联样式与交互，后续组件化时再拆分。

## 素材与数据约定

- 网页的图片、音频和下载均从 `site/assets/` 读取。JS 设置的图片路径、试听数据和专栏 JSON 内的媒体路径，以 `site/` 为基准；ES module 的 `import` 路径相对于脚本文件。
- 书封统一存放在 `site/assets/images/books/`。不同页面引用同一张图片，不再各自复制。
- `images/columns/originals/`、`images/tools/originals/` 是页面大图查看所需的原图，应随站点保留。第一周使用的 SVG 无需另存一份原图。
- 原图、压缩预览和缩略图有不同用途，即使画面相同也保留；仅字节完全相同的文件合并。
- `site/assets/downloads/anki/` 的 6 个 APKG 是唯一的卡组原件与下载文件。文件名统一为 `phonetics`、`grammar`、`sentences`、`coca-30000`、`phrases`、`wordbook`；下载按钮可继续使用中文下载名称。
- `site/data/columns-data.json` 是专栏页面的完整输入，含 weekly、fluent、stick、prince 四组。`resources/catalogs/course-catalog.json` 是每周课程的整理输入；两个目录里的媒体 URL 都相对于 `site/`。
- 软件安装包配置维护在 `site/data/tools-downloads.json`。目前没有已发布安装包，页面保留相应的待发布状态。
- 新增资源先按用途命名，建议小写英文与连字符。研究笔记、历史截图可保留中文名称。不要使用 `image copy`、临时剪贴板 UUID 或绝对桌面路径作为运行依赖。

## 维护命令

预览和文件检查只需 Python 3.9+ 标准库；平台测试需要 Node。提取音频需要 Node 24+ 的 Zstandard 支持；重做图片预览需要 `scripts/requirements.txt` 中的 Pillow，可按需在本地虚拟环境安装。

| 命令 | 输入与输出 |
| --- | --- |
| `python3 scripts/serve.py` | 从任意工作目录启动本地预览，只服务 `site/` |
| `python3 scripts/check_project.py --write-manifest` | 检查引用、原始媒体哈希和重复文件，更新 `resources/asset-manifest.json` |
| `node tests/tools-platform.test.mjs` | 21 项平台识别、用户提示拒绝及下载地址规则检查 |
| `python3 scripts/prepare_phonetics.py` | 从唯一音标卡组重提取 6 段试听及试听数据 |
| `python3 scripts/prepare_vocabulary.py` | 盘点词汇卡组，重提取 3 段试听及示例数据 |
| `python3 scripts/prepare_tools.py` | 从本地 12 张高清软件截图重做 WebP 预览和缩略图 |
| `python3 scripts/prepare_columns.py` | 从本地课程原图与已存元数据更新每周课程，保留其他专栏 |
| `python3 scripts/build_columns.py` | 覆盖生成 4 个专栏 HTML，并同步首页课程数据及导航 |
| `python3 scripts/connect_reading_nav.py` | 同步阅读、工具导航和导航样式引用 |

素材脚本的新报告写入 `docs/maintenance/generated/`，历史报告保留在 `docs/history/`。无需为了预览运行生成脚本。修改专栏时需决定维护生成器还是生成后的 HTML，避免随后重新生成覆盖手工修改。

检查器中的整理前 SHA-256 是媒体保护基线。以后有意更新素材时，需要保留该历史迁移记录，并相应调整校验方式；不要把正常更新误判为本次整理损坏。检查器不访问外部视频服务，也不代替浏览器交互测试。

## 后续开发已有条件

11 个页面、6 套卡组、9 段试听、课程资料及设计截图均已在项目内。框架选型、应用工程初始化、软件下载发布及上线属于后续开发工作。部分专栏封面和视频仍引用外部服务；本次整理保留既有行为。
