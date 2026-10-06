# 又见英语 · English Again

从发音到阅读，重新学一次英语。项目汇集「英语自学指北」课程、练习资料与学习工具。

当前开发基线是 `site/` 中的 V3 静态网页，共 11 个页面。项目资源已于 2026-10-06 整理；后续开发从此目录继续。

## 获取项目

项目中的 Anki 卡组使用 [Git LFS](https://git-lfs.com/) 保存。安装 Git LFS 后运行：

```bash
git lfs install
git clone https://github.com/haimingyue/english-again.git
cd english-again
git lfs pull
```

本地预览和素材检查需要完整的卡组文件，请确认已完成 Git LFS 下载。

## 预览与检查

在项目根目录运行：

```bash
python3 scripts/serve.py
```

打开 <http://127.0.0.1:4176/>。端口被占用时运行 `python3 scripts/serve.py --port 4187`。请通过 HTTP 预览，工具页需要读取 JSON 配置。

```bash
python3 scripts/check_project.py --write-manifest
node tests/tools-platform.test.mjs
```

第一条检查本地引用、锚点、JSON、媒体完整性及重复文件，并更新资源索引。第二条运行现有的 21 项平台识别与下载规则检查。

## 目录

```text
site/                       当前网页；可独立作为静态站点根目录
  *.html                    11 个页面
  styles/                   页面样式和共用导航样式
  scripts/                  浏览器脚本、试听数据
  data/                     专栏数据、软件下载配置
  assets/
    images/                 按用途分组；books/ 统一存放书封
    audio/                  phonetics/ 和 vocabulary/ 试听
    downloads/anki/         6 套真实卡组，每套只保留一份
resources/                  内容目录、研究笔记、原始输入、素材索引
design/                     V3 截图、参考、手写草稿、V1/V2 归档
scripts/                    预览、检查、素材处理和页面生成脚本
tests/                      现有平台识别测试
docs/                       开发说明、整理记录、历史资料
```

## 开发入口

| 入口 | 用途 |
| --- | --- |
| [开发说明](docs/development.md) | 页面映射、资源约定、脚本和已知待办 |
| [资源目录](resources/README.md) | 素材、内容数据、原件的位置 |
| [完整素材索引](resources/asset-manifest.json) | 文件大小、SHA-256、原路径、静态引用者 |
| [设计资料](design/README.md) | 当前设计截图及历史版本 |
| [软件下载配置](docs/tool-downloads.md) | 软件安装包的发布字段 |
| [本次整理记录](docs/maintenance/整理说明-2026-10-06.md) | 迁移、去重、备份及验证范围 |

当前是 HTML/CSS/JavaScript 原型，已使用 Git 管理，尚未建立正式框架工程。不要在旧版归档中继续开发。历史记录中的页面状态、文件路径和待补资源是当时的快照，以本说明、当前文件及最新验证结果为准。
