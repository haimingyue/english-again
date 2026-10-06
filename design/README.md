# 设计资料

- `screenshots/v3/`：本次整理前已有的 V3 桌面、手机及交互截图。
- `references/cambly/`：网页设计参考截图。
- `sketches/`：用户提供的手写页面草稿，保留原文件名便于溯源。
- `archive/v1/`：第一版 UI 图片和说明。
- `archive/v2/`：第二版 HTML、桌面与手机截图和说明。
- `archive/initial/`：最初首页 PNG、SVG 和人物素材。

当前可编辑页面已迁至 [site/](../site/)，后续开发以该目录为准。截图是既有设计快照，不会随网页自动更新。

如需查看历史 HTML，在项目根目录运行 `python3 -m http.server 4188 --bind 127.0.0.1`，再打开 `/design/archive/v2/index.html`。历史页面复用规范化后的部分素材，需要从项目根目录预览。当前站点可以仅服务 `site/`，没有这种依赖。

历史设计说明和验证数据保留原时点语义。旧版一次性生成器已归档到 `docs/history/generators/`，以 `.py.txt` 保存供参考。
