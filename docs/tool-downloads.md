# 读书会客户端下载配置

Nuxt 页面：`app/pages/tools.vue`；下载组件：`app/components/learning/ToolDownloads.vue`；唯一运行时配置：`app/data/downloads.json`。旧 `site/` 为历史设计参照，不参与 Nuxt 运行。

| 配置键 | 安装包 | 当前版本 |
| --- | --- | --- |
| `win-x64` | Windows 64 位 · x64 | 0.4.34 |
| `mac-arm64` | macOS · Apple 芯片 | 0.4.34 |
| `mac-x64` | macOS · Intel 芯片 | 0.4.34 |

2026-10-22 已将 Windows x64、macOS Apple 芯片（ARM64）与 macOS Intel 芯片（x64）的下载地址和版本号统一更新至 0.4.27，三个安装包的公网 HTTPS HEAD 请求均返回 HTTP 200。没有下载或执行完整安装包，也没有推断最低系统版本、代码签名或安装兼容性。

不提供 Windows 32 位安装包。识别到 32 位 Windows 时显示不支持提示，不自动选择 x64。Windows ARM 兼容性未确认；Mac 浏览器未提供可靠芯片信息时保留手动选择。`Win32` 平台字符串本身不能说明操作系统是 32 位。

更新版本时同时更新 `url` 与 `version`，状态保持 `published`。只有状态为 `published` 且 URL 为有效 HTTPS 地址时才显示下载按钮。最低系统要求经验证后填入 `minimumSystem`，空值时不显示未经确认的要求。临时撤下时改为 `pending` 并清空 URL。

验证：`npm run check`；`PLAYWRIGHT_BASE_URL=http://127.0.0.1:4177 npm run test:e2e -- --grep tools`。浏览器测试检查三个选项、对应的精确 URL、版本信息，以及 32 位系统不被错误推荐。

2026-11-05 首次迁移曾沿用官网旧的 0.4.27 链接；该版本现已由正式 0.4.34 替代。当前 Windows x64、macOS ARM64 和 macOS x64 三份安装包均经 `download.books-club.cn` 分发，配置、首屏及 FAQ 统一为 0.4.34。

三份完整 CDN 下载与正式更新清单的 SHA-512 及本地原件 SHA-256 一致，首尾 Range 校验通过。公网 Chrome 实际切换三个选项，版本与对应 CDN 地址均正确。发布与回滚记录见 [部署信息](../DEPLOYMENT.md)。本次未修改客户端更新源，也未执行安装验收。
